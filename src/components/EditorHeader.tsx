import { EditorTab, Toolbar } from "../components";
import "../style.css";

interface EditorHeaderProps {
  mode: "write" | "preview";
  setMode: (mode: "write" | "preview") => void;
  insertMarkdown: (before: string, after?: string) => void;
}

export function EditorHeader({
  mode,
  setMode,
  insertMarkdown,
}: EditorHeaderProps) {
  return (
    <header className="editor-header">
      <EditorTab mode={mode} setMode={setMode} />
      {mode === "write" && <Toolbar insertMarkdown={insertMarkdown} />}
    </header>
  );
}
