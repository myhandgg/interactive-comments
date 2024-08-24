import { useState } from "react";

import { useUser } from "./useUser";
import { useMutation } from "@tanstack/react-query";
import { deletePost, editPost } from "../services/apiPosts";
import { toast } from "react-hot-toast";
import { useQueryClient } from "@tanstack/react-query";

import Button from "./Button";

function CreatePost({ score, image, userName, createdAt, content, id }) {
  const { user } = useUser();
  const [reply, setReply] = useState(false);
  const [edit, setEdit] = useState(false);
  const [comment, setComment] = useState()

  const queryClient = useQueryClient();

  const { mutate } = useMutation({
    mutationFn: deletePost,
    onSuccess: () => {
      toast.success("Post has been deleted");
      queryClient.invalidateQueries();
    },
    onError: (err) => toast.error(err.message),
  });

  const { mutate: editMutate } = useMutation({
    mutationFn: editPost,
    onSuccess: () => {
      toast.success("Post has been edited");
      queryClient.invalidateQueries();
      setEdit((edit) => !edit)
    },
    onError: (err) => toast.error(err.message),
  });

  return (
    <>
      <div className="flex mb-5 gap-x-5 bg-white p-5 w-[800px] items-start">
        <div className="flex flex-col items-center justify-center gap-5 p-3 bg-">
          {/*  later */}
          <button className="text-xl">+</button>
          <span className="text-xl font-bold text-moderate-blue">{score}</span>
          <button className="text-xl">-</button>
        </div>
        <div className="flex flex-col w-full gap-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-5">
              <img src={image} alt="" />
              <h1>{userName}</h1>
              {user && userName === user.userName && (
                <span className="px-2 text-white bg-moderate-blue">you</span>
              )}
              <span className="text-gray-blue">{createdAt}</span>
            </div>

            {user && userName === "juliusomo" ? (
              <div className="flex gap-5">
                <span
                  className="flex items-center gap-2 text-soft-red"
                  onClick={() => mutate(content)}
                >
                  <svg
                    width="12"
                    height="14"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1.167 12.448c0 .854.7 1.552 1.555 1.552h6.222c.856 0 1.556-.698 1.556-1.552V3.5H1.167v8.948Zm10.5-11.281H8.75L7.773 0h-3.88l-.976 1.167H0v1.166h11.667V1.167Z"
                      fill="#ED6368"
                    />
                  </svg>
                  <button>Delete</button>
                </span>
                <span className="flex items-center gap-2 text-moderate-blue">
                  <svg
                    width="14"
                    height="14"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M13.479 2.872 11.08.474a1.75 1.75 0 0 0-2.327-.06L.879 8.287a1.75 1.75 0 0 0-.5 1.06l-.375 3.648a.875.875 0 0 0 .875.954h.078l3.65-.333c.399-.04.773-.216 1.058-.499l7.875-7.875a1.68 1.68 0 0 0-.061-2.371Zm-2.975 2.923L8.159 3.449 9.865 1.7l2.389 2.39-1.75 1.706Z"
                      fill="#5357B6"
                    />
                  </svg>
                  <button onClick={() => setEdit((edit) => !edit)}>Edit</button>
                </span>
              </div>
            ) : (
              <>
                <span
                  className="flex items-center font-bold cursor-pointer text-moderate-blue gap-x-2"
                  onClick={() => setReply((reply) => !reply)}
                >
                  <svg
                    width="14"
                    height="13"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M.227 4.316 5.04.16a.657.657 0 0 1 1.085.497v2.189c4.392.05 7.875.93 7.875 5.093 0 1.68-1.082 3.344-2.279 4.214-.373.272-.905-.07-.767-.51 1.24-3.964-.588-5.017-4.829-5.078v2.404c0 .566-.664.86-1.085.496L.227 5.31a.657.657 0 0 1 0-.993Z"
                      fill="#5357B6"
                    />
                  </svg>
                  Reply
                </span>
              </>
            )}
          </div>
          {edit ? (
            <div className="flex flex-col items-end gap-5">
              <textarea
                cols="30"
                rows="10"
                className="w-full h-20 p-5 border rounded-lg"
                defaultValue={content}
                value={comment}
                onChange={(e) => setComment(e.target.value)}
              ></textarea>
              <Button onClick={() => editMutate({comment, id})}>Update</Button>
            </div>
          ) : (
            <p className="text-gray-blue">{content}</p>
          )}
        </div>
      </div>
      {reply && (
        <div className="bg-white p-5 w-[800px] mb-5 flex items-start gap-5 ml-10">
          {user && <img src={user[0].image} alt="" />}
          <textarea
            cols="30"
            rows="10"
            className="w-full h-20 p-5 border rounded-lg"
            defaultValue={`@${userName}`}
          ></textarea>
          <Button>Reply</Button>
        </div>
      )}
    </>
  );
}

export default CreatePost;
