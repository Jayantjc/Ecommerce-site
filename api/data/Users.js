const bcrypt = require("bcryptjs");
const users = [
  {
    name: "Admin",
    email: "admin@node.com",
    password: bcrypt.hashSync("123456", 10),
    isAdmin: true,
  },

  {
    name: "User",
    email: "user@node.com",
    password: bcrypt.hashSync("123456", 10),
  },
];
module.exports = users;
const users = [
  {
    name: "jc",
    email: "jc@node.com",
    password: bcrypt.hashSync("123456", 10),
    isAdmin: true,
  },

  {
    name: "User",
    email: "user@node.com",
    password: bcrypt.hashSync("123456", 10),
  },
];
module.exports = users;
