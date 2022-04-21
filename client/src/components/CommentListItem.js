import React from "react";

export default function CommentListItem(props) {
  return (
    <div className="comment--container">
      <article className="comment">
        <header className="comment--header">
          <h2 className="comment--name"></h2>
        </header>

        <div className="comment--body">
          <p>{props.text}</p>
        </div>
        <footer className="comment--footer">
          <small className="footer--age">{props.time}</small>
        </footer>
      </article>
    </div>
  );
}
