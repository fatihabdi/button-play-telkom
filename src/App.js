import "./App.css";
import bumn from "./Assets/bumn.png";
import kai from "./Assets/kai.png";
import play from "./Assets/play.png";

function App() {
  return (
    <div className="App w-screen h-screen">
      <div className="flex absolute w-screen">
        <img src={bumn} alt="bumn" className="pt-5" />
        <img src={kai} alt="kai" className="pt-5 absolute right-0" />
      </div>
      <div className="absolute flex justify-between items-center w-screen h-screen px-[90px] text-orange-400 textBorder">
        <h1 className="text-[64px] font-bold">
          selamat datang <br />
          pelanggan setia
        </h1>
        <h1 className="text-[64px] font-bold">20.00</h1>
      </div>
      <div className="flex absolute z-50 justify-center items-center w-screen h-screen">
        <button className="">
          <img src={play} alt="bumn" className="pt-5" />
        </button>
      </div>
    </div>
  );
}

export default App;
