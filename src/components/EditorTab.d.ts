import "../css/editor.css";
interface EditorTabProps {
    mode: string;
    setMode: (mode: "write" | "preview") => void;
}
export declare function EditorTab({ mode, setMode }: EditorTabProps): import("react/jsx-runtime").JSX.Element;
export {};
