import mongoose from "mongoose";

const dbconnection = async () => {
    const MONGODB_URI = `mongodb+srv://root:root@file-sharingdb.hbmd41h.mongodb.net/?retryWrites=true&w=majority`;
    try {
        mongoose.connect(MONGODB_URI, { useNewUrlParser:  true});
        console.log('DB connected successfully')
    } catch (error) {
        console.error('Error whiling connecting db')
    }
}
export default dbconnection;