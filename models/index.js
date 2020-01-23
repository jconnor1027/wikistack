const Sequelize = require("sequelize");
const db = new Sequelize("postgres://localhost:5432/wikistack", {
  logging: false
});

const Page = db.define("pages", {
  title: {
    type: Sequelize.STRING,
    allowNull: false
  },
  slug: {
    type: Sequelize.STRING,
    allowNull: false
  },
  content: {
    type: Sequelize.TEXT,
    allowNull: false
  },
  status: Sequelize.ENUM("open", "closed")
});

Page.beforeValidate(function(page, options) {
  function generateSlug(title) {
    return title.replace(/\s+/g, "_").replace(/\W/g, "");
  }
  page.slug = generateSlug(page.title);
});

const User = db.define("users", {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      isEmail: {
        msg: "must be valid email"
      }
    }
  }
});

module.exports = {
  db,
  Page,
  User
};
