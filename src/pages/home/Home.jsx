import Featured from "../../components/featured/Featured";
import FeaturedProperties from "../../components/featuredProperties/FeaturedProperties";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import MailList from "../../components/mailList/MailList";
import Navbar from "../../components/navbar/Navbar";
import PropertyList from "../../components/propertyList/PropertyList";
import "./home.css";

const Home = () => {
  return (
    <>
      <Navbar />
      <Header />
      <div className="homeContainer">
        <Featured />
        <hr
          style={{
            width: "90%",
            height: "1px",
            backgroundColor: "#163020",
          }}
        />
        <h1 className="homeTitle">Browse by property type</h1>
        <PropertyList />
        <hr
          style={{
            width: "95%",
            height: "1px",
            backgroundColor: "#163020",
          }}
        />
        <h1 className="homeTitle">Guests top picks</h1>
        <FeaturedProperties />
        <MailList />
        <Footer />
      </div>
    </>
  );
};

export default Home;
