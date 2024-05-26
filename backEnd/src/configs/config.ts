export default {
    port: process.env.PORT || 3005,
    db: {
      uri: process.env.DB_URI || 'mongodb://127.0.0.1:27017/dataTest',
    }
  };
  