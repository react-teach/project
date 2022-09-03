
import Header from "./components/Header";

import { useEffect } from "react";
import { Container } from "@mui/system";
import Banner from "./components/Banner";

function App() {
  useEffect(() => {
    document.title = "React Material UI - Home";
  }, []);
  return (
    <>

      <Header />
      <Banner/>


      </>
  );
}

export default App;
