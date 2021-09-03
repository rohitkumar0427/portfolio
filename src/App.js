import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import ScrollToTop from "./Components/ScrollToTop";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Home from "./Pages/Home";
import Projects from "./Pages/Projects";
import { ThemeProvider } from "@material-ui/core/styles";

const theme = {};

function App() {
  return (
    // <ThemeProvider theme={theme}>
    <div className="App">
      <Navbar />
      <ScrollToTop />
      <Home />
      <About />
      <Projects />
      <Contact />
    </div>
    // </ThemeProvider>
  );
}

export default App;
