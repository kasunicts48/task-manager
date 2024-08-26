'use client';

import { useEffect, useState } from 'react';
import { Dialog, DialogPanel, DialogTitle, TransitionChild } from '@headlessui/react';
import { ArrowRight, Trash, TickCircle, DocumentText1, Calendar as CalendarIcon, User, Flag, Add } from 'iconsax-react';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Calendar } from '@/components/ui/calendar';
import { format } from 'date-fns';
import { cn } from '@/lib/utils';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import DeleteConfirmDialog from '../deleteConfirmDialog/DeleteConfirmDialog';

interface SideDrawerProps {
    isOpenSideDrawer: boolean;
    setIsOpenSideDrawer: (value: boolean) => void;
}
export default function SideDrawer({ isOpenSideDrawer, setIsOpenSideDrawer }: SideDrawerProps) {
    const [date, setDate] = useState<Date | undefined>();
    const [isOpenDeleteConfirmDialog, setIsOpenDeleteConfirmDialog] = useState<boolean>(false);

    const handleDeleteConfirmDialog = (value: boolean) => {
        setIsOpenSideDrawer(value);
        console.log('handleDeleteConfirmDialog', value);
        // You can also update state or perform other actions here
    };

    useEffect(() => {
        setIsOpenDeleteConfirmDialog(isOpenDeleteConfirmDialog);
        console.log('useEffect');
    }, [isOpenDeleteConfirmDialog]);

    return (
        <>
            <Dialog open={isOpenSideDrawer} onClose={setIsOpenSideDrawer} className="relative z-10">
                <DeleteConfirmDialog
                    isOpenDeleteConfirmDialog={isOpenDeleteConfirmDialog}
                    setIsOpenDeleteConfirmDialog={setIsOpenDeleteConfirmDialog}
                />
                <div className="fixed inset-0 overflow-hidden">
                    <div className="absolute inset-0 overflow-hidden">
                        <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
                            <DialogPanel
                                transition
                                className="pointer-events-auto relative w-screen max-w-md transform transition duration-500 ease-in-out data-[closed]:translate-x-full sm:duration-700"
                            >
                                <TransitionChild>
                                    <div className="absolute left-0 top-0 -ml-8 flex pr-2 pt-4 duration-500 ease-in-out data-[closed]:opacity-0 sm:-ml-10 sm:pr-4"></div>
                                </TransitionChild>
                                <div className="flex h-full flex-col overflow-y-scroll bg-white py-6 shadow-xl">
                                    <div className="flex px-4 sm:px-6 justify-between items-center">
                                        <DialogTitle className="flex gap-2 text-base font-medium  text-gray-900 items-center">
                                            <TickCircle size="22" color="#555555" className="cursor-pointer" />
                                            Mark Complete
                                        </DialogTitle>
                                        <div className="flex justify-center gap-4">
                                            <button
                                                type="button"
                                                onClick={() => {
                                                    handleDeleteConfirmDialog(true);

                                                    // setIsOpenSideDrawer(false);
                                                }}
                                                className="relative rounded-md text-gray-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-white"
                                            >
                                                <Trash size="22" color="#555555" />
                                            </button>
                                            <button
                                                type="button"
                                                onClick={() => setIsOpenSideDrawer(false)}
                                                className="relative rounded-md text-gray-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-white"
                                            >
                                                <ArrowRight size="22" color="#555555" />
                                            </button>
                                        </div>
                                    </div>
                                    <div className="relative mt-6 flex-1 px-4 sm:px-6">
                                        <div className="flex p-2  border-[1px] border-solid border-gray-100 rounded-md font-bold text-3xl">
                                            Project setup and initial configurations
                                        </div>
                                        <div className="grid grid-cols-2 p-2 mt-6 gap-5">
                                            <div className="flex gap-2 text-gray-500 items-center">
                                                <div
                                                    className={`border-gray-500 rounded-full border-[1px] w-4 h-4`}
                                                ></div>
                                                Status
                                            </div>
                                            <div className="flex gap-2 font-bold items-center">
                                                <div
                                                    className={`border-yellow-500 rounded-full border-[1px] w-4 h-4`}
                                                ></div>
                                                Todo
                                            </div>
                                            <div className="flex gap-2 text-gray-500 items-center">
                                                <CalendarIcon size="20" color="#697689" />
                                                Due Date
                                            </div>
                                            <div className="flex gap-2 font-bold items-center text-gray-500">
                                                <Popover>
                                                    <PopoverTrigger asChild>
                                                        <div
                                                            className={cn(
                                                                !date
                                                                    ? 'flex justify-center items-center border-[1px] border-gray-400 border-dashed rounded-full w-[25px] h-[25px]'
                                                                    : 'rounded-lg text-sm px-2 py-1 text-blue-700 font-bold',
                                                            )}
                                                        >
                                                            {date ? (
                                                                <div> {format(date, 'd MMMM y')} </div>
                                                            ) : (
                                                                <CalendarIcon
                                                                    size="20"
                                                                    color="#697689"
                                                                    className="p-1 cursor-pointer"
                                                                />
                                                            )}
                                                        </div>
                                                    </PopoverTrigger>
                                                    <PopoverContent className="w-auto p-0" align="start">
                                                        <Calendar
                                                            mode="single"
                                                            selected={date}
                                                            onSelect={setDate}
                                                            initialFocus
                                                        />
                                                    </PopoverContent>
                                                </Popover>
                                                {date ? (
                                                    <Add
                                                        className="rotate-45 cursor-pointer"
                                                        size="22"
                                                        color="#697689"
                                                        onClick={() => {
                                                            setDate(undefined);
                                                        }}
                                                    />
                                                ) : (
                                                    `No due date`
                                                )}
                                            </div>
                                            <div className="flex gap-2 text-gray-500 items-center">
                                                <User size="20" color="#697689" />
                                                Assignee
                                            </div>
                                            <div className="flex gap-2 font-bold items-center">
                                                <Avatar className="cursor-pointer w-[25px] h-[25px]">
                                                    <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                                                    <AvatarFallback>CN</AvatarFallback>
                                                </Avatar>
                                                John Taylor{' '}
                                                <Add className="rotate-45 cursor-pointer" size="22" color="#697689" />
                                            </div>
                                            <div className="flex gap-2 text-gray-500 items-center">
                                                <Flag size="20" color="#697689" />
                                                Priority
                                            </div>
                                            <div className="flex gap-2 font-bold items-center">
                                                High{' '}
                                                <Add className="rotate-45 cursor-pointer" size="22" color="#697689" />
                                            </div>
                                        </div>
                                        <div className="flex flex-col text-gray-500 p-2 mt-6">
                                            <div className="flex items-center gap-2">
                                                <DocumentText1 size="20" color="#697689" /> Description
                                            </div>
                                            <div className="lex p-2  border-[1px] border-solid border-gray-100 rounded-md text-black mt-4">
                                                This task involves setting up the project environment and configuring
                                                all necessary tools and frameworks to ensure smooth development. The
                                                steps include: Repository Setup Environment Setup Dependency
                                                Installation Configuration Management Database Setup Version Control
                                                Integration Testing and Validation Documentation
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </DialogPanel>
                        </div>
                    </div>
                </div>
            </Dialog>
        </>
    );
}
