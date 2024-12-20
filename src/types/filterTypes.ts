export interface FilterTypes {
  language: string;
  level: string;
  price: string;
}

export interface DropdownProps {
  selectedValue: string;
  onSelectValue: (value: string) => void;
}
