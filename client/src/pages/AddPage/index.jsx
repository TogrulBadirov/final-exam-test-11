import { Helmet } from "react-helmet-async";
import  { Toaster } from 'react-hot-toast';
const AddPage = () => {
  return (
    <>
      <Toaster position="top-left" reverseOrder={false} />
      <Helmet>
        <title>AddPage</title>
      </Helmet>
      <section id="AddPage">
        <div className="container">
            
        </div>
      </section>
    </>
  );
};

export default AddPage;
