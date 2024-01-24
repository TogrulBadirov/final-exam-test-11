import { Helmet } from "react-helmet-async";
import  { Toaster } from 'react-hot-toast';
const Home = () => {
  return (
    <>
      <Toaster position="top-left" reverseOrder={false} />
      <Helmet>
        <title>Home</title>
      </Helmet>
      
    </>
  );
};

export default Home;
