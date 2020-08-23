const express = require("express");
const app = express();
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extended: true }));
app.get("/", (req, res) => {
  res.send(`
  
  <dev>
  <form method= "POST">
  <input name="email" type="text" placeholder="email"/>
  <input name="password" type="password" placeholder="password"/>
  <input  name="confirm-password" type="password"  placeholder="password confirmation"/>
<button>signup</button>
  </form>
  
  </dev>
  
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
app.post("/", (req, res) => {
  console.log(req.body);
  res.send("account creates");
});
app.post("/products", (req, res) => {});
app.listen(3000, () => {
  console.log("listening");
});
