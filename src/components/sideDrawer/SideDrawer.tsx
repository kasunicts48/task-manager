'use client';

import { useEffect, useState } from 'react';
import { Dialog, DialogBackdrop, DialogPanel, DialogTitle, TransitionChild } from '@headlessui/react';

import { ArrowRight } from 'iconsax-react';

interface SideDrawerProps {
    isOpen: boolean;
    setIsOpen: (value: boolean) => void;
    
}
export default function SideDrawer({ isOpen, setIsOpen }: SideDrawerProps) {
    return (
        <Dialog open={isOpen} onClose={setIsOpen} className="relative z-10">
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
                                <div className="flex px-4 sm:px-6 justify-between">
                                    <DialogTitle className="text-base font-semibold leading-6 text-gray-900">
                                        Panel title
                                    </DialogTitle>
                                    <button
                                        type="button"
                                        onClick={() => setIsOpen(false)}
                                        className="relative rounded-md text-gray-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-white"
                                    >
                                        <span className="absolute -inset-2.5" />
                                        <span className="sr-only">Close panel</span>
                                        <ArrowRight size="32" color="#555555" />
                                    </button>
                                </div>
                                <div className="relative mt-6 flex-1 px-4 sm:px-6">
                                    <div>Headding</div>
                                </div>
                            </div>
                        </DialogPanel>
                    </div>
                </div>
            </div>
        </Dialog>
    );
}
