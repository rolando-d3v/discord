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
            author="Diego Fernandes"
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
          <input
            className={css.input}
            type="text"
            placeholder="Conversarem #chat-livre"
          />
          {/* <InputIcon   /> */}
        </div>
    
    </div>
  );
}
