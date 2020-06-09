module.exports = function (sequelize, DataTypes) {
    var dailyChart = sequelize.define("dailyChart", {
        coin:{
            type: DataTypes.STRING,
            allowNull: false
        },
        description: {
            type: DataTypes.STRING,
            allowNull: false
        }
    });

    return dailyChart;
};