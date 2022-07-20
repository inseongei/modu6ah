import axios from "axios";

// Actions
const CREATE = "comment/CREATE";
const LOAD = "comment/LOAD";
const UPDATE = "comment/UPDATE";
const DELETE = "comment/DELETE";

const initialState = {
  list: [{}],
};

// Action Creators
export function createPost(comment_list) {
  return { type: CREATE, comment_list };
}

export function loadPost(comment_list) {
  return { type: LOAD, comment_list };
}

export function updatePost(comment_list) {
  return { type: UPDATE, comment_list };
}

export function deletePost(comment_list) {
  return { type: DELETE, comment_list };
}

// middleware
export const createPostDB = (comment_data) => {
  const comment = comment_data;
  return async function (dispatch) {
    axios
      .post(`http://localhost:5001/posts`, comment, {
        headers: { Authorization: `Bearer ${localStorage.getItem("accessToken")}` },
      })
      .then((response) => {
        dispatch(createPost(response.data));
        window.alert("댓글 작성 성공");
        window.location.href("/recruit");
      })
      .catch((error) => {
        console.log(error.message);
      });
  };
};
