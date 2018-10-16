
module.exports = function (sequelize, DataTypes) {
    var twitter = sequelize.define("twitter", {
      user: {
        type: DataTypes.STRING,
        allowNull: false
      },
      twitterId: {
        type: DataTypes.BIGINT,
        allowNull: false
      },
      embeddedLink: {
        type: DataTypes.STRING,
        allowNull: true
      },
      text: {
        type: DataTypes.TEXT,
        allowNull: false
      },
      userProfilePicture: {
        type: DataTypes.STRING,
        allowNull: false
      },
      publishedOn: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      insertedAt:{
        type:DataTypes.INTEGER,
        allowNull: false
      }
    },
      { timestamps: true });
  
    return twitter;
  };