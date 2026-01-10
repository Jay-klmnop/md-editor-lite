interface UseMarkdownEditorProps {
    value: string;
    setValue: (v: string) => void;
}
export declare function useMarkdownEditor({ value, setValue }: UseMarkdownEditorProps): {
    textareaRef: import("react").RefObject<HTMLTextAreaElement>;
    insertMarkdown: (before: string, after?: string) => void;
};
export {};
