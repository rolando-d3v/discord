import dev from "../../../assets/icons/rol_dev.png";
import styles from "./info.module.css";
import * as Icons from "react-icons/fa";

export default function InfoUser() {
  return (
    <div className={styles.info_content}>

      <div className={styles.profile}>
        <div className={styles.div_img}>
          <img className={styles.img_avatar} src={dev} alt="Rolando D3v" />
        </div>
        <p className={styles.user_data}>
          <strong className={styles.name}  >Rolando D3v</strong>
          <span className={styles.status} >En linea</span>
        </p>
      </div>

      <div className={styles.list_icons}>
        <Icons.FaMicrophone className={styles.icon} />
        <Icons.FaHeadphones className={styles.icon} />
        <Icons.FaCog className={styles.icon} />
      </div>
    </div>
  );
}
