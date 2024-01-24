import { Helmet } from "react-helmet-async";
import  { Toaster } from 'react-hot-toast';
const Detail = () => {
  return (
    <>
      <Toaster position="top-left" reverseOrder={false} />
      <Helmet>
        <title>Detail</title>
      </Helmet>
      <section id="Detail">
        <div className="container">
            
        </div>
      </section>
    </>
  );
};

export default Detail;
