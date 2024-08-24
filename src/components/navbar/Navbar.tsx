'use client';
import { MenuIcon, SearchIcon } from 'lucide-react';
import React from 'react';
import { Input } from '../ui/input';
import Image from 'next/image'; // Import Image component for displaying images

const Navbar = () => {
    return (
        <nav className=" text-gray-400 flex items-center justify-between px-4 py-4">
            <div className="relative">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <SearchIcon className="w-5 h-5 text-muted-foreground" />
                </div>
                <Input
                    type="text"
                    placeholder="Search tasks"
                    className="block w-96 pl-10 pr-4 py-2 outline-none shadow-sm focus:outline-none focus:border-none text-black "
                />
            </div>
            <div className="flex p-1 border-[1px] gap-2 rounded-full items-center justify-center cursor-pointer">
                <MenuIcon size={20}></MenuIcon>
                <Image
                    src="/images/logo.png" // Replace with the path to your logo image
                    alt="Your Logo"
                    width={35} // Adjust the width as needed
                    height={35} // Adjust the height as needed
                    className="p-1 border-[1px] rounded-full"
                />
            </div>
        </nav>
    );
};

export default Navbar;
