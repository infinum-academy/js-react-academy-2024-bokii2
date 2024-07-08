import { Heading } from "@chakra-ui/react";
import styles from "./page.module.css";
import { ShowContainer } from "@/components/features/shows/ShowContainer/ShowContainer";

export default function Home() {
  return (
    <main className={styles.main}>
      <Heading as='h3' size='lg'>TV Shows App</Heading>
      <ShowContainer />
    </main>
  );
}
