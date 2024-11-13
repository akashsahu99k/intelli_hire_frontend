// Syntax Highlighting and Code Suggestions in CodeMirror
import React from "react";
import { UnControlled as CodeMirror } from "react-codemirror2";
import "codemirror/lib/codemirror.css";
import "codemirror/mode/javascript/javascript";
import "codemirror/addon/hint/show-hint";
import "codemirror/addon/hint/javascript-hint";
import "codemirror/addon/fold/foldgutter.css";
import "codemirror/addon/fold/foldgutter";
import "codemirror/addon/fold/brace-fold";

function MyEditor() {
  return (
    <CodeMirror
    options={{
      lineNumbers: true,
      mode: "javascript",
      extraKeys: { "Ctrl-Space": "autocomplete" },
      foldGutter: true,
      gutters: ["CodeMirror-linenumbers", "CodeMirror-foldgutter"],
    }}
  />
);
}

export default MyEditor;
