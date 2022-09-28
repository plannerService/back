const { Model, DataTypes } = require('sequelize')

module.exports = class Group extends Model {
    static init(sequelize) {
        return super.init(
            {
                userEmail: {
                    type: DataTypes.INTEGER(50),
                    allowNull: false,
                },
            },
            {
                sequelize,
                timestamps: true,
                underscored: false,
                modelName: 'Group',
                tableName: 'groups',
                paranoid: true,
                charset: 'utf8',
                collate: 'utf8_general_ci',
            }
        )
    }

    static associate(db) {
        db.User.belongsTo(db.User)
    }
}
