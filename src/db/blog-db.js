import blogPost from "./BlogPost";
import { convertBodyToPreview, formatPost, convertDateToStr } from "./db-utils";

export const getCurrDateTime = () => {
  const currDateTime = new Date();
  const finalDateTime =
    currDateTime.toDateString().slice(4) +
    " " +
    currDateTime.toTimeString().slice(0, 5);
  return finalDateTime;
};

export const createBlogPost = async (title, body) => {
  try {
    const newBlogPost = new blogPost({
      title: title,
      date: getCurrDateTime(),
      body: body,
    });
    await newBlogPost.save();
    console.log("blog created succesfully");
  } catch (err) {
    console.error("document could not be added");
    console.error(err);
  }
};

export const deleteBlogPost = async (id) => {
  try {
    const deleteObj = await blogPost.deleteOne({ _id: id });
    if (deleteObj.deletedCount == 1) {
      console.log("blog deleted succesfully");
    } else {
      console.log("blog to be deleted not found");
    }
  } catch (err) {
    console.error("could not delete blog");
    console.error(err);
  }
};

export const editBlogPost = async (id, title, body) => {
  try {
    const update = {
      title: title,
      date: getCurrDateTime(),
      body: body,
    };
    await blogPost.findByIdAndUpdate(id, update);
    console.log("blog updated succesfully");
  } catch (err) {
    console.error("blog could not be updated");
    console.error(err);
  }
};

export const getAllBlogPosts = async () => {
  try {
    let posts = await blogPost.find({});
    posts = convertBodyToPreview(posts);
    posts = posts.reverse();
    posts = convertDateToStr(posts);
    return posts;
  } catch (err) {
    console.error("blogs could not be fetched");
    console.error(err);
  }
};

export const getBlogPost = async (id) => {
  try {
    let post = await blogPost.findOne({ _id: id });
    post = formatPost(post);
    return post;
  } catch (err) {
    console.error("blog could not be fetched");
    console.error(err);
  }
};

// METHODS
// const title = "hello what's up";
// const body = "how you doing man... it's 13:58 right now.";
// await createBlogPost(title, body);
// await deleteBlogPost("65115dc1661091fe52226657");
// await editBlogPost("65115debfe5eecebf9a12f61", {
//     body: "hello my name is nitish pandey and i am 24 years old. this is the body of the blog. i am having a good day."
// });
// await getAllBlogPosts();
// await getGetPost(id);
