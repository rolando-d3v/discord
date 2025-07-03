import dev from "../../../assets/icons/rol_dev.png";
import css from "./info.module.css";
import * as Icons from "react-icons/fa";

export default function InfoUser() {
  return (
    <div className={css.info_content}>
      <div className={css.profile}>
        <img className={css.img_avatar} src={dev} alt="" />
        <p className={css.user_data}>
          <strong>Rolando D3v</strong>
          <span>En linea</span>
        </p>
      </div>

      <div className={css.list_icons}>
        <Icons.FaMicrophone className={css.micro} />
        <Icons.FaHeadphones className={css.micro} />
        <Icons.FaCog className={css.micro} />
      </div>
    </div>
  );
}
