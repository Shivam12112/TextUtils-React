import About from "./compnents/About";
import Navbar from "./compnents/Navbar";
// import TextForm from "./compnents/TextForm";
const App = () => {
  return (
    <>
      <Navbar title='TextUtils' aboutTextutils='About TextUtils' />
      {/* <TextForm heading='Enter your text to analyze' /> */}
      <About />
    </>
  );
};

export default App;
