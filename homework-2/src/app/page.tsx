import styles from "./page.module.css";
import { ShowContainer } from "@/components/features/shows/ShowContainer/ShowContainer";

export default function Home() {
  return (
    <main className={styles.main}>
      <ShowContainer />
    </main>
  );
}
