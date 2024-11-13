"use client";
import React, { useState } from "react";
import InputDetails from "@/components/InputDetails";
import Webcam from "react-webcam";

export default function InterviewPage() {
  const [mockQue, setMockQue] = useState();
  const [showForm, setShowForm] = useState(false);

  // Job Form Details
  const [jobDetailsForm, setJobDetailsForm] = useState({
    jobPos: "",
    jobDesc: "",
    jobExp: "",
    level: "",
  });

  const handleJobDetailsFormChange = (e) => {
    setJobDetailsForm((prevJD) => ({...prevJD, [e.target.name]: e.target.value}));
  }


  return (
    <>
      <div className="h-[100vh] w-[100%] bg-blue-400 flex">
        <div className="left h-[100%] w-1/2 bg-orange-300 flex flex-col gap-12 items-center pt-10">
          <div className="camera-window h-[60%] w-[90%] bg-white rounded-xl">
            <Webcam className="w-full h-full rounded-xl object-cover" />
          </div>

          <button
            onClick={() => setShowForm(true)}
            className="bg-red-400 px-4 py-1.5 rounded-xl"
          >
            <h3>Start Interview</h3>
          </button>
        </div>

        {showForm && (
          <InputDetails
            jobDetailsForm={jobDetailsForm}
            handleJobDetailsFormChange={handleJobDetailsFormChange}
            setMockQue={setMockQue}
            setShowForm={setShowForm}
          />
        )}

        <div className="right h-[100%] w-1/2">
          <div className="Question-section h-full w-full bg-slate-400">
            <div className="details px-12 gap-1 flex flex-col">
              <div className="questions max-h-[40vh] overflow-auto w-[90%] bg-white mt-10 py-4 px-4 text-xl">
                <h1>Interview Questions</h1>
                {mockQue && mockQue.length > 0 ? (
                  <ul>
                    {mockQue.map((qna, index) => (
                      <li key={index}>
                        <strong>Question:</strong> {qna.Question} <br />
                        {/* <strong>Answer:</strong> {qna.Answer} */}
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p>No questions available. Please enter details first.</p>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
