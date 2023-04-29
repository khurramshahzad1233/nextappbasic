import mongoose from "mongoose";
const kittySchema=new mongoose.Schema({
    title:{
        type:String,
        required:true,
    },
    description:{
        type:String,
        required:true,
    },
    isCompleted:{
        type:Boolean,
        default:false,
    },
    user:{
        type:mongoose.Schema.Types.ObjectId,
        required:true,
        ref:"user"
    },
    createdAt:{
        type:Date,
        default:Date.now,
    }

});

mongoose.models={}

const taskdata=mongoose.model("task",kittySchema);
export default taskdata