const { DATABASE_URL } = process.env;

module.exports = {
  production: {
    url: DATABASE_URL,
    dialect: 'postgres',
    logging: false,
    define: {
      timestamps: true,
      underscored: true,
      underscoredAll: true,
    },
    dialectOptions: {
      ssl: {
        rejectUnauthorized: false,
      },
    },
  },
  test: {
    url: process.env.DATABASE_URL,
    dialect: 'postgres',
    logging: false,
    define: {
      timestamps: true,
      underscored: true,
      underscoredAll: true,
    },
  },
  develop: {
    url: process.env.DATABASE_URL,
    dialect: 'postgres',
    logging: false,
    define: {
      timestamps: true,
      underscored: true,
      underscoredAll: true,
    },
  },
};
