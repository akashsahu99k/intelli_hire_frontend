import MyEditor from "./MyEditor";

// components/CodeEditorPanel.js
export default function CodeEditorPanel() {
  return (
    <div className="min-h-[350px] h-2/3 bg-gray-100 pb-0 p-2 ">
      <div className="header h-10 mb-2 flex gap-5 items-center justify-between">
        <h3 className="text-md font-bold">Code</h3>
        <div className="">
          <select className="w-[120px] ">
            <option>C++</option>
            <option>Java</option>
            <option>Python</option>
          </select>
        </div>

        <div>
          <button className="run-button px-5 py-1 bg-red-400 text-white rounded-lg">
            Run
          </button>
        </div>
      </div>
      <div className="h-[90%] pb-10">
        
        {/* <textarea

          className="w-full h-full p-4 border border-blue-200 resize-none rounded-md"
          placeholder="// Write your code here" 
          
        /> */}
        <MyEditor/>
        
      </div>
    </div>
  );
}
