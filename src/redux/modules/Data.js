// Data.js   모듈 안에 있는 리듀서를 묶어서 스토어를 만드는 것
import axios from 'axios';
import { getCookie } from '../../shared/Cookie'
import io from "socket.io-client";

// Actions      --> 저장변수 = 프로젝트명 / 모듈 명 (리듀서 명) / 액션 
const GET = 'ChatList/GET'
const CREATE = 'CreateRoom/CREATE'

// State 초기값
let initialState ={
}

// Action Creators      --> 액션 생성 함수
export function GetChatList(ChatList){
    return{type:GET,ChatList}
}

export function CreateRoom(RoomId){
    return{type:CREATE,RoomId}
}


// middleware --> 미들웨어 /  
export const GetChatListAxios = () =>{
    return function (dispatch){
        axios.get('http://13.125.241.180/api/chats/rooms',{ headers : { Authorization: `Bearer ${getCookie("accessToken")}`}})
        .then((res)=>{
            console.log(res)
            dispatch(GetChatList(res))
        }).catch((err)=>{
            console.log(err)
        })
    }
}

export const CreateRoomAxios = () =>{
    return function (dispatch){
        axios.post('http://13.125.241.180/api/chats/rooms/1',null,{ headers : { Authorization: `Bearer ${getCookie("accessToken")}`}})
        .then((res)=>{
            const socket = io.connect("http://13.125.241.180")
            const RoomId = res.data.RoomId
            socket.emit("join_room", RoomId);
            console.log(res)
            dispatch(CreateRoom(RoomId))
        })
        .catch((err)=>{
            console.log(err)
        })
    }
}






// Reducer
export default function ChatListData(state = initialState , action= {}){
    console.log(action)
    switch (action.type){
        case 'ChatList/GET' : {
            return {...state,list:action.ChatList.data}
        }
        case 'CreateRoom/CREATE' : {
            return {RoomId:action.RoomId};
        }
        default: return state;
    }
} 