"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import Image from "next/image";

const navItems = [
    { href: "/", label: "Home" },
    { href: "/offers", label: "Job Offers" },
    { href: "/contact", label: "Contact" },
]

interface MainNavProps {
    mobile?: boolean
    closeMenu?: () => void
}

export function MainNav({ mobile = false, closeMenu }: MainNavProps) {
    const pathname = usePathname()

    const navClasses = mobile ? "flex flex-col space-y-2" : "flex items-center justify-center space-x-6"

    const linkClasses = (href: string) =>
        cn(
            "text-sm font-semibold leading-6 transition-colors",
            pathname === href
                ? "text-blue-600 dark:text-blue-400"
                : "text-gray-700 hover:text-blue-600 dark:text-gray-200 dark:hover:text-blue-400",
            mobile && "block rounded-lg py-2.5 px-3",
        )

    return (
        <nav className={navClasses}>
            {/*<Link href="/" className="-m-1.5 p-1.5">*/}
            {/*    <span className="sr-only">NextHire</span>*/}
            {/*    <Image*/}
            {/*        src="/college-placement-logo.png"*/}
            {/*        alt="NextHire"*/}
            {/*        width={120}*/}
            {/*        height={40}*/}
            {/*        className="h-8 w-auto"*/}
            {/*        priority*/}
            {/*    />*/}
            {/*</Link>*/}
            {navItems.map((item) => (
                <Link key={item.href} href={item.href} className={linkClasses(item.href)} onClick={closeMenu}>
                    {item.label}
                </Link>
            ))}
        </nav>
    )
}

