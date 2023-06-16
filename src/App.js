import "./App.css";
import DetailsComponent from "./components/detailsNtimelines/DetailsComponent.js";
import Footer from "./components/footer/footer.js";
import AboutComponent from "./components/mediaAbout/aboutComponent.js";
import Header from "./components/mediaHeader/Header.js";
import Modus from "./components/modusComponent/modus.js";
import TearmsComponent from "./components/termsComponent/termsComponent.js";

function App() {
  return (
    <div className="App">
      <Header />

      <AboutComponent />
      <Modus />
      <DetailsComponent />
      <TearmsComponent />

      <Footer />
    </div>
  );
}

export default App;
