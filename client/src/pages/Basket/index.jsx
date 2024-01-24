import { Helmet } from "react-helmet-async";
import  { Toaster } from 'react-hot-toast';
const Basket = () => {
  return (
    <>
      <Toaster position="top-left" reverseOrder={false} />
      <Helmet>
        <title>Basket</title>
      </Helmet>
      <section id="Basket">
        <div className="container">
            
        </div>
      </section>
    </>
  );
};

export default Basket;
