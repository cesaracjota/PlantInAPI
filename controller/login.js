const  Usuario = require( "../models/usuario");
const  passport = require("passport");

const indexpassport = {};

indexpassport.renderSignUpForm = (req, res) => res.render("login/signup");

indexpassport.singup = async (req, res) => {
  let errors = [];
  const { name, email, password, confirm_password } = req.body;
  if (password != confirm_password) {
    errors.push({ text: "Passwords do not match." });
  }
  if (password.length < 4) {
    errors.push({ text: "Passwords must be at least 4 characters." });
  }
  if (errors.length > 0) {
    res.render("login/signup", {
      errors,
      name,
      email,
      password,
      confirm_password,
    });
  } else {
    // Look for email coincidence
    const emailUsuario = await Usuario.findOne({ email: email });
    if (emailUsuario) {
      req.flash("error_msg", "The Email is already in use.");
      res.redirect("/Usuarios/signup");
    } else {
      // Saving a New Usuario
      const newUsuario = new Usuario({ name, email, password });
      newUsuario.password = await newUsuario.encryptPassword(password);
      await newUsuario.save();
      req.flash("success_msg", "You are registered.");
      res.redirect("/login/signin");
    }
  }
};

indexpassport.renderSigninForm = (req, res) => res.render("login/signin");

indexpassport.signin = passport.authenticate("local", {
  successRedirect: "/notes",
  failureRedirect: "/login/signin",
  failureFlash: true,
});

indexpassport.logout = (req, res) => {
  req.logout();
  req.flash("success_msg", "You are logged out now.");
  res.redirect("/login/signin");
};

module.exports = indexpassport;