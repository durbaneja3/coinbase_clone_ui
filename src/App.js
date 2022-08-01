import "./App.css";
import Backdrop from "./components/Common/Backdrop";
import Hero from "./components/Home/Hero";
import Reward from "./components/Home/Reward";
import Explore from "./components/Home/Explore";
import Trade from "./components/Home/Trade";
import Earn from "./components/Home/Earn";
import Freedom from "./components/Home/Freedom";
import Promotion from "./components/Home/Promotion";
import Terms from "./components/Home/Terms";

function App() {
  return (
    <div className="App">
      <Hero />
      <Reward />
      <Explore />
      <Trade />
      <Earn />
      <Freedom />
      <Promotion />
      <Terms />
    </div>
  );
}

export default App;
