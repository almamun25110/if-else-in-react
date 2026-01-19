import { useState } from "react";
import "./App.css";

function App() {
  let [pShow, setpShow] = useState(false);
  let [status, setStatus] = useState(false);
  let template = "";

  if (pShow) {
    template = (
      <>
        <button
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
          onClick={() => {
            setpShow(!pShow);
          }}
        >
          Hide
        </button>
        <p>This is a Paragraph</p>
      </>
    );
  } else {
    template = (
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={() => {
          setpShow(!pShow);
        }}
      >
        Show
      </button>
    );
  }

  return (
    <div className="App">
      {template}
      <br/>
      <button onClick={()=>setStatus(!status)} className="py-2 px-4 shadow-lg cursor-pointer hover:bg-blue-200 rounded-[5px]">{status ? "Hide" : "Show"}</button>
      {status ? <p>This is a Paragraph</p> : "" }
    </div>
  );
}

export default App;
