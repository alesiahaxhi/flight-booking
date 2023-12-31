import React from "react";
import Home from "./Components/Home/Home";
import Navbar from "./Components/Navbar/Navbar";
import Search from "./Components/Search/Search";
import Support from "./Components/Support/Support";
import Info from "./Components/Info/Info";
import Travelers from "./Components/Travelers/Travelers";
import Lounge from "./Components/Lounge/Lounge";
import Subscribers from "./Components/Subscribers/Subscribers";
import Footer from "./Components/Footer/Footer";

export const App = () => {
  return (
    <div>
      <Navbar />
      <Home />
      <Search />
      <Support />
      <Info />
      <Lounge />
      <Travelers />
      <Subscribers />
      <Footer />
    </div>
  );
};

export default App;
