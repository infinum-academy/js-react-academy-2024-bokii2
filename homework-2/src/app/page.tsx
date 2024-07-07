import Image from "next/image";
import styles from "./page.module.css";
import { ShowDetails } from "@/components/features/shows/ShowDetails/ShowDetails";

const someShow = {
  title: "Game Of Thrones",
  description: "Some description",
  averageRating: 0,
  imageUrl: "https://media.glamour.com/photos/5fa2e9c958f1ae62b4f610e8/master/w_2560%2Cc_limit/tv-2.jpg"
}

export default function Home() {
  return (
    <main className={styles.main}>
      <h1>TV Shows App</h1>
      <ShowDetails show={someShow} />
    </main>
  );
}
