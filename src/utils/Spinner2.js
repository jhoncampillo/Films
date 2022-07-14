import React from "react";
import { FaSpinner } from "react-icons/fa";
import style from "../utils/spinner.module.css";

export const Spinner2 = () => {
  return (
    <div className={style.spinner}>
      <FaSpinner className={style.spinning} size={70} />
    </div>
  );
};
