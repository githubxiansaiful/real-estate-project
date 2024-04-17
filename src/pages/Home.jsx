import { Helmet } from "react-helmet";
import AnyQuestion from "../components/AnyQuestion";
import FeaturedProperties from "../components/FeaturedProperties";
import HeroSlider from "../components/HeroSlider";
import HowItsWork from "../components/HowItsWork";

const Home = () => {
    return (
        <div>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Home | Real Estate</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>
            <HeroSlider></HeroSlider>
            <FeaturedProperties></FeaturedProperties>
            <HowItsWork></HowItsWork>
            <AnyQuestion></AnyQuestion>
        </div>
    );
};

export default Home;