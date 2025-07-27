import css from "./list_user.module.css";
import user from "../../../assets/icons/avatar.png";
import { dataUser } from "../../../data/data";

export default function ListUser({ activeSide }) {
  return (
    <div className={`${css.list_user}   ${activeSide ? css.active_side : ""}`}>
      <div className={css.role}>Moderador 👮‍♂️ -- 1</div>

      {dataUser.server?.map((n) => (
        <UserRow nickname={n.nombre} key={n.id} isBot={n.bot} foto={n.foto} color_text={n.color_text} />
      ))}

      <div className={css.role}>Academia Lifetime 💎 -- 7</div>
      {dataUser.server?.map((n) => (
        <UserRow nickname={n.nombre} key={n.id} isBot={n.bot} foto={n.foto} color_text={n.color_text} />
      ))}
    </div>
  );
}

const UserRow = ({ nickname, isBot, foto, color_text }) => {
  return (
    <div className={css.user}>
      <div
        style={{ backgroundImage: `url(${foto})` }}
        className={`${css.avatar} ${isBot ? css.bot : ""}   `}
      />
      <strong className={`${isBot ? css.bot : ""}  `} style={{ color: color_text }}>{nickname}</strong>
      {isBot && <span>Bot</span>}
    </div>
  );
};
