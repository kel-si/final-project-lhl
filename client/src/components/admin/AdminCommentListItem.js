import React, { useState } from "react";
import axios from "axios";

export default function AdminCommentListItem(props) {
  //approve -> trigger put route in the backend to update comment status to 1 - equals to approved
  const [approve, setApprove] = useState(0);
  console.log(props.id);


  const handleSubmit = (event) => {
    console.log("event.target.value", event.target.value);
    event.preventDefault();
      if (event.target.value = 1) {
      axios 
        .put(`/admin/comments/${props.id}`)
      // console.log("event.target.value2", event.target.value);
    } else if (event.target.value = 2) {
      axios 
    .delete(`/admin/comments/${props.id}`
    )
    .then((res) => {
        console.log("from server:", res.data);
      })
      .catch((err) => {
        console.log("admin errors:", err);
      });
    }
  };

  return (
    <div>
    <div className="comment--container">
      <article className="comment">
        <header className="comment--header">
          <h6 className="comment--name">{props.name}</h6>
        </header>
        <div className="comment--body">
          <p>{props.text}</p>
          <span className="footer-status">Approval Status:{props.status}</span>
          <button
            type="submit"
            className="btn-small"
            onClick={handleSubmit}
            name="approve"
            value={1}
            // onChange={(event) => setApprove(event.target.value)}
          >
            Level Up
          </button>
          <button
            type="submit"
            className="btn-small"
            onClick={handleSubmit}
            name="reject"
            value={2}
            // onChange={(event) => setApprove(event.target.value)}
          >
            Level Down
          </button>
        </div>
        <footer className="comment--footer">
          <small className="footer--age">{props.time}</small>
        </footer>
      </article>
    </div>
    </div>
  );
}