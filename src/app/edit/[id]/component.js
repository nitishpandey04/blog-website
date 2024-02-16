'use client';

import { handleOnSubmit } from "./utils";

export default function EditPost({ post }) {
    return (
        <div className="flex flex-col px-6 space-y-4">
            <h2 className="text-lg">Edit Blog</h2>
            <form className="flex flex-col space-y-4" action={handleOnSubmit}>
                <input className="border-2 border-gray-300 rounded-md p-2" type="text" name="title" placeholder="Title" defaultValue={post.title}/>
                <textarea
                    className="border-2 border-gray-300 rounded-md p-2"
                    name="body"
                    id="content"
                    rows={10}
                    placeholder="Body"
                    defaultValue={post.body}
                />
                <input type="hidden" name="id" defaultValue={post._id}></input>
                <button className="bg-blue-500 rounded-md text-white p-2" type="submit">Edit</button>
            </form>
        </div>
    );
}