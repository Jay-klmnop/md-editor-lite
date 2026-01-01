import { markdownToHtml } from "../utils/markdown";
import "../css/preview.css";

interface PreviewProps {
  value: string;
}

export function Preview({ value }: PreviewProps) {
  return (
    <div
      className="preview"
      dangerouslySetInnerHTML={{ __html: markdownToHtml(value) }}
      style={{ listStyle: "decimal" }}
    />
  );
}
