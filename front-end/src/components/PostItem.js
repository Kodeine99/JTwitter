import React from "react";

function PostItem() {
  return (
    <>
      <div className="post-item">
        <p className="post-content">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Harum quasi
          ducimus quibusdam amet! Quia dolores quaerat aperiam voluptatum,
          tempore praesentium molestias eaque cumque, laboriosam deleniti, ex
          vero facere quod nostrum?
        </p>
        <div className="post-footer">
          <div className="post-info">
            <span>by Kodeine</span>
            <span>Date: 17/02/2021</span>
          </div>
          <div className="post-edit-delete">
            <span>Edit</span>
            <span>Delete</span>
            <span className="delete_question">Are you sure ?</span>
            <span>Yes</span>
            <span>No</span>
          </div>
        </div>
        <div className="post-edit-form">
          <form action="" className="edit-form">
            <textarea
              type="text"
              name="content"
              id="content"
              className="content"
              placeholder="What's ?"
            >
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut id
              modi, ipsa in quod ad earum ratione placeat. Officiis reiciendis
              placeat eos alias nisi, numquam hic dolores cumque nam, saepe
              quasi dicta eum vitae velit, doloremque explicabo minima delectus
              vero?
            </textarea>
            <div className="btn-container">
              <button className="btn" type="button">
                Update
              </button>
              <button className="btn" type="button">
                Cancel
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default PostItem;
