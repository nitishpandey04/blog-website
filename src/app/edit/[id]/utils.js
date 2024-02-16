'use server';

import { editBlogPost} from "@/db/blog-db";
import { permanentRedirect } from "next/navigation";

export async function handleOnSubmit(formData) {
    const id = formData.get("id");
    const title = formData.get("title");
    const body = formData.get("body");
    await editBlogPost(id, title, body);
    permanentRedirect("/");
}