import { cx } from "../utils/cx";

interface EditorTabClassProps {
  active?: boolean;
}

export function editorTabClass({ active = false }: EditorTabClassProps) {
  return cx(
    "cursor-pointer px-2 py-1 text-sm font-medium transition-colors",
    active
      ? "text-custom-gray-900 border-b-2 border-custom-gray-900"
      : "text-custom-gray-600 hover:text-custom-gray-800"
  );
}
