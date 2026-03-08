import { useState } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import { Copy, Play } from "lucide-react";

const CodeBlock = ({ code }: { code: string }) => {

  const [output, setOutput] = useState("");
  const [running, setRunning] = useState(false);

  const copyCode = () => {
    navigator.clipboard.writeText(code);
  };

  const runCode = async () => {
    setRunning(true);
    setOutput("Running...");

    const pyodide = await (window as any).loadPyodide();

    try {
      const result = await pyodide.runPythonAsync(code);
      setOutput(String(result));
    } catch (err: any) {
      setOutput(err.toString());
    }

    setRunning(false);
  };

  return (
    <div className="relative">

      {/* Buttons */}
      <div className="absolute right-3 top-3 flex gap-2 z-10">

        <button
          onClick={copyCode}
          className="bg-github-dark px-3 py-1 rounded flex items-center gap-1 text-sm hover:bg-github-medium"
        >
          <Copy size={14} />
          Copy
        </button>

        <button
          onClick={runCode}
          className="bg-github-accent px-3 py-1 rounded flex items-center gap-1 text-sm"
        >
          <Play size={14} />
          Run
        </button>

      </div>

      {/* Code */}
      <SyntaxHighlighter
        language="python"
        style={oneDark}
        customStyle={{
          borderRadius: "12px",
          padding: "25px",
          fontSize: "14px",
        }}
      >
        {code}
      </SyntaxHighlighter>

      {/* Output */}
      {output && (
        <div className="mt-4 bg-black rounded p-4 text-green-400 font-mono text-sm">
          {output}
        </div>
      )}
    </div>
  );
};

export default CodeBlock;