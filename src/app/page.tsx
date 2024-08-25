'use client';

import AddButton from '@/components/addButton/AddButton';
import CreateTaskCard from '@/components/createTaskCard/CreateTaskCard';
import SectionTab from '@/components/sectionTab/SectionTab';
import TaskCard from '@/components/taskCard/TaskCard';

export default function Home() {
    return (
        <div className="bg-slate-100 min-h-full -translate-y-1 p-5 flex justify-between gap-3 overflow-x-hidden">
            <div className="flex flex-col min-h-screen w-full justify-start border-[1px] border-dashed rounded-md border-gray-300">
                <SectionTab name="Todo" circleBorderColor="yellow" />
                <AddButton />
                <div className="flex justify-center">
                    <CreateTaskCard />
                </div>
            </div>
            <div className="flex flex-col min-h-screen w-full justify-start border-[1px] border-dashed rounded-md border-gray-300">
                <SectionTab name="In Progress" circleBorderColor="blue" />
                <AddButton />
                <div className="flex justify-center">
                    <TaskCard />
                </div>
            </div>
            <div className="flex flex-col min-h-screen w-full justify-start border-[1px] border-dashed rounded-md border-gray-300">
                <SectionTab name="Completed" circleBorderColor="green" />
                <AddButton />
            </div>
        </div>
    );
}
