import mongoose from "mongoose";




// create a mongooDB connection
const mongooDBConnect = async () =>{

    try {
        
        const connection = await mongoose.connect(process.env.MONGO_STRING);
        console.log(`mongoDB connection successfully`.bgBlue.black);
    } catch (error) {
        
        console.log(error);
    }

}


// export mongoDB
export default mongooDBConnect;