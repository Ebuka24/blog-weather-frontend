import mongoose from "mongoose";

export interface Posts extends mongoose.Document {
   postTitle: string;
   postContent: string;
}

/* PetSchema will correspond to a collection in your MongoDB database. */
const PostSchema = new mongoose.Schema<Posts>({
    postTitle: {
        /* Title of post */

        type: String,
        required: [true, "Please provide a title."],
        maxlength: [60, "Title cannot be more than 60 characters"],
    },
    postContent: {
        /* The owner of this pet */

        type: String,
        required: [true, "Please provide the pet owner's name"],
        // maxlength: [60, "Owner's Name cannot be more than 60 characters"],
    },
   
});

export default mongoose.models.Post || mongoose.model<Posts>("Post", PostSchema);