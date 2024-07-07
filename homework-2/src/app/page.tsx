import { Heading } from "@chakra-ui/react";
import styles from "./page.module.css";
import { ShowDetails } from "@/components/features/shows/ShowDetails/ShowDetails";

const someShow = {
  title: "Game Of Thrones",
  description: `Game of Thrones is roughly based on the storylines of the A Song of Ice and Fire book series by George R. R. Martin,
                set in the fictional Seven Kingdoms of Westeros and the continent of Essos. The series follows several simultaneous
                plot lines. The first story arc follows a war of succession among competing claimants for control of the Iron Throne 
                of the Seven Kingdoms, with other noble families fighting for independence from the throne. The second concerns the 
                exiled scion &apos; actions to reclaim the throne; the third chronicles the threat of the impending winter, as well as the 
                legendary creatures and fierce peoples of the North.`,
  averageRating: 0,
  imageUrl: "game-of-thrones.jpg"
}

export default function Home() {
  return (
    <main className={styles.main}>
      <Heading as='h3' size='lg'>TV Shows App</Heading>
      <ShowDetails show={someShow} />
    </main>
  );
}
