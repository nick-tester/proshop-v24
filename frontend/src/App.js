import React from "react";
import { Header, Footer, Main } from "./components";
import { HomeScreen } from "./screens";


const App = () => {
  return (
    <>
      <Header />
      <Main>
        <HomeScreen />
      </Main>
      <Footer />
    </>
  )
};


export default App;