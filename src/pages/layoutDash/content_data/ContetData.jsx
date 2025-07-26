import { useEffect, useRef } from "react";
import CanalMensaje from "../canal_mensaje/CanalMensaje";
import css from "./content.module.css";

export default function ContentData() {
  const messagesRef = useRef();

  useEffect(() => {
    const messages = messagesRef.current;
    messages.scrollTop = messages.scrollHeight;
  }, []);

  return (
    <div className={css.content_data}>
      <div className={css.messages} ref={messagesRef}>
        {Array.from(Array(15).keys()).map((n) => (
          <CanalMensaje
            key={n}
            author="Guilherme Rodz"
            date="21/06/2020"
            content="Hoje é o meu aniversário!"
          />
        ))}

        <CanalMensaje
          author="Rolando D3v - Rahemza"
          date="21/06/2020"
          content={
            <>
              <span className={css.mention}>@Guilherme Rodz</span>, me carrega
              no LoL e CS de novo por favor?
            </>
          }
          hasMention
          isBot
        />
      </div>

      <div className={css.input_wrapper}>
        <div className={css.input_container}  >
          <svg
            aria-hidden="true"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
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
        </div>
      </div>
    </div>
  );
}
