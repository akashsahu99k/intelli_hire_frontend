// pages/index.js
"use client"
import DescriptionPanel from '@/components/DescriptionPanel';
import CodeEditorPanel from '@/components/CodeEditorPanel';
import TestCasePanel from '@/components/TestCasePanel';


export default function Home() {
  return (
    <div className="flex h-screen">
      {/* Left Panel */}
      <div className="w-1/3 border-r border-gray-300 p-4">
        <DescriptionPanel />
      </div>

      {/* Right Panel */}
      <div className="w-2/3 flex flex-col">
        <CodeEditorPanel />
        <TestCasePanel />
      </div>
    </div>
  );
}
