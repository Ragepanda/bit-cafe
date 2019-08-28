
module.exports = function (sequelize, DataTypes) {
    var articles = sequelize.define("articles", {
      source: {
        type: DataTypes.STRING,
        allowNull: false
      },
      cryptoId: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      title: {
        type: DataTypes.STRING,
        allowNull: false
      },
      body: {
        type: DataTypes.TEXT,
        allowNull: false
      },
      articleUrl: {
        type: DataTypes.STRING,
        allowNull: false
      },
      imageUrl: {
        type: DataTypes.STRING,
        allowNull: false
      },
      createdAt: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      publishedOn: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      category: {
        type: DataTypes.STRING,
        allowNull: false
      }
    },
      { timestamps: true });
  
    return articles;
  };