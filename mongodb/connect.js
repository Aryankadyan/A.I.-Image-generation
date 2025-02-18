import mongoose from 'mongoose';

const connectDB = (url) =>{
    mongoose.set('strictQuery', true) 

    mongoose.connect(url)
    .then(()=> console.log("MongoDB Connected"))
    .catch((err)=>{
        console.log('failed to connect with MongoDB')
        console.log(err);
    })
}

export default connectDB