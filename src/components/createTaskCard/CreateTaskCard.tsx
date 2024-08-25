import React from 'react';
import { Card, CardDescription, CardFooter, CardHeader } from '@/components/ui/card';
import { Calendar as CalendarIcon, TickCircle, User } from 'iconsax-react';
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select';
import SelectDropdown from '../ui/custom-dropdown';

import { Calendar } from '@/components/ui/calendar';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Button } from '../ui/button';

import { format } from 'date-fns';

import { cn } from '@/lib/utils';

const options = [
    { value: 'low', label: 'Low' },
    { value: 'medium', label: 'Medium' },
    { value: 'high', label: 'High' },
];

const CreateTaskCard = () => {
    const handleSelectChange = (value: string) => {
        console.log('Selected value:', value);
        // You can also update state or perform other actions here
    };

    const [date, setDate] = React.useState<Date>();
    return (
        <Card className="w-full mx-4">
            <CardHeader>
                <div className="flex items-start gap-2">
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
                    <div className="flex justify-center items-center border-[1px] border-gray-400 border-dashed rounded-full w-[40px] h-[40px]">
                        <User size="32" color="#697689" className="p-1 cursor-pointer" />
                    </div>

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

                <div>
                    <Select>
                        <SelectTrigger className="border-[1px] border-gray-400 border-dashed rounded-lg text-xs text-gray-400 py-1 px-2 cursor-pointer outline-none">
                            <SelectValue placeholder="Set priority" className="outline-none" />
                        </SelectTrigger>
                        <SelectContent className="outline-none">
                            <SelectGroup className="outline-none">
                                <SelectItem
                                    className='border-[1px] border-gray-400 border-dashed rounded-lg text-xs text-gray-400 py-1 px-2 cursor-pointer outline-none"'
                                    value="low"
                                >
                                    Low
                                </SelectItem>
                                <SelectItem
                                    className='border-[1px] border-gray-400 border-dashed rounded-lg text-xs text-gray-400 py-1 px-2 cursor-pointer outline-none"'
                                    value="medium"
                                >
                                    Medium
                                </SelectItem>
                                <SelectItem
                                    className='border-[1px] border-gray-400 border-dashed rounded-lg text-xs text-gray-400 py-1 px-2 cursor-pointer outline-none"'
                                    value="high"
                                >
                                    High
                                </SelectItem>
                            </SelectGroup>
                        </SelectContent>
                    </Select>
                </div>
            </CardFooter>
        </Card>
    );
};

export default CreateTaskCard;
