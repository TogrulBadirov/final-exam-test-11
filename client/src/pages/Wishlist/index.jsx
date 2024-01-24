import { Helmet } from "react-helmet-async";
import  { Toaster } from 'react-hot-toast';
const Wishlist = () => {
  return (
    <>
      <Toaster position="top-left" reverseOrder={false} />
      <Helmet>
        <title>Wishlist</title>
      </Helmet>
      <section id="Wishlist">
        <div className="container">
            
        </div>
      </section>
    </>
  );
};

export default Wishlist;
