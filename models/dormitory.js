import mongoose , {Schema}  from "mongoose";

const dormitorySchema = new Schema(
    {
        type: String,
        title: String,
        location: String,
        price:Integer ,
        
        
    }
)