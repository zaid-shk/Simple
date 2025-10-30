import React from "react";
// import Img from "../public/2560-anime-one-piece.png";
import Top from './assets/Components/Top'
import Second from "./assets/Components/Second";
import Third from "./assets/Components/Third"; 
import Fourth from "./assets/Components/fourth";

function App() {
  return (
    <div className="w-screen px-50 py-5 flex justify-center">
      <div className="h-full w-200 rounded-2xl px-5 py-2 flex flex-col">
       <Top/>
       <Second/>
       <Third/>
       <Fourth/>
      </div>
    </div>
  );
}

export default App;
