const development = {
  app: {
    port: 3000,
  },
  db: {
    connStr: `mongodb://localhost:${process.env.DB_LOCAL_PORT}/${process.env.DB_NAME}`,
  },
  corsWhiteList: ["http://127.0.0.1:3000", "http://127.0.0.1:8000"],
};

const production = {
  app: {
    port: 8000,
  },
  db: {
    connStr: `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@howtocookcluster.dq7oezd.mongodb.net/${process.env.DB_NAME}`,
  },
  corsWhiteList: ["http://127.0.0.1:3000", "http://127.0.0.1:8000"],
};

const config = {
  development,
  production,
};

module.exports = config[process.env.NODE_ENV];
