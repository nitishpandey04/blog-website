'use client';
import handleOnSubmit from "./utils";

export default function CreatePost() {
    return (
        <div className="flex flex-col px-6 space-y-4">
            <h2 className="text-lg">Create Blog</h2>
            <form className="flex flex-col space-y-4" action={handleOnSubmit}>
                <input className="border-2 border-gray-300 rounded-md p-2" type="text" name="title" placeholder="Title"/>
                <textarea
                    className="border-2 border-gray-300 rounded-md p-2"
                    name="body"
                    id="content"
                    rows={10}
                    placeholder="Body"
                />
                <button className="bg-blue-500 rounded-md text-white p-2" type="submit">Create</button>
            </form>
        </div>
    );
}
