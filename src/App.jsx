import "./App.css";
import Accordian from "./components/accordian";
import RandomColors from "./components/random-colors";
import StarRating from "./components/star-rating";

const App = () => {
  return (
    <>
      {/* <Accordian /> */}
      {/* <RandomColors /> */}
      <StarRating noOfStart={10} />
    </>
  );
};

export default App;
