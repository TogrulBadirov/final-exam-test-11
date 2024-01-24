import { Helmet } from "react-helmet-async";
import  { Toaster } from 'react-hot-toast';
const NoPage = () => {
  return (
    <>
      <Toaster position="top-left" reverseOrder={false} />
      <Helmet>
        <title>NoPage</title>
      </Helmet>
      <section id="NoPage">
        <div className="container">
            <h1>Cannot Find Page! Error 404!</h1>
        </div>
      </section>
    </>
  );
};

export default NoPage;
