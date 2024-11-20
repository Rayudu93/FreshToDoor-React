import HomeDelights from "../../Footer/Footer";
import HeaderPart from "../../Header/Header";
import Categories from "./Categories";
import WhyChooseUs from "./Choose";
import MiddlePart from "./Middle";
import FeaturedProducts from "./Products";


function Home(){
    return(
        < div style={{padding: "10px",backgroundColor:"white"}}>
        <HeaderPart/>
        <MiddlePart />
        < Categories/>
        <WhyChooseUs />
        <FeaturedProducts />
        <HomeDelights />
        </div>
    );
}

export default Home;
