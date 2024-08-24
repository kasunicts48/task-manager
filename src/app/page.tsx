'use client';

import AddButton from '@/components/addButton/AddButton';
import SectionTab from '@/components/sectionTab/SectionTab';

export default function Home() {
    return (
        <div className="bg-slate-100 min-h-full -translate-y-1 p-5 flex justify-between gap-3 overflow-x-hidden">
            <div className="flex flex-col min-h-screen w-full justify-start border-2 border-dashed rounded-md border-gray-300">
                <SectionTab name="Todo" circleBorderColor="yellow" />
                <AddButton />
            </div>
            <div className="flex flex-col min-h-screen w-full justify-start border-2 border-dashed rounded-md border-gray-300">
                <SectionTab name="In Progress" circleBorderColor="blue" />
                <AddButton />
            </div>
            <div className="flex flex-col min-h-screen w-full justify-start border-2 border-dashed rounded-md border-gray-300">
                <SectionTab name="Completed" circleBorderColor="green" />
                <AddButton />
            </div>
        </div>
    );
}
