import ImgMediaCard from "../../components/Card/Card";
import Header from "../Header/Header";
import styles from "./styles.module.scss";
import Footer from "../../components/Footer/Footer";
import Sidebar from "../../components/Sidebar/Sidebar";
import ImgMediaCard_2 from "../../components/Card/Card_2";
import ImgMediaCard_3 from "../../components/Card/Card_3";
const MainPage = () => {
  return (
    <>
      {/* <Header /> */}
      <Sidebar/>
      <div className={styles.card}>
        <div className={styles.first}><ImgMediaCard /></div>
        <ImgMediaCard_2/>
        <ImgMediaCard_3 />
      </div>
      <Footer />
    </>
  );
};

export default MainPage;
