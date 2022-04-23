const { Router } = require('express');
const {
  renderSignUpForm,
  singup,
  renderSigninForm,
  signin,
  logout,
} = require ("../controller/login");

const router = Router();

// Routes
router.get("/login/signup", renderSignUpForm);

router.post("/login/signup", singup);

router.get("/login/signin", renderSigninForm);

router.post("/login/signin", signin);

router.get("/login/logout", logout);

module.exports = router;