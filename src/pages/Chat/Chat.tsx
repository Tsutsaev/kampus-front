import styles from "./chat.module.scss";
import Logo from "../../assets/logo.svg?react";
import Phone from "../../assets/phone.svg?react";
import CallVideo from "../../assets/callVideo.svg?react";
import { useAppDispatch, useAppSelector } from "../../app/hooks/useAppDispatch";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getAllChat } from "../../features/chatSlice";
import { parseJwt } from "../../shared/hooks/parseJWT";

const Chat = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const token = localStorage.getItem("token");
  const { id: userID } = parseJwt(token as string);

  const chats = useAppSelector((state) => state.chatSlice.chatsList);

  useEffect(() => {
    dispatch(getAllChat({ id: userID }));
  }, [dispatch, userID]);

  const joinRoom = (chatId: string) => {
      navigate(`/ChatInner/${chatId}`);
  };

  return chats.map((item) => (
    <div
      className={styles.chat}
      onClick={() => joinRoom(item.id)}
    >
      <div className={styles.chat_header}>
        <div className={styles.chat_about}>
          <div className={styles.logo}>
            <Logo />
          </div>
          <div className="chat_name">
            <div className="chat_name_inner">{item.name}</div>
            <div className={styles.chat_name_online}>
              Online - Last seen, 2.02pm
            </div>
          </div>
        </div>
        <div className={styles.connection}>
          <div className={styles.connenct}>
            <div className="call">
              <Phone />
            </div>
            <div className="video_call">
              <CallVideo />
            </div>
          </div>
        </div>
      </div>
    </div>
  ));
};

export default Chat;
