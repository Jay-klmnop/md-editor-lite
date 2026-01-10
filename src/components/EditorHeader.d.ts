import "../css/editor.css";
interface EditorHeaderProps {
    mode: "write" | "preview";
    setMode: (mode: "write" | "preview") => void;
    insertMarkdown: (before: string, after?: string) => void;
}
export declare function EditorHeader({ mode, setMode, insertMarkdown, }: EditorHeaderProps): import("react/jsx-runtime").JSX.Element;
export {};
