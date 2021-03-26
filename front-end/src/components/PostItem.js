import React, { useState } from "react";

function PostItem({ post }) {
  const [openEditForm, setOpenEditForm] = useState(false);
  const [openDeleteConfirm, setOpenDeleteConfirm] = useState(false);
  let date = new Date(post.createdAt);
  return (
    <>
      <div className="post-item">
        <p className="post-content">{post.content}</p>
        <div className="post-footer">
          <div className="post-info">
            <span>by {post.author.name}</span>
            <span>
              Date: {""}
              {`${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`}
            </span>
          </div>
          {post.isEditable && (
            <div className="post-edit-delete">
              {openDeleteConfirm ? (
                <>
                  <span className="delete_question">Are you sure ?</span>
                  <span>Yes</span>
                  <span onClick={() => setOpenDeleteConfirm(false)}>No</span>
                </>
              ) : (
                <>
                  <span onClick={() => setOpenEditForm(true)}>Edit</span>
                  <span onClick={() => setOpenDeleteConfirm(true)}>Delete</span>
                </>
              )}
            </div>
          )}
        </div>
        {openEditForm && (
          <div className="post-edit-form">
            <form action="" className="edit-form">
              <textarea
                type="text"
                name="content"
                id="content"
                className="content"
                placeholder="What's ?"
              >
                {post.content}
              </textarea>
              <div className="btn-container">
                <button className="btn" type="button">
                  Update
                </button>
                <button
                  onClick={() => setOpenEditForm(false)}
                  className="btn"
                  type="button"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </>
  );
}

export default PostItem;
