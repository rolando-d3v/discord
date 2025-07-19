import css from "./name.module.css";
import * as IconFa6 from "react-icons/fa6";
import icon from "../../../assets/icons/icon_d.png";

export default function NameServer() {
  return (
    <div className={css.name_content}>
      <div className={css.div_name_server}>
        <img className={css.icon} src={icon} alt="icon" />
        <h5 className={css.title}>Python en Español</h5>
      </div>
      <IconFa6.FaAngleDown className={css.icon_down} />
    </div>
  );
}
