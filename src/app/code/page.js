// pages/index.js
"use client"
import DescriptionPanel from '@/components/DescriptionPanel';
import CodeEditorPanel from '@/components/CodeEditorPanel';
import TestCasePanel from '@/components/TestCasePanel';
import CameraModule from '@/components/CameraModule';
import { useRef,useEffect } from 'react';

export default function Home() {
  
  const ref = useRef(null);
  return (
    <div className="flex h-screen" ref={ref}>
      {/* Left Panel */}
      <div className="w-1/3 border-r border-gray-300 p-4">
        <DescriptionPanel />
        <div className='relative mt-10 z-200'>
         <CameraModule className="absolute" reference = {ref}/>
        </div>
      </div>

      {/* Right Panel */}
      <div className="w-2/3 flex flex-col">
        <CodeEditorPanel />
        <TestCasePanel />
        
      </div>
    </div>
  );
}
