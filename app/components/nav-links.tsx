'use client';

import {
    CalendarDaysIcon,
    HomeIcon,
    ShoppingBagIcon,
    CreditCardIcon
} from '@heroicons/react/24/outline';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';


const links = [
    { 
        name: 'Home',
        href: '/dashboard',
        icon: HomeIcon 
    },
    {
        name: 'Cards',
        href: '/cards',
        icon: CreditCardIcon,
    },
    { 
        name: 'Transanctions',
        href: '/transactions',
        icon: ShoppingBagIcon
    },
    {
        name: 'Calendar',
        href: '/calendar',
        icon: CalendarDaysIcon
    },
];

export default function NavLinks() {

    const pathname = usePathname();
    
    return (
        <>
            {links.map((link) => {
                const LinkIcon = link.icon;
                return (
                    <Link
                        key={link.name}
                        href={link.href}
                        className={clsx(
                            "flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:text-orange-500 md:flex-none md:justify-start md:p-2 md:px-3",
                            {
                                "text-orange-500": pathname === link.href,
                            },
                        )}
                    >
                        <LinkIcon className="w-6" />
                        <p className="hidden md:block">{link.name}</p>
                    </Link>
                );
            })}
        </>
    );
}
