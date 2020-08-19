const { Engine, Render, Runner, World, Bodies } = Matter;

const cells = 5;
const width = 600;
const height = 600;
const engine = Engine.create();

const unitLenght = width / cells;
const unitHeight = height / cells;

const { world } = engine;

const render = Render.create({
  element: document.body,
  engine: engine,
  options: {
    width: width,
    height: height,
    // wireframes: false,
  },
});
Render.run(render);
Runner.run(Runner.create(), engine);

// walls
const walls = [
  Bodies.rectangle(width / 2, 0, width, 40, { isStatic: true }),
  Bodies.rectangle(width / 2, height, width, 40, { isStatic: true }),
  Bodies.rectangle(0, height / 2, 40, height, { isStatic: true }),
  Bodies.rectangle(width, height / 2, 40, height, { isStatic: true }),
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

const grid = Array(cells)
  .fill(null)
  .map(() => Array(cells).fill(false));

const verticals = Array(cells)
  .fill(null)
  .map(() => Array(cells - 1).fill(false));

const horizentals = Array(cells - 1)
  .fill(null)
  .map(() => Array(cells).fill(false));

const startRow = Math.floor(Math.random() * cells);
const startColumn = Math.floor(Math.random() * cells);

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
      nextRow >= cells ||
      nextColumn < 0 ||
      nextColumn >= cells
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
      columnIndex * unitLenght + unitLenght / 2,
      rowIndex * unitLenght + unitLenght,
      unitLenght,
      10,
      {
        isStatic: true,
      }
    );
    World.add(world, wall);
  });
});

verticals.forEach((row, rowIndex) => {
  row.forEach((open, columnIndex) => {
    if (open) return true;
    const wall = Bodies.rectangle(
      columnIndex * unitLenght + unitLenght,
      rowIndex * unitLenght + unitLenght / 2,
      10,
      unitLenght,
      {
        isStatic: true,
      }
    );
    World.add(world, wall);
  });
});
