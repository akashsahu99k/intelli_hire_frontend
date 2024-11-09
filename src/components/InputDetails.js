"use client"

import React, { useContext, useState } from "react";
import { chatSession } from "../../utils/AiModel";
import { MockQuestionsContext } from "../../utils/MockQuestionsContext";

export default function InputDetails() {
    const [jobPos, setJobPos] = useState();
    const [jobDesc, setJobDesc] = useState();
    const [jobExp, setJobExp] = useState();
    const [level, setLevel] = useState();

    

    const { mockQue, setMockQue , setShowForm } = useContext(MockQuestionsContext);
    
    const Submit = async (e) => {
        e.preventDefault();
        
        const inputPrompt = "Generate 14 interview questions and answers in JSON format based on: Job Position: " + jobPos + ", Job Description: " + jobDesc + ", Years of Experience: " + jobExp + ", Difficulty Level: " + level + ". Start with introductory questions, followed by questions on skills, then on projects, and finally on relevant job or internship experience. Provide each question and answer in JSON as {'Question': 'Question text', 'Answer': 'Sample answer text'}.";

        const result = await chatSession.sendMessage(inputPrompt);
        const jsonText = (result.response.text()).replace("```json", "").replace("```", "");
        const parsedQue = JSON.parse(jsonText)
        console.log(parsedQue);
        setMockQue(parsedQue);
    };


    return(<>
       
        <div className="details fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm">
       
            <div className=" h-[100vh] w-full  flex flex-col justify-center items-center  ">
                    <div onClick={()=>{setShowForm(false)}} className="h-10 w-[49%]  text-2xl font-bold  flex justify-end">
                        <h1>X</h1>
                    </div>
                <div className="form h-[70vh] w-[50%] bg-white pl-12 rounded-lg overflow-hidden">
                    <h1 className="text-3xl font-bold pt-6">Enter Details Abour Yourself</h1>
                    <p className="text-slate-500 pt-1"> Add details About Your Job Position/Role Job Description and year of experience</p>
                    
                    
                    
                    <form onSubmit= {Submit} className="flex flex-col gap-2 w-[90%]">
                       <div className="flex flex-col  gap-1">
                            <label className=" font-semibold">Job Position / Job Role</label>
                            <input onChange={(event) => setJobPos(event.target.value)} type="text" placeholder="Ex - DEVOOPS" className="border border-slate-700 px-2 py-1" />
                       </div>

                       <div className="flex flex-col  gap-1">
                            <label className=" font-semibold">Job Description</label>
                            <textarea onChange={(event) => setJobDesc(event.target.value)} type="text" placeholder="Ex - React Js , Node Js , AWS " className="border border-slate-700 px-2 py-1 h-[100px]" />
                       </div>

                       <div className="flex flex-col  gap-1">
                            <label className=" font-semibold">Year Of Experience </label>
                            <input onChange={(event) => setJobExp(event.target.value)} type="Number" max="70"  placeholder="Ex - 5" className="border border-slate-700 px-2 py-1" />
                       </div>

                       <div className="flex flex-col  gap-1">
                            <label className=" font-semibold">Diffulty Level Of Interview</label>
                            {/* <input type="text" placeholder="Ex - DEVOOPS" className="border border-slate-700 px-2 py-1" /> */}
                            <select onChange={(event) => setLevel(event.target.value)} className="border border-slate-700 px-2 py-1">
                                <option>None</option>
                                <option>Easy</option>
                                <option>Medium</option>
                                <option>In-Depth</option>
                            </select>
                       </div>
                        
                       <div className="flex flex-col  gap-1">
                            <label className=" font-semibold">Upload Resume </label>
                            <input type="File" max="70"  placeholder="Ex - 5" className=" py-1 rounded-lg" />
                       </div> 

                       <div className="flex justify-end ">
                             <button className="bg-red-400 px-6 py-1 rounded-lg " type="submit">Start</button>
                       </div>

                    </form> 
                </div>
            </div>
         </div>
    
    
    
    </>)
}



