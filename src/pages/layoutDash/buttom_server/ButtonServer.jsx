import React from "react";
import css from "./buttom.module.css";
import iconDiscord from "../../../assets/icons/discord.png";
import dev from "../../../assets/icons/rolando_d3v.png";
import git from "../../../assets/icons/git.png";

export default function ButtonServer({
  home,
  notificacion,
  mensaje,
  serv,
}) {


  console.log(serv);
  console.log(serv?.mensaje);
  
  return (
    <button
      // isHome={isHome}
      // hasNotifications={hasNotifications}
      // mentions={mentions}
      style={{
        "--mensaje": `"${serv?.mensaje}" `,
        backgroundImage: `url(${serv?.img})` ,
        
      }}
      className={`
        ${css.btn_content}
        ${home && css.home}
        ${notificacion && css.notificacion}
        ${serv?.mensaje > 0 && mensaje  && css.mensajes}
        `}
     

      // className={selected ? "active" : ""}
    >
      {home && <img className={css.img_home} src={iconDiscord} alt="Discord" />}

      {/* <img className={css.img_server}   src={dev} alt="Discord" /> */}
    </button>
  );
}
