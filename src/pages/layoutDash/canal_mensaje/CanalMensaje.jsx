import css from "./mensaje.module.css";

const CanalMensaje = ({ author, date, content, hasMention, isBot, img }) => {
  return (
    <div className={`${css.container} ${hasMention ? css.mention : ""}`}>
      <div
        style={{ backgroundImage: `url(${img})` }}
        className={`${css.avatar} ${isBot ? css.bot : ""}`}
      />

      <div className={css.message}>
        <div className={css.header}>
          <strong className={css.author}  >{author}</strong>

          {isBot && <span className={css.bot}>Bot</span>}

          <time className={css.time}>{date}</time>
        </div>
        <div className={css.content}>{content}</div>
      </div>
    </div>
  );
};

export default CanalMensaje;
