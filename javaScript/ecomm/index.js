const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cookieSession = require("cookie-session");
const authRouter = require("./routes/admin/auth");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(
  cookieSession({
    keys: ["hekhsdfkjhaksdfhafsd"],
  })
);

app.use(authRouter);
//


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

app.listen(3000, () => {
  console.log("listening");
});
