// Data.js   모듈 안에 있는 리듀서를 묶어서 스토어를 만드는 것
import axios from "axios";
import io from "socket.io-client";

const url = process.env.REACT_APP_URL;

const socket = io.connect(`${url}`);

// Actions      --> 저장변수 = 프로젝트명 / 모듈 명 (리듀서 명) / 액션
const GET = "MyPage/GET";
const MainGET = "Main/GET";
const RecruitGET = "Recruit/GET";
const ReviewGET = "Review/GET"
const MainLogin = "MainLogin/GET";

// State 초기값
let initialState = {};

// Action Creators      --> 액션 생성 함수
export function GetMyPage(MyPage) {
  return { type: GET, MyPage };
}

export function GetMain(Profile) {
  return { type: MainGET, Profile };
}

export function GetLogin(Profile) {
  return { type: MainLogin, Profile };
}


export function GetRecruit(Recruit) {
  return { type: RecruitGET, Recruit };
}

export function GetReview(Review) {
  return { type: ReviewGET, Review };
}


// middleware --> 미들웨어 /
export const GetMyPageAxios = (nickname) => {
  return function (dispatch) {
    axios
      .get(`${url}/api/mypage/profile/` + nickname,  {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("accessToken")}`
        }
      })
      .then((res) => {
        console.log(res.data)
        dispatch(GetMyPage(res.data));
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

export const GetMainAxois = () => {
  return function (dispatch) {
    axios
      .get(`${url}/api/main`,  
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("accessToken")}`
        }
      }
      )
      .then((res) => {
        dispatch(GetMain(res.data));
      });
  };
};



export const GetMainLogin = () => {
  return function (dispatch) {
    axios
      .get(`${url}/api/main`)
      .then((res) => {
        dispatch(GetMain(res.data));
      });
  };
};








export const GetRecruitAxois = () => {
  return function (dispatch) {
    axios
      .get(`${url}/api/recruits`,  {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("accessToken")}`
        }
      })
      .then((res) => {
        dispatch(GetRecruit(res.data));
      });
  };
};

export const GetReviewAxois = (reviewPostId) => {
  return function (dispatch) {
    axios
      .get(`${url}/api/reviews/` + reviewPostId , {
        headers: { Authorization: `Bearer ${localStorage.getItem("accessToken")}` },
      })
      .then((res) => {
        console.log(res)
        dispatch(GetRecruit(res.data));
      }).catch((err)=>{
        console.log(err)
      })
  };
};










// Reducer
export default function Data(state = initialState, action = {}) {
  switch (action.type) {
    case "MyPage/GET": {
      return { state: action.MyPage };
    }
    case "Main/GET": {
      return { Profile: action.Profile };
    }
    case "Recruit/GET": {
      return { Recruit: action.Recruit };
    }
    case "Review/GET" : {
      return {Review : action.Review}
    }
    default:
      return state;
  }
}
