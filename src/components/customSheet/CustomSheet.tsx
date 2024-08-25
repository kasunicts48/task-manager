import React from 'react';
import { Input } from '@/components/ui/input';

import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetDescription,
    SheetFooter,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from '@/components/ui/sheet';
import { Button } from '../ui/button';

interface CustomSheetProps {
    children: React.ReactNode;
}

const CustomSheet = ({ children }: CustomSheetProps) => {
    return (
        <Sheet>
            <SheetTrigger asChild>{children}</SheetTrigger>
            <SheetContent>
                <SheetHeader>
                    <SheetTitle>Edit profile</SheetTitle>
                    <SheetDescription>
                        {`Make changes to your profile here. Click save when you're done.`}
                    </SheetDescription>
                </SheetHeader>
                {/* <div className="grid gap-4 py-4">
                    <div className="grid grid-cols-4 items-center gap-4">
          
                        <Input id="name" value="Pedro Durante" className="col-span-3" />
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">

                        <Input id="username" value="@peduarte" className="col-span-3" />
                    </div>
                </div> */}
                <SheetFooter>
                    <SheetClose asChild>
                        <Button type="submit">Save changes</Button>
                    </SheetClose>
                </SheetFooter>
            </SheetContent>
        </Sheet>
    );
};

export default CustomSheet;
