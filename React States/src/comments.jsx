import { useState } from "react";
import "./comment.css";
export default function Comment({ comment }) {
  let [Comments, setComments] = useState([{}]);

  Comments.push(comment);

  return (
    <>
      <h2>All Comments!</h2>
      {Comments.map((item) => {
        return (
          <div className="comments">
            <h4>userName : {item.userName}</h4>
            <p>
              remark : <i>{item.remark}</i>
            </p>
            <p>rating : {item.rating}</p>
          </div>
        );
      })}
    </>
  );
}
