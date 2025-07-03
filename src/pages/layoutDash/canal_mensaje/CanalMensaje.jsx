import css from "./mensaje.module.css";

const CanalMensaje = ({ author, date, content, hasMention, isBot }) => {
  return (
    <div className={`${css.container} ${hasMention ? css.mention : ""}`}>
    
      <div className={`${css.avatar} ${isBot ? css.bot : ""}`} />
    
      <div className={css.message}>
        <div className={css.header}>
          <strong>{author}</strong>

          {isBot && <span>Bot</span>}

          <time>{date}</time>
        </div>
        <div className={css.content}>{content}</div>
      </div>
    </div>
  );
};

export default CanalMensaje;
