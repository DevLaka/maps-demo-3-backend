module.exports = (sequelize, Sequelize) => {
  const Address = sequelize.define("address", {
    street_number: {
      type: Sequelize.STRING,
    },
    route: {
      type: Sequelize.STRING,
    },
    political: {
      type: Sequelize.STRING,
    },
    locality: {
      type: Sequelize.STRING,
    },
    administrative_area_level_2: {
      type: Sequelize.STRING,
    },
    administrative_area_level_1: {
      type: Sequelize.STRING,
    },
    country: {
      type: Sequelize.STRING,
    },
    postal_code: {
      type: Sequelize.STRING,
    },
    plus_code: {
      type: Sequelize.STRING,
    },
    subpremise: {
      type: Sequelize.STRING,
    },
    premise: {
      type: Sequelize.STRING,
    },
    formatted_address: {
      type: Sequelize.STRING,
    }
  });

  return Address;
};
