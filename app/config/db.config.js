module.exports = {
  HOST: "database-1.co3t3qiefrdg.ap-south-1.rds.amazonaws.com",
  USER: "admin",
  PASSWORD: "12345678",
  DB: "testdb",
  dialect: "mysql",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
};
