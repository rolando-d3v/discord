import css from "./head.module.css";
import python from "../../../assets/icons/python.png";

export default function Head() {
  return (
    <div className={css.head_content}>
      <div className={css.div_head}>
        <img className={css.icon} src={python} alt="" />
        <h6 className={css.text}>Python en Español</h6>
      </div>
      <div className={css.content_icon}>
        <svg className={css.svg} viewBox="0 0 20 20">
          <foreignObject
            x="0"
            y="0"
            width="20"
            height="20"
            overflow="visible"
            mask="url(#svg-mask-header-bar-badge-bottom)"
          >
            <svg
              x="0"
              y="0"
              className="icon__9293f"
              aria-hidden="true"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              fill="#828282"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="M5 2a3 3 0 0 0-3 3v14a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3V5a3 3 0 0 0-3-3H5ZM4 5.5C4 4.67 4.67 4 5.5 4h13c.83 0 1.5.67 1.5 1.5v6c0 .83-.67 1.5-1.5 1.5h-2.65c-.5 0-.85.5-.85 1a3 3 0 1 1-6 0c0-.5-.35-1-.85-1H5.5A1.5 1.5 0 0 1 4 11.5v-6Z"
                className=""
              ></path>
            </svg>
          </foreignObject>
        </svg>

        <svg
          x="0"
          y="0"
          className={css.svg}
          aria-hidden="true"
          role="img"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
        >
          <circle cx="12" cy="12" r="10" fill="transparent"></circle>
          <path
            fill="currentColor"
            d="M12 23a11 11 0 1 0 0-22 11 11 0 0 0 0 22Zm-.28-16c-.98 0-1.81.47-2.27 1.14A1 1 0 1 1 7.8 7.01 4.73 4.73 0 0 1 11.72 5c2.5 0 4.65 1.88 4.65 4.38 0 2.1-1.54 3.77-3.52 4.24l.14 1a1 1 0 0 1-1.98.27l-.28-2a1 1 0 0 1 .99-1.14c1.54 0 2.65-1.14 2.65-2.38 0-1.23-1.1-2.37-2.65-2.37ZM13 17.88a1.13 1.13 0 1 1-2.25 0 1.13 1.13 0 0 1 2.25 0Z"
          ></path>
        </svg>
      </div>
    </div>
  );
}
