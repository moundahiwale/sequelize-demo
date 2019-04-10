"use strict";

const Sequelize = require("sequelize");

const sequelize = new Sequelize({
  dialect: "sqlite",
  storage: "./testdb"
});

sequelize
  .authenticate()
  .then(() => {
    console.log("Connection has been established successfully.");
  })
  .catch(err => {
    console.error("Unable to connect to the database:", err);
  });

const User = sequelize.define("user", {
  firstName: {
    type: Sequelize.STRING,
    allowNull: false
  },
  lastName: {
    type: Sequelize.STRING
  }
});

const Project = sequelize.define("project", {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  }
});

User.hasMany(Project);
Project.belongsTo(User);

User.create(
  {
    firstName: "Jane",
    Product: { name: "Project 1" }
  },
  {
    include: Project
  }
).then(user => {
  Project.create({ name: "product", userId: user.id });
});

