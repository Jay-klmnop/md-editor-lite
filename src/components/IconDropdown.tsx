import React from "react";
import { cx } from "../utils/cx";
import "../style.css";

export type DropdownOption = {
  value: string;
  label?: string;
  Icon?: React.ComponentType<React.SVGProps<SVGSVGElement>>;
};

interface IconDropdownProps {
  className?: string;
  disabled?: boolean;
  options: DropdownOption[];
  selected?: boolean;
  triggerIcon: React.ReactNode;
  onChange: (value: string) => void;
}

export function IconDropdown({
  className,
  disabled,
  options,
  selected,
  triggerIcon,
  onChange,
}: IconDropdownProps) {
  const [isOpen, setIsOpen] = React.useState(false);
  const dropdownRef = React.useRef<HTMLDivElement>(null);

  const toggle = () => {
    if (!disabled) setIsOpen((prev) => !prev);
  };

  React.useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target as Node)
      ) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div ref={dropdownRef} className={cx("md-dropdown", className)}>
      <button
        type="button"
        onClick={toggle}
        disabled={disabled}
        className={cx(
          "md-dropdown__trigger",
          disabled && "md-dropdown__trigger--disabled"
        )}
      >
        {triggerIcon}
      </button>

      {isOpen && (
        <ul className="md-dropdown__menu">
          {options.map((option) => (
            <li
              key={option.value}
              className={cx(
                "md-dropdown__item",
                selected && "md-dropdown__item--selected"
              )}
              onClick={() => {
                onChange(option.value);
                setIsOpen(false);
              }}
            >
              {option.Icon && (
                <span className="md-dropdown__icon">
                  <option.Icon />
                </span>
              )}
              {option.label && (
                <span className="md-dropdown__label">{option.label}</span>
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
