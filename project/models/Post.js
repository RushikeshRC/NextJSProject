import mongoose from "mongoose";

const {Schema} = mongoose;

const postSchema = new Schema(
    {
        title:{
            type:String,
            required:true,
        },
        desc:{
            type:String,
            required:true,
        },
        img:{
            type:String,
            required:true,
        },
        content:{
            type:String,
            required:true,
        },
        username:{
            type:String,
            required:true,
        },
},
    {timestamps:true}
);

//if the post collection does not exists then create new one
export default mongoose.Model.Post || mongoose.model("Post", postSchema);