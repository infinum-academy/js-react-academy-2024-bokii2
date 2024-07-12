'use client'

import { useRouter } from "next/navigation";
import styles from "./page.module.css";

export default function Home() {
  const router = useRouter();

  router.push('/all-shows');

  return (
    <main className={styles.main}>
    </main>
  );
}
