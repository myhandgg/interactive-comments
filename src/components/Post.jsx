import { usePosts } from "./usePosts";
import { useUser } from "./useUser";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { uploadPosts } from "../services/apiPosts";
import { toast } from "react-hot-toast";
import { useState } from "react";

import PostItem from "./PostItem";
import Button from "./Button";

function Post() {
  const [content, setContent] = useState();

  const { isLoading, posts, error } = usePosts();
  const { user } = useUser();
  const queryClient = useQueryClient();

  const { isLoading: isUploading, mutate } = useMutation({
    mutationFn: uploadPosts,
    onSuccess: () => {
      toast.success("New post has been added"),
        queryClient.invalidateQueries({ queryKey: ["posts"] });
    },
    onError: (err) => toast.error(err.message),
  });

  if (isLoading) return <h1>Loading...</h1>;

  function handleSubmit() {
    if (!content) return toast.error("Add a comment first to send");
    
    const newPost = {
      image: user[0]?.image,
      userName: user[0]?.userName,
      createdAt: new Date().toISOString(),
      content: content,
    };
    
    mutate(newPost);
    setContent("");
  }

  return (
    <div>
      {posts && posts.map((post) => <PostItem post={post} key={post.id} />)}
      <div className="bg-white p-5 w-[800px] mb-5 flex items-start gap-5">
        {user ? <img src={user[0].image} alt="" /> : <span>Loading</span>}
        <textarea
          cols="30"
          rows="10"
          className="w-full h-20 p-5 border rounded-lg"
          placeholder="Add a comment..."
          value={content}
          onChange={(e) => setContent(e.target.value)}
        ></textarea>
        <Button onClick={() => handleSubmit()} disabled={isUploading}>Send</Button>
      </div>
    </div>
  );
}

export default Post;
