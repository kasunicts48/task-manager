import React from 'react';
import { Card, CardDescription, CardFooter, CardHeader } from '@/components/ui/card';
import { Calendar, TickCircle, User } from 'iconsax-react';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
const CreateTaskCard = () => {
    return (
        <Card className="w-full mx-4">
            <CardHeader>
                <div className="flex items-center gap-2">
                    <TickCircle size="24" color="#697689" />
                    <div className="w-full">
                        <input
                            type="text"
                            name="task"
                            id=""
                            placeholder="Write a task name"
                            className=" outline-none w-full font-bold placeholder:font-normal"
                        />
                    </div>
                </div>
            </CardHeader>
            <hr className="mx-4" />
            <CardDescription className="px-6 py-3">lorem</CardDescription>
            <CardFooter className="flex justify-between items-center">
                <div className="flex justify-start gap-2">
                    <div className="border-[1px] border-gray-400 border-dashed rounded-full ">
                        <User size="32" color="#697689" className="p-2 cursor-pointer" />
                    </div>
                    <div className="border-[1px] border-gray-400 border-dashed rounded-full ">
                        <Calendar size="32" color="#697689" className="p-2 cursor-pointer" />
                    </div>
                </div>
                <div className="border-[1px] border-gray-400 border-dashed rounded-lg text-xs text-gray-400 py-1 px-2 cursor-pointer">
                    Set priority
                </div>
            </CardFooter>
        </Card>
    );
};

export default CreateTaskCard;
