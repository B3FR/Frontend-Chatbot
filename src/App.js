import Header from "./components/ui/Header";
import Descuento from "../src/assets/imgDescuento.png";
import "../src/style/App.css"



function App() {
  return (
    

      <div>
        <Header />
        <div className="content_title">
          <h2>SI LLEGA A TUS MANOS,</h2>
          <div>
            <h2>ES</h2>
            <h2 className="active"> OLVA</h2>
          </div>
        </div>
        <div className="content_main app"> 
            <img src={Descuento} className="logo_app" alt="logo"></img>
        </div>

      </div>
      

  );
}

export default App;
