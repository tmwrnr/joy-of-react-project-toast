import React from "react";

import Toast from "../Toast";
import styles from "./ToastShelf.module.css";
import { useToasts } from "../ToastProvider/ToastProvider";

function ToastShelf() {
  const { toasts, removeToast } = useToasts();
  return (
    <ol className={styles.wrapper}>
      {toasts.map((toast) => (
        <li className={styles.toastWrapper} key={toast.id}>
          <Toast {...toast} onDismiss={removeToast} />
        </li>
      ))}
    </ol>
  );
}

export default ToastShelf;
