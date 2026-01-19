import { useState } from "react";
import "./App.css";

function App() {
  let template = "";
  let [pShow, setpShow] = useState(false);

  if (pShow) {
    template = (
      <>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
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
    </div>
  );
}

export default App;
