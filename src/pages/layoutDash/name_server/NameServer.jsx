import React from "react";
import css from "./name.module.css";
import * as IconFa6 from "react-icons/fa6";

export default function NameServer() {
  return (
    <div className={css.name_content}>
      <h5 className={css.title}>Server</h5>

      <IconFa6.FaAngleDown className={css.icon_down} />
    </div>
  );
}
