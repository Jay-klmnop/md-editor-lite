import React from "react";
import "../css/dropdown.css";
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
export declare function IconDropdown({ className, disabled, options, selected, triggerIcon, onChange, }: IconDropdownProps): import("react/jsx-runtime").JSX.Element;
export {};
