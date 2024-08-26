'use client';
import React, { useEffect } from 'react';
import { Card, CardDescription, CardFooter, CardHeader } from '@/components/ui/card';
import { Calendar as CalendarIcon, TickCircle, User, Clock } from 'iconsax-react';

import { Calendar } from '@/components/ui/calendar';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

import { format } from 'date-fns';

import { cn } from '@/lib/utils';
import CustomSheet from '../customSheet/CustomSheet';
import SideDrawer from '../sideDrawer/SideDrawer';

const options = [
    { value: 'low', label: 'Low' },
    { value: 'medium', label: 'Medium' },
    { value: 'high', label: 'High' },
];

const TaskCard = () => {
    const [isOpenSideDrawer, setIsOpenSideDrawer] = React.useState<boolean>(false);

    const handleSelectChange = (value: string) => {
        console.log('Selected value:', value);
        // You can also update state or perform other actions here
    };
    const openSheet = (value: boolean) => {
        setIsOpenSideDrawer(value);
        // You can also update state or perform other actions here
    };

    useEffect(() => {
        setIsOpenSideDrawer(isOpenSideDrawer);
    }, [isOpenSideDrawer]);

    const [date, setDate] = React.useState<Date>();
    return (
        <Card className="w-full h-full mx-4 ">
            <SideDrawer isOpenSideDrawer={isOpenSideDrawer} setIsOpenSideDrawer={setIsOpenSideDrawer} />
            <CardHeader
                onClick={() => {
                    openSheet(true);
                }}
            >
                <div className="flex items-start gap-2 cursor-pointer ">
                    <TickCircle size="24" color="#697689" />
                    <div className="w-full">
                        <p className="w-full font-bold">
                            Project setup and initial configurations, Project setup and initial configurations
                        </p>
                    </div>
                </div>
            </CardHeader>
            <hr className="mx-4" />
            <CardDescription className="px-6 py-3">
                Pellentesque varius ante posuere risus pellentesque mollis. Curabitur ultricee...
            </CardDescription>
            <CardFooter className="flex justify-between items-center">
                <div className="flex justify-start gap-2">
                    {/* <div className="flex justify-center items-center border-[1px] border-gray-400 border-dashed rounded-full w-[40px] h-[40px]">
                        
                    </div> */}
                    <Avatar className="cursor-pointer">
                        <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                        <AvatarFallback>CN</AvatarFallback>
                    </Avatar>

                    <div className="flex justify-center items-center">
                        <Popover>
                            <PopoverTrigger asChild>
                                <div
                                    className={cn(
                                        !date
                                            ? 'flex justify-center items-center border-[1px] border-gray-400 border-dashed rounded-full w-[40px] h-[40px]'
                                            : 'bg-blue-200 bg-opacity-50 rounded-lg text-sm px-2 py-1 text-blue-700 font-medium',
                                    )}
                                >
                                    {date ? (
                                        format(date, 'MMM d')
                                    ) : (
                                        <CalendarIcon size="32" color="#697689" className="p-1 cursor-pointer" />
                                    )}
                                </div>
                            </PopoverTrigger>
                            <PopoverContent className="w-auto p-0" align="start">
                                <Calendar mode="single" selected={date} onSelect={setDate} initialFocus />
                            </PopoverContent>
                        </Popover>
                    </div>
                </div>

                <div className="flex items-center bg-red-200 bg-opacity-50 rounded-lg text-sm px-2 py-1 text-red-700 font-medium gap-2">
                    <div className="w-[10px] h-[10px] rounded-full bg-red-700 border-[1px] border-red-700"> </div> High
                </div>
            </CardFooter>
            <hr className="mx-4" />
            <CardDescription className="flex gap-2 px-6 py-4 items-center text-xs font-medium">
                <Clock size="16" color="#555555" />
                Should’ve completed 4 days ago
            </CardDescription>
        </Card>
    );
};

export default TaskCard;
