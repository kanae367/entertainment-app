import Trending from "./components/trending/Trending";
import Recommended from "./components/recommended/Recommended";
import getAllData from "./_lib/getAllData";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home | Entertainment App"
}

export default function Home() {
  const trending = getAllData().filter(item => item.isTrending === true);
  const recommended = getAllData().filter(item => item.isTrending === false);

  return (
    <main>
      <Trending trending={trending}></Trending>
      <Recommended recommended={recommended}></Recommended>
    </main>
  );
}