import css from "./buttom.module.css";
import iconDiscord from "../../../assets/icons/discord.png";

export default function ButtonServer({ home, mensaje, serv }) {
  return (
    <button
      style={{
        "--mensaje": `"${serv?.mensaje}" `,
      }}
      className={`
        ${home && css.home}
        ${!home && css.bola}
        ${css.btn_content}
        ${serv?.mensaje > 0 && mensaje && css.mensajes}
        `}
    >
      {home ? (
        <div className={css.img_server_home}>
          <img className={css.img_home} src={iconDiscord} alt="Discord" />
        </div>
      ) : (
        <img className={css.img_server} src={serv?.img} alt="Discord" />
      )}
    </button>
  );
}
