import css from "./head.module.css";
import python from "../../../assets/icons/python.png";

export default function Head() {
  return (
    <div className={css.head_content}>
      <div className={css.div_head}>
        <img className={css.icon} src={python} alt="" />
        <h6 className={css.text}>Python en Español</h6>
      </div>
    </div>
  );
}
