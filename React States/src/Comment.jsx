import "./Comment.css";
import { useState } from "react";
import CommentForm from "./Commentsform";
export default function Comment() {
  let [comments, setcomments] = useState([{}]);
  function addComments(comment) {
    comments.push(comment);
    setcomments([...comments]);
  }
  return (
    <>
      <h1>
        <i>All Comments</i>
      </h1>
      {comments.map((comment) => {
        return (
          <div className="Comment">
            <h4>{comment.userName}</h4>
            <p>
              <i>{comment.remark}</i>
            </p>
            <h4>{comment.rating}</h4>
          </div>
        );
      })}
      <CommentForm addCommet={addComments}></CommentForm>
    </>
  );
}
