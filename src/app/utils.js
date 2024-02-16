'use server';

import { deleteBlogPost } from "@/db/blog-db";
import { permanentRedirect } from "next/navigation";

export async function handleDelete(formData) {
    const postId = formData.get("postId");
    await deleteBlogPost(postId);
    permanentRedirect("/");
}