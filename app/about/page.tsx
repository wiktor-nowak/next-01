import Link from "next/link";
import React from "react";
import styles from "./styles.module.css";

export default function About() {
  return (
    <main className={styles.main}>
      <h2>About</h2>
      <Link href="/">Link to Homepage</Link>
    </main>
  );
}
