import { getAllBlogPosts } from "@/db/blog-db";
import Link from "next/link";

export default async function Page() {
  const allPosts = await getAllBlogPosts();
  const allPostsComponents = [];
  for (let i = 0 ; i < allPosts.length ; i ++) {
      let currPostComponent = <Post post={allPosts[i]}/>
      let currLineBreak = <></>
      if (i < allPosts.length - 1) {
        currLineBreak = <LineBreak />;
      }
      const currPost = <div className="flex flex-col" key={allPosts[i]._id}>{currPostComponent}{currLineBreak}</div>
      allPostsComponents.push(currPost);
  }
  return (
      <div className="flex flex-col">
          {allPostsComponents}
      </div>
  );
}

function Post({ post }) {
  return (
    <div className="flex flex-col mx-6 my-4 min-h-48 justify-center space-y-2">
      <Link href={`/post/${post._id}`}>
        <p className="text-xl font-light">{post.title}</p>
      </Link>  
      <p className="text-xs text-gray-500 font-mono">{post.date}</p>
      <Link href={`/post/${post._id}`}>
        <p className="text-md font-light">{post.body}</p>
      </Link>
      <div className="flex flex-row space-x-3 space-y-3">
        <p></p>
        <button className="text-white rounded-md p-1">
          {/* <Image className="icon" src="/edit.svg" height={25} width={25} alt="edit" style={{color: "gray"}}/> */}
          <Link href={`/edit/${post._id}`}>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="black" className="bi bi-pencil" viewBox="0 0 16 16">
    <path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325"/>
  </svg>
          </Link>
        </button>
        <button className="text-white rounded-md p-1">
          {/* <Image className="icon" src="/delete.svg" height={25} width={25} alt="delete" style={{fill: "currentcolor"}}/> */}
          <Link href={`/delete/${post._id}`}>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#f5366f" className="bi bi-trash" viewBox="0 0 16 16">
    <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0z"/>
    <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4zM2.5 3h11V2h-11z"/>
  </svg>
          </Link>
        </button>
      </div>
    </div>
  );
}

function LineBreak() {
  return (
    <hr className="mx-4"/>
  );
}