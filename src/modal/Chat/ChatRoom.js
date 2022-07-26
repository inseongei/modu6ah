import React from "react";
import Modal from "react-modal";
import "../../shared/App.css";
import { BiLogOut } from "react-icons/bi";
import ScrollToBottom from "react-scroll-to-bottom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import cancel from '../../images/cancel.png'
import back from '../../images/back.png'


toast.configure();
const ChatRoom = ({ open, onClose, NowRoom, socket, realroom }) => {
  const input_Ref = React.useRef();
  const nickname = localStorage.getItem("nickname");
  const [NowChat, setNowChat] = React.useState([]);
  const [currentMessage, setCurrentMessage] = React.useState("");
  const Img_Url = localStorage.getItem("profileUrl");
  const [info, setinfo] = React.useState();

  console.log(NowChat)

  React.useEffect(() => {
    socket.off("receive_message").on("receive_message", (data) => {
      console.log(data)
      setNowChat((list) => [...list, data]);
    });
  }, [socket]);

  const sendMessage = async () => {
    if (currentMessage !== "") {
      const messageData = {
        receiverNick:
          info.receiverNick === nickname ? info.senderNick : info.receiverNick,
        profileUrl: Img_Url,
        profileUrlTwo: info.profileUrlTwo,
        roomId: realroom,
        senderNick: nickname, // 보내는 사람
        message: currentMessage,
        time:
          new Date(Date.now()).getHours() +
          "시 " +
          +new Date(Date.now()).getMinutes() +
          "분",
      };
      await socket.emit("send_message", messageData);
      setCurrentMessage("");
    }
  };

  const OutRoom = () => {
    socket.emit("back", realroom);
    onClose();
    setNowChat([]);
  };

  React.useEffect(() => {
    socket.on("test", (data) => {
      setinfo(data);
    });
  }, [socket]);

  if (!open) return null;
  return (
    <>
      <Modal isOpen={true} className="ChatList">
          <div className="ChatListBoxTwo animate__animated animate__fadeIn">
          <img src = {back} alt="닫기" className="x" onClick={OutRoom}/>
          {/* <span className="twoToOne"> {info.receiverNick}  님과 대화</span> */}
        </div>

        <ScrollToBottom className="message-containerTwo animate__animated animate__fadeIn" >
        {NowRoom && NowRoom.map((data,idx)=>{
          return  nickname === data.senderNick ? (
            <div key={idx}>
            <div className="MyChat">
              <div className="MyTime">{data.time}</div>
              <div className="MyContent">
              <span>{data.message}</span>
              </div>
            </div>
            </div>
          )            
          : 
          <div>
          <div>
            <img src={data.profileUrl} alt="사진" className="youProfile"/>
            <span className="youNickname">{data.senderNick}</span>
          </div>
          <div className="youChat">
            <div className="youContent">
            <span>{data.message}</span>
            </div>
            <div className="youTime">{data.time}</div>
          </div>
          </div>
        }) }

{NowChat&& NowChat.map((data,idx)=>{
          return  nickname === data.senderNick ? (
            <div key={idx}>
            <div className="MyChat">
              <div className="MyTime">{data.time}</div>
              <div className="MyContent">
              <span>{data.message}</span>
              </div>
            </div>
            </div>
          )            
          : 
          <div>
          <div>
            <img src={data.profileUrl} alt="사진" className="youProfile"/>
            <span className="youNickname">{data.senderNick}</span>
          </div>
          <div className="youChat">
            <div className="youContent">
            <span>{data.message}</span>
            </div>
            <div className="youTime">{data.time}</div>
          </div>
          </div>
  })}
        </ScrollToBottom>
        <div className="SendChat animate__animated animate__fadeIn">
          <input type="text"  ref={input_Ref}
            value={currentMessage}
            onChange={(event) => {
              setCurrentMessage(event.target.value);
            }}
            onKeyPress={(event) => {
              event.key === "Enter" && sendMessage();
            }}/>
          <button onClick={sendMessage}>보내기</button>
        </div>
    

      </Modal>
    </>
  );
};

export default ChatRoom;
