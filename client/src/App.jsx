import Layout from "../src/layout/layout";
import React from "react";

document.addEventListener('mousemove', e=> {

  let bubles = document.createElement('bubles');
  let x = e.pageX;
  let y = e.pageY;
  bubles.style.left = x + "px";
  bubles.style.top = y + "px";
  let size = Math.random() * 10;
  bubles.style.width = 1 + size + "px";
  bubles.style.height = 1 + size + "px";
  
  document.body.appendChild(bubles);
  setTimeout(function() {
    bubles.remove();
  }, 500);
});




function App() {
  return <Layout />;
}

export default App;
