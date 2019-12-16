module.exports = {
    dialect: 'postgres',
    host: 'localhost',
    username: 'postgres',
    password: 'docker',
    database: 'sgs',
    define: {
      timestamps: true,
      underscored: true,
    },
  };