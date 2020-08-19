const { Engine, Render, Runner, World, Bodies, Body, Events } = Matter;

const cellsHorizontal = 6;
const cellsVertical = 4;

const width = window.innerWidth;
const height = window.innerHeight;

const unitLenghtX = width / cellsHorizontal;
const unitLenghtY = height / cellsVertical;
const engine = Engine.create();

engine.world.gravity.y = 0;
const { world } = engine;

const render = Render.create({
  element: document.body,
  engine: engine,
  options: {
    width: width,
    height: height,
    wireframes: false,
  },
});
Render.run(render);
Runner.run(Runner.create(), engine);

// walls
const walls = [
  Bodies.rectangle(width / 2, 0, width, 2, { isStatic: true }),
  Bodies.rectangle(width / 2, height, width, 2, { isStatic: true }),
  Bodies.rectangle(0, height / 2, 2, height, { isStatic: true }),
  Bodies.rectangle(width, height / 2, 2, height, { isStatic: true }),
];

World.add(world, walls);

//Maze generation
const shuffle = (arr) => {
  let counter = arr.length;
  while (counter > 0) {
    const index = Math.floor(Math.random() * counter);
    counter--;
    const temp = arr[counter];
    arr[counter] = arr[index];
    arr[index] = temp;
  }
  return arr;
};

const grid = Array(cellsVertical)
  .fill(null)
  .map(() => Array(cellsHorizontal).fill(false));

const verticals = Array(cellsVertical)
  .fill(null)
  .map(() => Array(cellsHorizontal - 1).fill(false));

const horizentals = Array(cellsVertical - 1)
  .fill(null)
  .map(() => Array(cellsHorizontal).fill(false));

const startRow = Math.floor(Math.random() * cellsVertical);
const startColumn = Math.floor(Math.random() * cellsHorizontal);

const stepThroughCell = (row, column) => {
  // If I have visited the cell at [row,column ] then return
  if (grid[row][column]) return;
  // Mark this cell as visited
  grid[row][column] = true;
  //   Assemble randomly-orderd list of neighbors
  const neighbors = shuffle([
    [row - 1, column, "up"],
    [row + 1, column, "down"],
    [row, column - 1, "left"],
    [row, column + 1, "right"],
  ]);

  // For each neighbor
  for (let neighbor of neighbors) {
    const [nextRow, nextColumn, direction] = neighbor;

    // see if the neighbor is out of the bounds
    if (
      nextRow < 0 ||
      nextRow >= cellsVertical ||
      nextColumn < 0 ||
      nextColumn >= cellsHorizontal
    )
      continue;

    // if we have visited that neighbor, continue to next neghbor
    if (grid[nextRow][nextColumn]) continue;

    //   remove the wall from the horizental either vertical
    if (direction === "left") {
      verticals[row][column - 1] = true;
    } else if (direction === "right") {
      verticals[row][column] = true;
    } else if (direction === "up") {
      horizentals[row - 1][column] = true;
    } else if (direction === "down") {
      horizentals[row][column] = true;
    }
    stepThroughCell(nextRow, nextColumn);
  }
  // Visit that next cell
};

stepThroughCell(startRow, startColumn);

horizentals.forEach((row, rowIndex) => {
  row.forEach((open, columnIndex) => {
    if (open) return;
    const wall = Bodies.rectangle(
      columnIndex * unitLenghtX + unitLenghtX / 2,
      rowIndex * unitLenghtY + unitLenghtY,
      unitLenghtX,
      10,
      {
        label: "wall",
        isStatic: true,
        render: {
          fillStyle: "red",
        },
      }
    );
    World.add(world, wall);
  });
});

verticals.forEach((row, rowIndex) => {
  row.forEach((open, columnIndex) => {
    if (open) return true;
    const wall = Bodies.rectangle(
      columnIndex * unitLenghtX + unitLenghtX,
      rowIndex * unitLenghtY + unitLenghtY / 2,
      10,
      unitLenghtY,
      {
        label: "wall",
        isStatic: true,
        render: {
          fillStyle: "red",
        },
      }
    );
    World.add(world, wall);
  });
});

//Goal

const goal = Bodies.rectangle(
  width - unitLenghtX / 2,
  height - unitLenghtY / 2,
  unitLenghtX * 0.7,
  unitLenghtY * 0.7,
  {
    isStatic: true,
    label: "goal",
    render: {
      fillStyle: "green",
    },
  }
);
World.add(world, goal);

// Ball
const ballRadius = Math.min(unitLenghtX, unitLenghtY) / 4;
const ball = Bodies.circle(unitLenghtX / 2, unitLenghtY / 2, ballRadius, {
  label: "ball",
  render: {
    fillStyle: "blue",
  },
});
World.add(world, ball);

document.addEventListener("keydown", (event) => {
  const { x, y } = ball.velocity;
  if (event.keyCode === 87) {
    Body.setVelocity(ball, { x, y: y - 5 });
  }
  if (event.keyCode === 68) {
    Body.setVelocity(ball, { x: x + 5, y });
  }
  if (event.keyCode === 83) {
    Body.setVelocity(ball, { x, y: y + 5 });
  }
  if (event.keyCode === 65) {
    Body.setVelocity(ball, { x: x - 5, y });
  }
});

// Win Condition

Events.on(engine, "collisionStart", (event) => {
  event.pairs.forEach((collision) => {
    const labels = ["ball", "goal"];
    if (
      labels.includes(collision.bodyA.label) &&
      labels.includes(collision.bodyB.label)
    ) {
      document.querySelector(".winner").classList.remove("hidden");
      world.gravity.y = 1;
      world.bodies.forEach((body) => {
        if (body.label === "wall") Body.setStatic(body, false);
      });
    }
  });
});
