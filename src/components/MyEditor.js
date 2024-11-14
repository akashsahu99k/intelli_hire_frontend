import React, { useRef, useState, useEffect } from "react";
import Editor from '@monaco-editor/react';

function MyEditor({ lang }) {
  
  // Retrieve saved code from local storage or set it to an empty string
  const [code, setCode] = useState(localStorage.getItem("savedCode") || "");
  const editorRef = useRef(null);

  // Handle editor mount to save reference
  function handleEditorDidMount(editor) {
    editorRef.current = editor;
  }

  // Save code to state and local storage on change
  function handleCodeChange(value) {
    setCode(value);
    localStorage.setItem("savedCode", value); // Save to local storage
  }
  
  // Show current code in alert (for testing purposes)
  function showValue() {
    alert(editorRef.current.getValue());
  }

  return (
    <Editor
      className="max-h-[97%]"
      value={code}
      onChange={handleCodeChange}
      loading = "true"
      language={lang}
      options={{
        suggest: true,
      }}
      defaultLanguage="python"
      defaultValue="// some comment"
      onMount={handleEditorDidMount}
    />
  );
}

export default MyEditor;
