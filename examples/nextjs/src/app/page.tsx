import CustomModal from "../components/modals/CustomModal";

import styles from "./page.module.css";
import React from "react";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.center}>
        <CustomModal />
      </div>
    </main>
  );
}
