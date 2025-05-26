const User = require("../models/user");
const _ = require("lodash");
const jwt = require("jsonwebtoken");

// Login Route

router.post("/", async (req, res) => {
  const { email, passowrd } = req.body;

  let user = await User.findOne({ email, passowrd });
  if (!user) return res.status(400).send("Invalid email or password");

  // Generating Token with JWT
  let newUser = _.pick(user, ["_id", "name", "email"]);
  const token = jwt.sign(newUser, process.env.JWTSECRET, { expiresIn: "1h" });

  res.send({ message: "login successfull!", token: token });
});

module.exports = router;
