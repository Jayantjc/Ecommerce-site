const bcrypt = require("bcryptjs");
const users = [
  {
    name: "abc",
    email: "abc@gmail.com",
    password: bcrypt.hashSync("12345678", 10),
    isAdmin: true,
  },

  {
    name: "User",
    email: "user@gmail.com",
    password: bcrypt.hashSync("12345678", 10),
  },
];

module.exports = users;
