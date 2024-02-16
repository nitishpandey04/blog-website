'use server';

import { createBlogPost } from "@/db/blog-db";
import { permanentRedirect } from "next/navigation";

export default async function handleOnSubmit(formData) {
    const title = formData.get("title");
    const body = formData.get("body");
    await createBlogPost(title, body);
    permanentRedirect("/");
}