import { TOOLBAR_BUTTONS } from "../constants/toolbar";
import { ToolbarDropdownHeading, ToolbarDropdownList } from "../components";
import "../css/toolbar.css";

interface ToolbarProps {
  insertMarkdown: (before: string, after?: string) => void;
}

export function Toolbar({ insertMarkdown }: ToolbarProps) {
  return (
    <menu className="toolbar-menu">
      {TOOLBAR_BUTTONS.map(({ key, before, after, Icon }) => (
        <button
          key={key}
          className="toolbar-button"
          onClick={() => insertMarkdown(before, after)}
        >
          <Icon size={18} />
        </button>
      ))}
      <ToolbarDropdownHeading insertMarkdown={insertMarkdown} />
      <ToolbarDropdownList insertMarkdown={insertMarkdown} />
    </menu>
  );
}
