import { Helmet } from "react-helmet";
import Banner from "./Banner/Banner";
import FeaturedProjects from "./Featured/FeaturedProjects";


const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Shazzad | Home</title>
      </Helmet>
      <Banner></Banner>      
      <FeaturedProjects></FeaturedProjects>
    </div>
  );
};

export default Home;