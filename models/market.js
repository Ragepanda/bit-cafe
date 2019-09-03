
module.exports = function (sequelize, DataTypes) {
    var market = sequelize.define("market", {
        fullName: {
            type: DataTypes.STRING,
            allowNull: false
        },
        symbol: {
            type: DataTypes.STRING,
            allowNull: false
        },
        imageUrl: {
            type: DataTypes.STRING,
            allowNull: false
        },
        marketCap: {
            type: DataTypes.BIGINT,
            allowNull: false
        },
        marketCapString:{
            type: DataTypes.STRING,
            allowNull: false
        },
        price: {
            type: DataTypes.STRING,
            allowNull: false
        },
        rawPrice: {
            type: DataTypes.BIGINT,
            allowNull: false
        },
        volume24H: {
            type: DataTypes.STRING,
            allowNull: false
        },
        supply: {
            type: DataTypes.STRING,
            allowNull: false
        },
        changePct24: {
            type: DataTypes.STRING,
            allowNull: false
        },
        createdAt: {
            type: DataTypes.INTEGER,
            allowNull: false
        }
    },
        { timestamps: true });

    return market;
};