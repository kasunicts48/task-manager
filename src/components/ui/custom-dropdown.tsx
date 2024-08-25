import React, { useState } from 'react';

// Define the shape of each option that will be passed to the SelectDropdown component
interface Option {
    value: string;
    label: string;
}

// Define the props that the SelectDropdown component will accept
interface SelectDropdownProps {
    options: Option[]; // An array of options, where each option has a value and a label
    onChange: (value: string) => void; // A function to handle changes to the selected value
    label?: string; // An optional label for the select dropdown
}

// The SelectDropdown component
const SelectDropdown: React.FC<SelectDropdownProps> = ({ options, onChange, label }) => {
    // Use state to keep track of the currently selected value
    const [selectedValue, setSelectedValue] = useState<string>('');

    // Handle changes to the select dropdown
    const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const value = event.target.value;
        setSelectedValue(value); // Update the state with the new selected value
        onChange(value); // Call the onChange function passed via props to notify the parent component
    };

    return (
        <div className="border-[1px] border-gray-400 border-dashed rounded-lg text-xs text-gray-400 py-1 px-2 cursor-pointer">
            {/* If a label is provided, display it above the select dropdown */}

            <select
                value={selectedValue} // Set the value of the select dropdown to the current selected value
                onChange={handleChange} // Call handleChange when the user selects an option
                className="outline-none"
            >
                <option value="" disabled>
                    Set priority
                </option>
                {options.map((option) => (
                    <option
                        key={option.value}
                        value={option.value}
                        className="border-[1px] border-gray-400 border-dashed rounded-lg text-xs text-gray-400 py-1 px-2 cursor-pointer"
                    >
                        {option.label}
                    </option>
                ))}
            </select>
        </div>
    );
};

export default SelectDropdown;
