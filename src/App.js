import Header from "./components/Header";

import { useEffect } from "react";
import { Container } from "@mui/system";
import Banner from "./components/Banner";

function App() {
  useEffect(() => {
    document.title = "React Material UI - Home";
  }, []);
  return (
    <Container
      maxWidth="xl"
      sx={{
        background: "#fff",
      }}
    >
      <Header />
      <Banner />
    </Container>
  );
}

export default App;
