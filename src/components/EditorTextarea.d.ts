import "../css/editor.css";
interface EditorTextareaProps {
    value: string;
    placeholder?: string;
    setValue: (value: string) => void;
    onImageUpload?: (file: File) => Promise<string>;
}
export declare const EditorTextarea: import("react").ForwardRefExoticComponent<EditorTextareaProps & import("react").RefAttributes<HTMLTextAreaElement>>;
export {};
