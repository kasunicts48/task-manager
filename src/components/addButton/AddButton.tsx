import React from 'react';
import { Add } from 'iconsax-react';
const AddButton = () => {
    return (
        <div className="flex text-gray-500 px-4 py-2 items-center justify-center font-medium cursor-pointer">
            <Add size="32" color="#555555" />
            Add task
        </div>
    );
};

export default AddButton;
