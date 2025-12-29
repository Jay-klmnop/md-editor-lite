import { TOOLBAR_BUTTONS } from "../constants/toolbar";
import { ToolbarDropdownHeading, ToolbarDropdownList } from "../components";

interface ToolbarProps {
  insertMarkdown: (before: string, after?: string) => void;
}

export function Toolbar({ insertMarkdown }: ToolbarProps) {
  return (
    <menu className="flex items-center gap-4">
      {TOOLBAR_BUTTONS.map(({ key, before, after, Icon }) => (
        <button
          key={key}
          className="bg-transparent text-custom-gray-700 hover:bg-custom-gray-100 active:bg-custom-gray-200 h-5 w-5"
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
