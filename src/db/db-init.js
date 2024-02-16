import mongoose, { Schema } from "mongoose";

mongoose.connect(process.env.MONGODB_URI);
mongoose.Promise = global.Promise;

// const blogPostSchema = new Schema(
//   {
//     title: String,
//     date: Date,
//     body: String,
//   },
//   {
//     timeseries: true,
//   }
// );

// const BlogPost =
//   mongoose.models.BlogPost || mongoose.model("BlogPost", blogPostSchema);

// export default BlogPost;

// async function getDBClient() {
//   try {
//     if (!process.env.MONGODB_USER) {
//       throw new Error("MONGODB_USER not available in .env file");
//     }
//     const uri = process.env.MONGODB_URI;
//     await mongoose.connect(uri, { dbName: process.env.MONGODB_DBNAME });
//     console.log("Connected just now!");
//     const blogPostSchema = new mongoose.Schema(
//       {
//         title: String,
//         date: Date,
//         body: String,
//       },
//       {
//         timestamps: true,
//       }
//     );
//     const blogPost = mongoose.model("blog", blogPostSchema);
//     return blogPost;
//   } catch (err) {
//     console.error("Error: Could not connect to MongoDB.");
//     console.error(err);
//     return "";
//   }
// }

// // let clientPromise = "";
// let blogPostClient;
// if (mongoose.models.blog) {
//   // clientPromise = new Promise(() => mongoose.models.blog);
//   blogPostClient = mongoose.models.blog;
// } else {
//   // clientPromise = new Promise(async () => await getDBClient());
//   (async () => {
//     blogPostClient = await getDBClient();
//     console.log(typeof blogPostClient);
//     console.log(blogPostClient);
//     console.log("this rannnnnnnnn!!!!!!!!!!!");
//   })();
//   if (!blogPostClient) {
//     console.error("Error: Could not connect to MongoDB. Part 2");
//   }
// }

// export default blogPostClient;
