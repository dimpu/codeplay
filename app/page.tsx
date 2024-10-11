"use client";

import Editor from "@monaco-editor/react";

export default function Home() {
  return (
    <div className="flex h-screen">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <Editor
          width={"50%"}
          theme="vs-dark"
          height="100vh"
          defaultLanguage="typescript"
          defaultValue="// some comment"
          onChange={(value) => {
            console.log(value);
          }}
          onMount={(editor, monaco) => {
            console.log(editor);
            console.log(monaco);
            editor.onDidChangeModelContent(() => {
              console.log(editor.getValue());
            });
          }}
        />
        <div className="flex h-screen"></div>
      </main>
    </div>
  );
}
