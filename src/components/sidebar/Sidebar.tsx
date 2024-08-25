'use client';
import Image from 'next/image'; // Import Image component for displaying images
import { Button } from '../ui/button';
import Link from 'next/link';
import { Home2, TaskSquare, IconProps, Diagram, LampCharge, NotificationBing, Setting2 } from 'iconsax-react';
import { EnvelopeOpenIcon, HomeIcon } from '@radix-ui/react-icons';
import { FC } from 'react';

interface HomeMenu {
    id: number;
    name: string;
    icon: FC<IconProps>;
    path: string;
    isActive?: boolean;
}

const HomeList: HomeMenu[] = [
    {
        id: 1,
        name: 'Home',
        icon: Home2,
        path: '/home',
    },
    {
        id: 2,
        name: 'Task',
        icon: TaskSquare,
        path: '/task',
        isActive: true,
    },
    {
        id: 3,
        name: 'Report',
        icon: Diagram,
        path: '/report',
    },
    {
        id: 4,
        name: 'Insight',
        icon: LampCharge,
        path: '/insight',
    },
    {
        id: 5,
        name: 'Inbox',
        icon: NotificationBing,
        path: '/inbox',
    },
    {
        id: 6,
        name: 'Settings',
        icon: Setting2,
        path: '/settings',
    },
];

const Sidebar = () => {
    return (
        <div className="flex flex-col w-[250px] min-w-[250px] border-r min-h-screen py-2">
            <div className="flex items-center gap-2 border-b py-2">
                <Image
                    src="/images/logo.png" // Replace with the path to your logo image
                    alt="Your Logo"
                    width={50} // Adjust the width as needed
                    height={50} // Adjust the height as needed
                    className="p-2"
                />
                <p className="font-bold text-lg">Code94 Labs</p>
            </div>

            <div className="py-4">
                {HomeList.map((item, key) => {
                    return (
                        <div className="flex flex-col px-4 py-2" key={key}>
                            <Button
                                className={`flex gap-2 justify-start bg-slate-300-500 ${
                                    item.isActive ? 'text-white' : 'text-black'
                                }  ${item.isActive ? 'bg-blue-500' : 'bg-gray-100'} hover:bg-blue-500 hover:text-white`}
                            >
                                <item.icon className="mr-2 h-4 w-4 " />{' '}
                                <Link className="font-semibold" href={item.path}>
                                    {item.name}
                                </Link>
                            </Button>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default Sidebar;
