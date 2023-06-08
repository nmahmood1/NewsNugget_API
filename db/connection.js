import mongoose from "mongoose";
import dotenv from 'dotenv';

dotenv.config();

console.log('process.env.MONGO_URL ', process.env.MONGO_URL)


let mongooseConfig = {
  useNewUrlParser: true,
  useUnifiedTopology: true
}
mongoose.connect(process.env.MONGO_URL, mongooseConfig)
.then(()=>console.log('connected'))
.catch(e=>console.log(e));


export default mongoose;