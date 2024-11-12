import BestSeller from "../components/BestSeller";
import Hero from "../components/Hero";
import LatestCollections from "../components/LatestCollections";
import NewsLetter from "../components/NewsLetter";
import Polices from "../components/Polices";

function Home() {
  return (
    <div>
      <Hero />
      <LatestCollections />
      <BestSeller />
      <Polices />
      <NewsLetter />
    </div>
  );
}

export default Home;
