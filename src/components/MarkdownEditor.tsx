import { useState } from "react";
import {
  EditorHeader,
  EditorTextarea,
  MarkdownExample,
  Preview,
} from "../components";
import { useMarkdownEditor } from "../hooks/useMarkdownEditor";
import "../css/editor.css";

interface MarkdownEditorProps {
  value: string;
  onChange: (v: string) => void;
  onImageUpload?: (file: File) => Promise<string>;
}

export function MarkdownEditor({
  value,
  onChange: setValue,
  onImageUpload,
}: MarkdownEditorProps) {
  const { textareaRef, insertMarkdown } = useMarkdownEditor({
    value,
    setValue,
  });
  const [mode, setMode] = useState<"write" | "preview">("write");

  return (
    <div className="editor">
      <EditorHeader
        mode={mode}
        setMode={setMode}
        insertMarkdown={insertMarkdown}
      />
      {mode === "write" ? (
        <EditorTextarea
          ref={textareaRef}
          value={value}
          setValue={setValue}
          onImageUpload={onImageUpload}
        />
      ) : (
        <Preview value={value} />
      )}
      <MarkdownExample />
    </div>
  );
}
