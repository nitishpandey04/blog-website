const getPreviewOfPost = (post) => {
  return post.slice(0, 370);
};

export const convertBodyToPreview = (posts) => {
  for (let i = 0; i < posts.length; i++) {
    posts[i].body = getPreviewOfPost(posts[i].body) + " ...";
  }
  return posts;
};

export const formatPost = (post) => {
  post.body = post.body.replaceAll("\r\n", "<br />");
  return post;
};

export const convertDateToStr = (posts) => {
  const newPosts = [];
  for (let i = 0; i < posts.length; i++) {
    let newPost = {};
    for (let key in posts[i]) {
      newPost[key] = posts[i][key];
    }
    const dateInStr =
      newPost.date.toDateString() + " " + newPost.date.toTimeString();
    newPost.date = dateInStr;
    newPosts.push(newPost);
  }
  return newPosts;
};
