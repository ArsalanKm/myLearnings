const express = require("express");

const { check, validationResult } = require("express-validator");
const usersRepo = require("../../repositories/users");

const signupTemplate = require("../../views/admin/signup");
const signinTemplate = require("../../views/admin/signin");

const {
  requireEmail,
  requirePassword,
  requiredPasswordConfirmation,
} = require("./validator");

const router = express.Router();

router.get("/signup", (req, res) => {
  res.send(signupTemplate({ req }));
});

router.post(
  "/signup",
  [requireEmail, requirePassword, requiredPasswordConfirmation],
  async (req, res) => {
    const errors = validationResult(req);
    console.log(errors);
    const { email, password, passwordConfirmation } = req.body;
    const user = await usersRepo.create({ email, password });
    req.session.userId = user.id;

    res.send("account creates");
  }
);
router.post("/products", (req, res) => {});

router.get("/signout", (req, res) => {
  req.session = null;
  res.send("you are logged out");
});

router.get("/signin", (req, res) => {
  res.send(signinTemplate({ req }));
});
router.post("/signin", async (req, res) => {
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
module.exports = router;
