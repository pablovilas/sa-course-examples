const Business = (schema, types) =>  { 
    return schema.define('business', {
        name: { type: types.STRING, allowNull: false },
        latitude: { type: types.STRING, allowNull: false },
        longitude: { type: types.STRING, allowNull: false } 
    });
};

module.exports = Business;