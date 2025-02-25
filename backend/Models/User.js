const mongoose=require("mongoose");

const userschema=new mongoose.Schema({
    username:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    phone:{
        type:String,
        required:true
    },
    cartData: {
        type: Object,
        default: {},
      },
    address:{
        type:String,
    },
    verified:{
           type:Number,
        default:0
    },
    // account_type:{
    //     type:String,
    //     required:true
    // },
    is_admin:{
        type:Number,
        default:0,
    }
},{timestamps:true});

const usermodel=mongoose.model("User",userschema);

module.exports=usermodel;