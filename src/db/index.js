const DB_Name =require("../constants")

const mongoose = require('mongoose');



const connectDB = async () => {
    try {
        const connection = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_Name}`)
        console.log("Connected to database.");

    } catch (error) {
        process.exit(1)
    }
}

module.exports = {connectDB};

// export default connectDB
