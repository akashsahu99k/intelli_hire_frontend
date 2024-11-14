import MyEditor from "./MyEditor";
import Countdown from "./CountDown";
import { useState } from "react";

// components/CodeEditorPanel.js
export default function CodeEditorPanel() {
  const [lang, setLang] = useState("")
  

  return (
    <div className="min-h-[350px] h-2/3 bg-gray-100 pb-0 p-2 ">
      <div className="header h-10 mb-2 flex gap-5 items-center justify-between">
        <h3 className="text-md font-bold">Code</h3>
        <Countdown  startTime={2700}/>
        <div className="">
          <select value={lang} onChange={(e)=>{setLang(e.target.value)}}  className="w-[120px] ">
            <option value="python" >Python</option>
            <option value="cpp" >C++</option>
            <option value="java" >Java</option>
          </select>
        </div>

        <div className="flex gap-2">
          <button type="submit" className="run-button px-5 py-1 bg-red-400 text-white rounded-lg">
            Run
          </button>

          <button type="submit" className="run-button px-5 py-1 bg-red-400 text-white rounded-lg">
            Submit
          </button>
        </div>
      </div>
      <div className="h-[100%] pb-10 ">
        
        <MyEditor lang = {lang}/>
        
      </div>
    </div>
  );
}
