import GlobalStyles from "./styles/GlobalStyles";
import { light, dark } from "./styles/Themes";
import { ThemeProvider } from "styled-components";

// import { lazy, Suspense } from "react";
// import Loading from "./components/Loading";

// Below Imports using React.lazy and Suspence

// const Navigation = lazy(() => import("./components/Navigation"));
// const Home = lazy(() => import("./components/sections/Home"));
// const About = lazy(() => import("./components/sections/About"));
// const Roadmap = lazy(() => import("./components/sections/Roadmap"));
// const Team = lazy(() => import("./components/sections/Team"));
// const Showcase = lazy(() => import("./components/sections/Showcase"));
// const Faq = lazy(() => import("./components/sections/Faq"));
// const Footer = lazy(() => import("./components/Footer"));
// const ScrollToTop = lazy(() => import("./components/ScrollToTop"));

import Navigation from "./components/Navigation";
import About from "./components/sections/About";
import BannerSG from "./components/sections/BannerSG";
import Home from "./components/sections/Home";
import Roadmap from "./components/sections/Roadmap";
import Team from "./components/sections/Team";
import Footer from "./components/Footer";
import Agenda from "./components/sections/Agenda";
import Showcase from "./components/sections/Showcase";
import Faq from "./components/sections/Faq";
import Track from "./components/sections/Track";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <main>
      <GlobalStyles />
      <ThemeProvider theme={dark}>
        {/* <Suspense fallback={<Loading />}> */}
        {/* <Navigation /> */}
        <Home />
        <BannerSG />
        <Agenda />
        <Track />
        {/* <About />
        <Roadmap />
        <Showcase /> */}
        <Team />
        {/* <Faq /> */}
        <Footer />
        {/* <ScrollToTop scrollPosition={y}/> */}
        <ScrollToTop /> {/* </Suspense> */}
      </ThemeProvider>
    </main>
  );
}

export default App;
