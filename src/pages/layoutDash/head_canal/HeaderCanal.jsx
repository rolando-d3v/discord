import css from "./head.module.css";
import * as IconFa6 from "react-icons/fa6";

export default function HeaderCanal({ activeSide, setActiveSide }) {
  return (
    <div className={css.head_content}>
      <div className={css.div_content}  >
        <IconFa6.FaHashtag className={css.icon_hash} />

        <h5 className={css.title}>chat-livre</h5>

        <div className={css.separador}></div>

        <p className={css.descripcion}>Canal aberto para conversas</p>
      </div>
      <IconFa6.FaUserGroup className={css.icon_users} onClick={() => setActiveSide(!activeSide)}/>
    </div>
  );
}
