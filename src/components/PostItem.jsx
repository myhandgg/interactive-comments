import CreatePost from "./CreatePost";

function PostItem({ post }) {
  const { content, createdAt, replies, score, image, userName, id } = post;

  return (
    <>
      <CreatePost
        content={content}
        createdAt={createdAt}
        score={score}
        image={image}
        userName={userName}
        id={id}
      />
      {/* <div className="ml-10">
        {replies.length
          ? replies.map((reply) => (
              <CreatePost
                key={reply.id}
                content={reply.content}
                createdAt={reply.createdAt}
                score={reply.score}
                image={reply.image}
                username={reply.username}
              />
            ))
          : null}
      </div> */}
    </>
  );
}

export default PostItem;
