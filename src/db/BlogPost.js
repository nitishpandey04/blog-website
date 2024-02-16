import mongoose, { Schema } from "mongoose";

if (!mongoose.models.BlogPost) {
  mongoose.connect(process.env.MONGODB_URI);
  console.log("connected!");
  mongoose.Promise = global.Promise;
}

const blogPostSchema = new Schema(
  {
    title: String,
    date: Date,
    body: String,
  },
  {
    timeseries: true,
  }
);

const BlogPost =
  mongoose.models.BlogPost || mongoose.model("BlogPost", blogPostSchema);

export default BlogPost;
