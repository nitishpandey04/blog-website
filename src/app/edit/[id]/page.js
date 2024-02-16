import { getBlogPost } from "@/db/blog-db";
import EditPost from "./component";

export default async function Page({ params }) {
    const post = await getBlogPost(params.id);
    return (
        <EditPost post={post}/>
    );  
}