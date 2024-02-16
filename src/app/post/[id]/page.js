import { getBlogPost } from "@/db/blog-db";

export default async function Page({ params }) {
    const post = await getBlogPost(params.id);
    return (
        <div className="flex flex-col p-10 space-y-4">
            <p className="text-xl">{post.title}</p>
            <p className="text-sm text-gray-500">{post.date}</p>
            <p className="text-lg">{post.body}</p>
        </div>
    );
}