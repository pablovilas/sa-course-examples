const Customer = (schema, types) =>  { 
    return schema.define('customer', {
        name: { type: types.STRING, allowNull: false },
        latitude: { type: types.STRING, allowNull: false },
        longitude: { type: types.STRING, allowNull: false } 
    });
};

module.exports = Customer;