import supabase from "./supabase";

export async function getUser() {
  let { data, error } = await supabase.from("user").select("*");

  if (error) {
    console.error(error)
    throw new Error("There was an error getting user")
  }

  return data
}