import css from "./list_user.module.css";
import { dataUser } from "../../../data/data";

export default function ListUser({ activeSide }) {
  return (
    <div className={`${css.list_user}   ${activeSide ? css.active_side : ""}`}>
      <div className={css.role}>Moderador 👮‍♂️ -- 1</div>

      {dataUser.server?.map((n) => (
        <UserRow
          nickname={n.nombre}
          key={n.id}
          isBot={n.bot}
          foto={n.foto}
          color_text={n.color_text}
        />
      ))}

      <div className={css.role}>Academia Lifetime 💎 -- 7</div>
      {dataUser.server?.map((n) => (
        <UserRow
        key={n.id}
          nickname={n.nombre}
          isBot={n.bot}
          foto={n.foto}
          color_text={n.color_text}
        />
      ))}
    </div>
  );
}

const UserRow = ({ nickname, isBot, foto, color_text }) => {
  return (
    <div className={css.user}>
      <div
        style={{ backgroundImage: `url(${foto})` }}
        className={`${css.avatar}   `}
      />
      <strong
        className={`${css.name} ${ isBot && css.color_bot}  `}
        style={{
          "--color-user": `${color_text}`,
        }}
        >
        {nickname}
      </strong>
      {isBot && <span className={css.bot}>Bot</span>}
    </div>
  );
};
