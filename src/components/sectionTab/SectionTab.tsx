import React from 'react';
import { Add } from 'iconsax-react';

type TailwindBorderColor = 'yellow' | 'blue' | 'green';

interface SectionTabProps {
    name?: string;
    circleBorderColor?: TailwindBorderColor;
}

const SectionTab: React.FC<SectionTabProps> = ({ name, circleBorderColor }) => {
    return (
        <div className="flex bg-white px-4 py-2 rounded-lg justify-between m-4">
            <div className="flex items-center gap-3">
                <div className={`border-${circleBorderColor}-500 rounded-full border-2 w-5 h-5`}></div>
                <div className="font-bold">{name ? name : 'text'}</div>
                <div className="flex items-center justify-center rounded-full w-5 h-5 bg-blue-200 text-blue-600 text-sm font-semibold">
                    0
                </div>
            </div>
            <div>
                <Add size="32" color="#000000" className="cursor-pointer" />
            </div>
        </div>
    );
};

export default SectionTab;
