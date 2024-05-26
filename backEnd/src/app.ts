import express from 'express';
import config from './configs/config';
import router from './routes/authRoute';
import mongoose from 'mongoose';
import cors from 'cors'
const app = express();

app.use(cors())
app.use(express.json());
app.use('/api', router);

const connectDB = async () => {
    try {
      await mongoose.connect(
        config.db.uri,
      )
      console.log('Connected to mongoDB')
    } catch (error) {
      console.log(error)
      process.exit(1)
    }
};
connectDB();

app.listen(config.port, () => {
  console.log(`Server is running on port ${config.port}`);
});
