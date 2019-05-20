const Item = (schema, types) => {
    return schema.define('item', {
        name: { type: types.STRING, allowNull: false },
        quantity: { type: types.INTEGER, allowNull: false, validate: { min: 1 } },
        price: { type: types.FLOAT, allowNull: false, validate: { min: 0 } }
    });
};

module.exports = Item;