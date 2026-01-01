import { forwardRef } from "react";
import "../css/editor.css";

interface EditorTextareaProps {
  value: string;
  placeholder?: string;
  setValue: (value: string) => void;
  onImageUpload?: (file: File) => Promise<string>;
}

export const EditorTextarea = forwardRef<
  HTMLTextAreaElement,
  EditorTextareaProps
>(({ value, placeholder, setValue, onImageUpload }, ref) => {
  const handleDrop = async (e: React.DragEvent) => {
    e.preventDefault();
    if (!onImageUpload) return;

    const files = Array.from(e.dataTransfer.files).filter((file) =>
      file.type.startsWith("image/")
    );

    for (const file of files) {
      const url = await onImageUpload(file);
      setValue(value + `\n![${file.name}](${url})\n`);
    }
  };
  return (
    <textarea
      ref={ref}
      value={value}
      onChange={(e) => setValue(e.target.value)}
      onDragOver={(e) => e.preventDefault()}
      onDrop={handleDrop}
      placeholder={placeholder}
      className="editor-textarea"
    ></textarea>
  );
});
