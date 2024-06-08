import React, { useRef, useEffect, useState } from "react";
import styles from "./chatmessage.module.scss";
import { parseJwt } from "../../shared/hooks/parseJWT";
import { connect, Socket } from "socket.io-client";
import { useAppSelector, useAppDispatch } from "../../app/hooks/useAppDispatch";
import { getChatById } from "../../features/chatSlice";
import { useParams } from "react-router-dom";
import { addMessage } from "../../features/messageSlice";
import formatDate from "../../utils/formatDate";
export interface MessageType {
  room: string;
  author: string;
  content: string;
  timestamp?: Date;
}

export interface ChatMessageType {
  id: string;
  messages: MessageType[];
}

const SOCKET_SERVER_URL = "http://localhost:3010";

export const ChatMessage: React.FC = () => {
  const token = localStorage.getItem("token");
  const { id: userID } = parseJwt(token as string);

  const dispatch = useAppDispatch();
  const chat = useAppSelector((state) => state.chatSlice.chat);
  const { id } = useParams();

  const [currentMessage, setCurrentMessage] = useState<string>("");
  const [messageList, setMessageList] = useState<MessageType[]>([]);

  const messagesEndRef = useRef<HTMLDivElement | null>(null);
  const socket = useRef<Socket | null>(null);

  useEffect(() => {
    socket.current = connect(SOCKET_SERVER_URL);
    socket.current.emit("join_room", id);

    socket.current.on("receive_message", (data: MessageType) => {
      setMessageList((list) => [...list, data]);
    });

    return () => {
      socket.current?.disconnect();
    };
  }, [id]);

  useEffect(() => {
    id && dispatch(getChatById({ id }));
  }, [dispatch, id]);

  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollTop = messagesEndRef.current.scrollHeight;
    }
  }, [messageList, chat?.messages]);

  const sendMessage = async () => {
    if (currentMessage.trim() === "") return;

    const messageData: MessageType = {
      room: id!,
      author: userID,
      content: currentMessage,
    };

    dispatch(
      addMessage({ chatId: id!, content: currentMessage, author: userID })
    );

    socket.current?.emit("send_message", messageData);

    setMessageList((list) => [
      ...list,
      { ...messageData, timestamp: new Date() },
    ]);
    setCurrentMessage("");
  };

  return (
    <div className={styles.bg}>
      <div className={styles.chatWindow}>
        <div className={styles.main}>
          <div ref={messagesEndRef} className={styles.chatForm}>
            <div className={styles.body}>
              {chat?.messages?.map((item, index) => (
                <div
                  key={index}
                  className={
                    userID === item.author ? styles.you : styles.outher
                  }
                >
                  <div className={styles.message}>
                    <span>{item.content}</span>
                  </div>
                  <div className={styles.comment_footer}>
                    <span className={styles.time}>
                      {formatDate(item.timestamp)}
                    </span>
                  </div>
                </div>
              ))}
            </div>
            <div className={styles.body}>
              {messageList.map((messageContent, index) => (
                <div
                  key={index}
                  className={
                    userID === messageContent.author
                      ? styles.you
                      : styles.outher
                  }
                >
                  <div className={styles.message}>
                    <span>{messageContent.content}</span>
                  </div>
                  <div className={styles.comment_footer}>
                    <span className={styles.time}>
                      {formatDate(messageContent?.timestamp as Date)}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className={styles.footer}>
            <input
              type="text"
              value={currentMessage}
              placeholder="Hey..."
              onChange={(e) => setCurrentMessage(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") sendMessage();
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
