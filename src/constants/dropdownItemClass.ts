import { cx } from "../utils/cx";

interface DropdownItemClassProps {
  selected?: boolean;
}

export function dropdownItemClass({
  selected = false,
}: DropdownItemClassProps) {
  return cx(
    "text-custom-gray-700 hover:bg-custom-gray-100 relative flex cursor-pointer items-center gap-2 px-3 py-2.5 text-sm transition-colors select-none",
    selected && "bg-primary-50 text-primary-700 font-medium"
  );
}
