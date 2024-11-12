import BestSeller from "../components/BestSeller";
import Hero from "../components/Hero";
import LatestCollections from "../components/LatestCollections";
import Polices from "../components/Polices";

function Home() {
  return (
    <div>
      <Hero />
      <LatestCollections />
      <BestSeller />
      <Polices />
    </div>
  );
}

export default Home;
