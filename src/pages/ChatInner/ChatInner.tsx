// import { useParams } from "react-router-dom";
// import { useAppSelector } from "../../app/hooks/useAppDispatch";
// import { useEffect, useRef, useState } from "react";
// import axios from "axios";
// import { jwtDecode } from "jwt-decode";
// import { io } from "socket.io-client";

// const ChatInner = () => {
// const { id } = useParams();
// const users = useAppSelector((state) => state.userSlice.users);
// const user  = users.filter(user => user._id === id)
// const [msg, setMsg] = useState("");
// const [messages, setMessages] = useState([])
// const [arrivalMessage, setArrivalMessage] = useState(null);
// const socket = useRef()
// // const scrollRef = useRef();
// const token = localStorage.getItem('token');
// const decodedToken = jwtDecode(token);
// const userId = decodedToken.id;

// const axiosInstance = axios.create({
//     baseURL: 'http://localhost:3010', 
//   });
//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//        if(id) {
//          const response = await axiosInstance.post('getmessages', {
//           from: userId,
//           to: id,
//         });
//         setMessages(response.data);
//        }
//       } catch (error) {
//         // Обработайте ошибку здесь
//         console.error('Ошибка при загрузке сообщений:', error);
//       }
//     };
  
//     fetchData(); // Вызовите асинхронную функцию fetchData
//   }, [userId, id]); // Передайте зависимости в массиве зависимостей
  
// const handleSendMsg = async(msg) => {
//     await axiosInstance.post('/messages/add', {
//         from:userId,
//         to:id,
//         message:msg
//     });
//     socket.current.emit("send-msg", {
//         to: id,
//         from: userId,
//         message:msg,
//       });
//       const msgs = [...messages];
//       msgs.push({ fromSelf: true, message: msg });
//       setMessages(msgs);
// }
// useEffect(() => {
//     if(socket.current) {
//         socket.current.on("msg-recieve", (msg) => {
//             setArrivalMessage({ fromSelf: false, message: msg });
//           });
//     }
// },[])

// const sendChat = (event) => {
//     event.preventDefault();
//     if (msg.length > 0) {
//       handleSendMsg(msg);
//       setMsg("");
//     }
//   };
//  console.log(id,'front');
 
//   useEffect(() => {
//     if (id ) {
//       socket.current = io('http://localhost:3010');
//       socket.current.emit("add-user", id);
//     }
//   }, [id]);

//   useEffect(() => {
//     arrivalMessage && setMessages((prev) => [...prev, arrivalMessage]);
//   }, [arrivalMessage]);

 
//   return (
//     <div>
//       chat-inner
//       <div>{user[0]?.name}</div>
//       {messages.map((message) => (
//         <div>{message.message}</div>
//       ))}
//       <form className="input-container" onSubmit={(event) => sendChat(event)}>
//         <input
//           type="text"
//           placeholder="type your message here"
//           onChange={(e) => setMsg(e.target.value)}
//           value={msg}
//         />
//         <button type="submit">
//           +
//         </button>
//       </form>
//     </div>
//   )
// }

// export default ChatInner
import React from 'react'

const ChatInner = () => {
  return (
    <div>ChatInner</div>
  )
}

export default ChatInner