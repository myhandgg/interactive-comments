import supabase from "./supabase";

export async function getPosts() {
  let { data, error } = await supabase.from("posts").select("*");

  if (error) {
    console.error(error);
    throw new Error("There was an error getting posts");
  }

  return data;
}

export async function uploadPosts(newPost, id) {
  const { data, error } = await supabase.from("posts").insert([{ ...newPost }]);

  if (error) {
    console.error(error);
    throw new Error("There was an error uploading the post");
  }

  return { data, error };
}

export async function deletePost(content) {
  const { error } = await supabase
    .from("posts")
    .delete()
    .eq("content", content);

  if (error) {
    console.error(error);
    throw new Error("There was an error deleting the post");
  }
}

export async function editPost({ comment, id }) {
  const { data, error } = await supabase
    .from("posts")
    .update({ content: comment })
    .eq("id", id)
    .select();

  if (error) {
    console.error(error);
    throw new Error("There was an error editing the post");
  }

  return data;
}
