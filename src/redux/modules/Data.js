// Data.js   모듈 안에 있는 리듀서를 묶어서 스토어를 만드는 것
import axios from 'axios';
import { getCookie } from '../../shared/Cookie'

// Actions      --> 저장변수 = 프로젝트명 / 모듈 명 (리듀서 명) / 액션 
const GET = 'ChatList/GET'

// State 초기값

// Action Creators      --> 액션 생성 함수
export function GetChatList(ChatList){
    return{type:GET,ChatList}
}


// middleware --> 미들웨어 /  
export const GetChatListAxios = () =>{
    return function (dispatch){
        axios.get('http://13.124.212.159/api/chats/rooms',{ headers : { Authorization: `Bearer ${getCookie("accessToken")}`}})
        .then((res)=>{
            dispatch(GetChatList(res))
        }).catch((err)=>{
            console.log(err)
        })
    }
}






// Reducer
export default function ChatListData(state = {} , action= {}){
    switch (action.type){
        case 'ChatList/GET' : {
            return {list : action.ChatList.data.chatRoomList}
        }
        default: return state;
    }
} 