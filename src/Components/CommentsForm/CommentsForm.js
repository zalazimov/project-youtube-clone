import React, { useState } from "react";

function CommentsForm() {
  const [name, setName] = useState("");
  const [comment, setComment] = useState("");

  const handleDelete = (comment) => {
    const deletedComment = comment.filter((c) => c.index !== comment.index);
    setComment(deletedComment);
    //localStorage.setItem(`localComments`, JSON.stringify(deletedComment))
  };
  const handleEdit = (comment) => {
    const editComment = comment.filter((c) => c.find !== comment.index);
  };

  return (
    <div>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          handleSubmit(student, event);
        }}
      >
        <label>
          Commentor Name
          <input
            onChange={(event) => setName(event.target.value)}
            type="text"
            name="name"
            value={name}
            id="name"
          />
        </label>
        <br />
        <br />
        <p>
          <label>
            Comment:
            <input
              onChange={(event) => setComment(event.target.value)}
              type="text"
              name="name"
              value={comment}
              id="comment"
            />
          </label>
        </p>

        <div>
          <button type="submit" className="btn btn-success">
            Add Note
          </button>
        </div>
      </form>
      <div>
        {Storage.map((storage, index) => (
          <ul key={{ index }}>{storage}</ul>
        ))}
      </div>
      <span
        onClick={() => {
          handleEdit;
        }}
        className="material-icons-outlined edit-btn"
      >
        edit
      </span>
      <span
        onClick={() => {
          handleDelete;
        }}
        className="material-icons-outlined delete-btn"
      >
        Delete
      </span>
    </div>
  );
}

export default CommentsForm;
