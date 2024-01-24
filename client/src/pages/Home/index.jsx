import { Helmet } from "react-helmet-async";
import  { Toaster } from 'react-hot-toast';
import Header from "../../components/Header";
import Discuss from "../../components/Discuss";
import LatestCourses from "../../components/LatestCourses";
import FreeVideos from "../../components/FreeVideos";
const Home = () => {
  return (
    <>
      <Toaster position="top-left" reverseOrder={false} />
      <Helmet>
        <title>Home</title>
      </Helmet>
      <Header/>
      <Discuss/>
      <LatestCourses/>
      <FreeVideos/>
    </>
  );
};

export default Home;
