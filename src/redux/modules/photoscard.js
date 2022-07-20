import axios from "axios";
import { getCookie } from "../../shared/Cookie";

// Actions
const CREATE = "photo/CREATE";
const LOAD = "photo/LOAD";
const DETAIL = "photo/DETAIL";
const UPDATE = "photo/UPDATE";
const DELETE = "photo/DELETE";

const initialState = {
  list: [],
};

// Action Creators
export function createPhoto(photo_list) {
  return { type: CREATE, photo_list };
}

export function loadPhoto(photo_list) {
  return { type: LOAD, photo_list };
}

export function detailPhoto(photo_list) {
  return { type: DETAIL, photo_list };
}

export function updatePhoto(photo_list) {
  return { type: UPDATE, photo_list };
}

export function deletePhoto(photo_list) {
  return { type: DELETE, photo_list };
}

// middleware
export const createPhotoDB = (data) => {
  const photo = data;
  return async function (dispatch) {
    axios
      .post(`http://localhost:5001/posts`, photo, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("accessToken")}`
        }      
      })
      .then((response) => {
        console.log(response.data);
        dispatch(createPhoto(response.data));
        window.alert("게시물 작성을 성공했습니다.");
        console.log("게시물 성공");
        window.location.href = "/place";
      })
      .catch((error) => {
        console.log(error.message);
        window.alert("게시물 작성에 실패했습니다.");
      });
  };
};

export const loadPhotoDB = () => {
  return function (dispatch) {
    axios.get(`http://dlckdals04.shop/api/recruits`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("accessToken")}`
      }
    })
    .then((response) => {
      console.log(response.data);
      dispatch(loadPhoto(response));
    });
  };
};

export const detailPhotoDB = (recruitPostId) => {
  return function (dispatch) {
    axios
      .get("http://dlckdals04.shop/api/recruits/" + recruitPostId,  {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("accessToken")}`
        }
      })
      .then((response) => {
        dispatch(detailPhoto(response.data.recruitDetails));
      })
      .catch((response) => {
        console.log(response);
      });
  };
};

export const updatePhotoDB = (recruitPostId, newPost) => {
  return function (dispatch) {
    axios
      .put(`http://dlckdals04.shop/api/recruits/` + recruitPostId, newPost, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("accessToken")}` },
      })
      .then((res) => {
        dispatch(updatePhoto(recruitPostId, res));
        alert(res.data.message);
        window.location.href = "/recruit";
      })
      .catch((error) => {
        console.log(error);
      });
  };
};

export const deletePhotoDB = (recruitPostId, navigate) => {
  return function (dispatch) {
    axios
      .delete("http://dlckdals04.shop/api/recruits/" + recruitPostId, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("accessToken")}`},
      })
      .then((response) => {
        dispatch(deletePhoto(response.data));
        alert("삭제가 완료되었습니다.");
        navigate("/recruit");
      })
      .catch((error) => {
        alert("게시글을 삭제할 권한이 없습니다.");
      });
  };
};

// Reducer
export default function reducer(state = initialState, action = {}) {
  // console.log(action)
  switch (action.type) {
    // case "post/CREATE": {
    //   console.log(action);
    //   const new_post_list = [...state.list, action.post];
    //   return { list: new_post_list };
    // }

    case "post/LOAD": {
      // console.log(action.post_list.data);
      return { list: action.photo_list.data };
    }

    case "post/DETAIL": {
      // console.log(action);
      return { list: action.photo_list };
    }

    // case "post/UPDATE": {
    //   console.log(action.post_list);
    //   const new_post_list = state.list.filter((l, idx) => {
    //     return parseInt(action.post_index) !== idx;
    //   });
    //   const new_list = [...new_post_list, action.post];
    //   return { list: new_list };
    // }

    case "post/DELETE": {
      const empty_list = [];
      return { list: empty_list };
    }

    default:
      return state;
  }
}
