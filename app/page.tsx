import styles from "./page.module.css";
import Trending from "./components/trending/Trending";
import { IMovie } from "./components/types";
import fs from 'fs';
import path from 'path'

function getTrending(): IMovie[] {
  const filePath = path.join(process.cwd(), 'data', 'data.json');
  const jsonData: any =  fs.readFileSync(filePath);
  const data = JSON.parse(jsonData);

  return data;
} 

export default function Home() {
  const trending = getTrending().filter(item => item.isTrending === true);

  return (
    <main className={styles.main}>
      <Trending trending={trending}></Trending>      
    </main>
  );
}