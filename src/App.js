import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import ScrollToTop from "./Components/ScrollToTop";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Home from "./Pages/Home";
import Projects from "./Pages/Projects";
import { useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";

function App() {  
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    // <ThemeProvider theme={theme}>
    <div className="App">
      <Navbar />
      <ScrollToTop />
      <Home isMobile={isMobile}/>
      <About isMobile={isMobile}/>
      <Projects isMobile={isMobile}/>
      <Contact isMobile={isMobile}/>
    </div>
    // </ThemeProvider>
  );
}

export default App;
