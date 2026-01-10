import "../css/editor.css";
interface MarkdownEditorProps {
    value: string;
    onChange: (v: string) => void;
    onImageUpload?: (file: File) => Promise<string>;
}
export declare function MarkdownEditor({ value, onChange: setValue, onImageUpload, }: MarkdownEditorProps): import("react/jsx-runtime").JSX.Element;
export {};
