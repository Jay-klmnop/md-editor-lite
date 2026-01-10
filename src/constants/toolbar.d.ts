import type { DropdownOption } from "../components/IconDropdown";
type ToolbarDropdownOption = DropdownOption & {
    before: string;
};
export declare const TOOLBAR_BUTTONS: {
    key: string;
    before: string;
    after: string;
    Icon: import("react").ForwardRefExoticComponent<Omit<import("lucide-react").LucideProps, "ref"> & import("react").RefAttributes<SVGSVGElement>>;
}[];
export declare const headingOptions: ToolbarDropdownOption[];
export declare const listOptions: ToolbarDropdownOption[];
export {};
