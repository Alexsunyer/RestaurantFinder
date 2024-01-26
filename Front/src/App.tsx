import "./App.css";
import Footer from "./components/BaseComponents/Footer/Footer";
import Header from "./components/BaseComponents/Header/Header";
import Body from "./components/BaseComponents/Body/Body";

function App() {
  return (
    <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem]">
      <Header />
      <Body />
      <Footer />
    </div>
  );
}

export default App;
