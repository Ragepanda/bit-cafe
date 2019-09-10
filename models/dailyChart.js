module.exports = function (sequelize, DataTypes) {
    var dailyChart = sequelize.define("dailyChart", {
        time:{
            type: DataTypes.BIGINT,
            allowNull: false
        },
        close:{
            type: DataTypes.DECIMAL,
            allowNull: false
        },
        high:{
            type: DataTypes.DECIMAL,
            allowNull: false
        },
        low:{
            type: DataTypes.DECIMAL,
            allowNull: false
        },
        open:{
            type: DataTypes.DECIMAL,
            allowNull: false
        },
        volumefrom:{
            type: DataTypes.DECIMAL,
            allowNull: false
        },
        volumeto:{
            type: DataTypes.DECIMAL,
            allowNull: false
        },
        createdAt: {
            type: DataTypes.INTEGER,
            allowNull: false
        }
    },
        { timestamps: true });

    return dailyChart;
};