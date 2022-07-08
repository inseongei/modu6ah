import axios from "axios";
import { getCookie } from '../../shared/Cookie'

// Actions
const CREATE = 'post/CREATE';
const LOAD = 'post/LOAD';
const UPDATE = 'post/UPDATE';
const DELETE = 'post/DELETE';

const initialState = {
     list: [{}]
};


// Action Creators
export function createPost(post_list) {
  console.log("액션을 생성할 거야!")
  return { type: CREATE, post_list };
}

export function loadPost(post_list) {
    return { type: LOAD, post_list };
}

export function updatePost(post_list) {
    return { type: UPDATE, post_list };
}

export function deletePost(post_list) {
    return { type: DELETE, post_list };
}

// middleware
export const createPostDB = (post_data) => {
 const post = post_data;
    return async function (dispatch) {
      axios.post(`http://dlckdals04.shop/api/recruits`, post,
      { headers : { Authorization: `Bearer ${getCookie("accessToken")}`}})
      .then((response) => {
          console.log(response.data);
          dispatch(createPost(response.data))
          window.alert('게시물 작성 성공')
          window.location.href = "/recruit"
      }).catch((error) => {
        console.log(error.message);
      })
    };
  };
  
export const loadPostDB = () => {
    return function (dispatch) {
      axios.get(
        `http://dlckdals04.shop/api/recruits`
        // ' http://localhost:5001/posts'
        )
      .then((response) => {
        console.log(response.data);
        dispatch(loadPost(response));
      });
    };
  };

  export const deletePostDB = (id, recruits) => {
    return function (dispatch) {
      axios
        .delete(`http://3.35.176.127/posts/${recruits}/${id}`,
        { headers :
           { Authorization: `Bearer ${getCookie("accessToken")}`} 
        })
        .then((response) => {
          dispatch(deletePost(id));
      
        })
        .catch((error) => {
          console.log("게시물 삭제 에러");
        });
    };
  };


// Reducer
export default function reducer(state = initialState, action = {}) {
    switch (action.type) {
      case "post/LOAD": {
        console.log(action.post_list.data);
        return { list: action.post_list.data };
      }
     
      case "post/UPDATE": {
        console.log(action);
        const new_post_list = state.list.filter((l, idx) => {
          return parseInt(action.post_index) !== idx;
        });
        const new_list = [...new_post_list, action.post];
        return { list: new_list };
      }
      case "post/DELETE": {
        const new_post_list = state.list.filter((l, idx) => {
          return parseInt(action.post_index) !== idx;
        });
        return { list: new_post_list };
      }

      default:
        return state;
    }
  }