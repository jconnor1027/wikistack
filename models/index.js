const Sequelize = require("sequelize");
const db = new Sequelize("postgres://localhost:5432/wikistack");

module.exports = {
  db,
  Page,
  User
};

const Page = db.define('pages', {
  title: Sequelize.STRING,
  slug: Sequelize.STRING,
  content: Sequelize.TEXT,
  status: Sequelize.ENUM('open', 'closed')
})

const User = db.define('users', {
  name: Sequelize.STRING,
  email: {
    type: Sequelize.STRING,
    validate: {
      isEmail: {
        msg: 'must be valid email'
      }
    }
  }
})

