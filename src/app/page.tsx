'use client';

import AddButton from '@/components/addButton/AddButton';
import CreateTaskCard from '@/components/createTaskCard/CreateTaskCard';
import SectionTab from '@/components/sectionTab/SectionTab';
import TaskCard from '@/components/taskCard/TaskCard';
// import { useCallback } from 'react';
// import { DragDropContext, Droppable, DroppableProvided, DroppableStateSnapshot, DropResult } from 'react-beautiful-dnd';

export default function Home() {
    // const onDragEnd = useCallback((result: DropResult) => {
    //     console.log('result ⛵', result);
    // }, []);

    return (
        <div className="bg-slate-100 min-h-full -translate-y-1 p-5 flex justify-between gap-3 overflow-x-hidden">
            {/* <DragDropContext onDragEnd={onDragEnd}>
                <Droppable droppableId="todo" type="COLUMN" direction="horizontal">
                    {(provided: DroppableProvided, snapshot: DroppableStateSnapshot) => {
                        return (
                            <ul ref={provided.innerRef} {...provided.droppableProps}>
                                Columns
                            </ul>
                        );
                    }}
                </Droppable>
              
            </DragDropContext> */}
            <div className="flex flex-col min-h-screen w-full justify-start border-[1px] border-dashed rounded-md border-gray-300">
                <SectionTab name="Todo" circleBorderColor="yellow" />
                <AddButton />
                <div className="flex justify-center flex-col gap-4 items-center px-4">
                    <CreateTaskCard />
                    <TaskCard />
                </div>
            </div>
            <div className="flex flex-col min-h-screen w-full justify-start border-[1px] border-dashed rounded-md border-gray-300">
                <SectionTab name="In Progress" circleBorderColor="blue" />
                <AddButton />
                <div className="flex justify-center flex-col gap-4 items-center px-4">
                    <TaskCard />
                    <TaskCard />
                </div>
            </div>
            <div className="flex flex-col min-h-screen w-full justify-start border-[1px] border-dashed rounded-md border-gray-300">
                <SectionTab name="Completed" circleBorderColor="green" />
                <AddButton />
                <div className="flex justify-center flex-col gap-4 items-center px-4">
                    <TaskCard />
                    <TaskCard />
                </div>
            </div>
        </div>
    );
}
