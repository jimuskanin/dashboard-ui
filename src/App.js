import './App.css';

import logo from "./assets/images/logo.png";

function App() {
  return (
    <div>
      <div className="fixed w-[100px] text-center bg-[#222222] h-full p-4">
        <img
          src={logo}
          className="w-[70px] h-fit pb-5"
          alt="HIKAL"
        />
        <div className="sidebar flex flex-column gap-2 align-items-center justify-content-center rounded-full">
          <div className="nav-link rounded-full p-4">
            ICON
          </div>
        </div>
        SIDEBAR
      </div>
      <div className="pl-[100px]">
        <div className="p-4">
          HELLO WORLD
        </div>
      </div>
    </div>
  );
}

export default App;
