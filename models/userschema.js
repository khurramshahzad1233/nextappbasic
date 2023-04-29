import mongoose from "mongoose";
const kittySchema=new mongoose.Schema({
    // name:{
    //     type:String,
    //     required:true,
    // },
    email:{
        type:String,
        required:true,
        unique:true,
    },
    password:{
        type:String,
        required:true,
        select:false,
        minLength:[6, "Password is too short"]
    }

});
mongoose.models={}
const userdata=mongoose.model("user",kittySchema);
export default userdata;