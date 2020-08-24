const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cookieSession = require("cookie-session");
const usersRepo = require("./repositories/users");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(
  cookieSession({
    keys: ["hekhsdfkjhaksdfhafsd"],
  })
);
app.get("/signup", (req, res) => {
  res.send(`
  <div>
  your id is :
  ${req.session.userId}
  <form method= "POST">
  <input name="email" type="text" placeholder="email"/>
  <input name="password" type="password" placeholder="password"/>
  <input name="passwordConfirmation"  type="password"  placeholder="password confirmation"/>
<button>signup</button>
  </form>
  
  </div>
  
  `);
});

// const bodyParser = (req, res, next) => {
//   if (req.method === "POST") {
//     req.on("data", (data) => {
//       const parsed = data.toString("utf8").split("&");
//       const formData = {};
//       for (let pair of parsed) {
//         const [key, value] = pair.split("=");
//         formData[key] = value;
//       }
//       req.body = formData;
//       next();
//     });
//   } else {
//     next();
//   }
// };
app.post("/signup", async (req, res) => {
  const { email, password, passwordConfirmation } = req.body;
  const existingUser = await usersRepo.getOneBy({ email });
  if (existingUser) {
    return res.send("email in use sorry:((");
  }
  if (password !== passwordConfirmation) {
    return res.send("passwords must match");
  }

  const user = await usersRepo.create({ email, password });

  // store the id of that user inside the users cookie
  req.session.userId = user.id;

  res.send("account creates");
});
app.post("/products", (req, res) => {});

app.get("/signout", (req, res) => {
  req.session = null;
  res.send("you are logged out");
});

app.get("/signin", (req, res) => {
  res.send(`
  <div>
 
  <form method= "POST">
  <input name="email" type="text" placeholder="email"/>
  <input name="password" type="password" placeholder="password"/>
<button>signin</button>
  </form>
  
  </div>
  `);
});
app.post("/signin", async (req, res) => {
  const { email, password } = req.body;
  const user = await usersRepo.getOneBy({ email: email });
  if (!user) {
    return res.send("email not found");
  }
  const validPassword = await usersRepo.comparePassword(
    user.password,
    password
  );
  if (!validPassword) return res.send("invalid password");
  req.session.userId = user.id;
  res.send("you are logged in");
});

app.listen(3000, () => {
  console.log("listening");
});
