import "../css/editor.css";

interface EditorTabProps {
  mode: string;
  setMode: (mode: "write" | "preview") => void;
}

export function EditorTab({ mode, setMode }: EditorTabProps) {
  return (
    <div className="editor-tab-container">
      <div
        className={`editor-tab ${mode === "write" ? "editor-tab--active" : ""}`}
        onClick={() => setMode("write")}
      >
        Write
      </div>
      <div
        className={`editor-tab ${
          mode === "preview" ? "editor-tab--active" : ""
        }`}
        onClick={() => setMode("preview")}
      >
        Preview
      </div>
    </div>
  );
}
