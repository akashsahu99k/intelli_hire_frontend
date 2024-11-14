"use client";
import 'regenerator-runtime/runtime';
import { useReactMediaRecorder } from "react-media-recorder";
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import Webcam from "react-webcam";

import dynamic from 'next/dynamic';


import { useState } from "react";

export default function Test() {
    const { status, startRecording, stopRecording, mediaBlobUrl } = useReactMediaRecorder({ video: true });
    const { transcript, listening, resetTranscript, browserSupportsSpeechRecognition } = useSpeechRecognition();
    const startListening = () => {SpeechRecognition.startListening({ continuous: true , language : "en-IN" })}
    


    if (!browserSupportsSpeechRecognition) {
        return <span>Browser doesn't support speech recognition.</span>;
    }

    return (
        <div className="h-screen w-full flex flex-col items-center justify-center p-2 bg-gray-600 space-y-4">
            <div className="flex flex-col items-center space-y-2">
                <Webcam />
                <p className="text-white">Status: {status}</p>
                <div className="space-x-2">
                    <button className="px-3 py-2 bg-blue-500 text-white rounded" onClick={startRecording}>
                        Start Recording
                    </button>
                    <button className="px-3 py-2 bg-blue-500 text-white rounded" onClick={stopRecording}>
                        Stop Recording
                    </button>
                </div>
                {mediaBlobUrl && <video src={mediaBlobUrl} controls autoPlay loop className="mt-2" />}
            </div>

            <div className="Speech-to-text flex flex-col items-center space-y-2">
                <p className="text-white">Microphone: {listening ? 'On' : 'Off'}</p>
                <div className="space-x-2">
                    <button className="px-3 py-2 bg-green-500 text-white rounded" onClick={startListening}>
                        Start Listening
                    </button>
                    <button className="px-3 py-2 bg-red-500 text-white rounded" onClick={SpeechRecognition.stopListening}>
                        Stop Listening
                    </button>
                    <button className="px-3 py-2 bg-gray-400 text-white rounded" onClick={resetTranscript}>
                        Reset Transcript
                    </button>
                </div>
                <p className="text-white mt-2">{transcript}</p>
            </div>
        </div>
    );
}
