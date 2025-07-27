import { useEffect, useRef } from "react";
import CanalMensaje from "../canal_mensaje/CanalMensaje";
import css from "./content.module.css";
import ListUser from "../list_user/ListUser";
import { BsFillGiftFill } from "react-icons/bs";
import { MdOutlineGifBox } from "react-icons/md";
import { IoGameController } from "react-icons/io5";
import { CgFile } from "react-icons/cg";
import { dataUser } from "../../../data/data";

export default function ContentData({ activeSide, setActiveSide }) {
  const messagesRef = useRef();

  useEffect(() => {
    const messages = messagesRef.current;
    messages.scrollTop = messages.scrollHeight;
  }, []);

  return (
    <div className={css.contenedor}>
      <div className={css.content_data}>
        <div className={css.messages} ref={messagesRef}>
          {dataUser.server?.map((n) => (
            <CanalMensaje
              key={n.id}
              author={n.nombre}
              date={n.fecha}
              content={n.mensaje}
              isBot={n.bot}
              img={n.foto}
              hasMention={n.mentions}
            />
          ))}
        

        </div>

        <div className={css.input_wrapper}>
          <div className={css.input_container}>
            <svg
              aria-hidden="true"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className={css.svg}
            >
              <circle cx="12" cy="12" r="10" fill="transparent"></circle>
              <path
                fill="currentColor"
                d="M12 23a11 11 0 1 0 0-22 11 11 0 0 0 0 22Zm0-17a1 1 0 0 1 1 1v4h4a1 1 0 1 1 0 2h-4v4a1 1 0 1 1-2 0v-4H7a1 1 0 1 1 0-2h4V7a1 1 0 0 1 1-1Z"
                className="attachButtonPlus__0923f"
              ></path>
            </svg>
            <input
              className={css.input}
              type="text"
              placeholder="Enviar mensaje a #💬╏chat-general"
            />
            <div className={css.div_icon_input}>
              <BsFillGiftFill className={css.icon_input} />
              <MdOutlineGifBox className={css.icon_input} />
              <CgFile className={css.icon_input} />
              <IoGameController className={css.icon_input} />
            </div>
          </div>
        </div>
      </div>

      {/* <ListUser  /> */}
      <ListUser activeSide={activeSide} setActiveSide={setActiveSide} />
    </div>
  );
}
