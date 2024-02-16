import { deleteBlogPost } from "@/db/blog-db";
import { revalidatePath } from "next/cache";
import { permanentRedirect } from "next/navigation";
import { redirect } from "next/navigation";

export async function GET(request, { params }) {
    await deleteBlogPost(params.id);
    // revalidatePath("/");
    redirect("/");
} 