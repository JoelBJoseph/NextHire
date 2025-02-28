"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/theme-toggle"
import { MainNav } from "@/components/main-nav"
import Image from "next/image"

export function Header() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
    const pathname = usePathname()

    const closeMenu = () => setMobileMenuOpen(false)

    // Close mobile menu when route changes
    useEffect(() => {
        setMobileMenuOpen(false)
    }, [])

    const isAuthPage = pathname === "/login" || pathname === "/register"

    return (
        <header className="sticky top-0 z-50 w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
                <div className="flex lg:flex-1">
                    <Link href="/" className="-m-1.5 p-1.5">
                        <span className="sr-only">NextHire</span>
                        <Image
                            src="/college-placement-logo.png"
                            alt="NextHire"
                            width={120}
                            height={40}
                            className="h-8 w-auto"
                            priority
                        />
                    </Link>
                </div>

                {!isAuthPage && (
                    <>
                        {/* Centered MainNav */}
                        <div className="hidden lg:flex lg:justify-center lg:w-full">
                            <MainNav closeMenu={closeMenu} />
                        </div>

                        <div className="hidden lg:flex lg:flex-1 lg:justify-end lg:gap-x-6">
                            <Link href="/login">
                                <Button variant="ghost">Log in</Button>
                            </Link>
                            <Link href="/register">
                                <Button>Sign up</Button>
                            </Link>
                            <ThemeToggle />
                        </div>

                        {/* Mobile Menu Button */}
                        <div className="flex lg:hidden">
                            <button
                                type="button"
                                className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700 dark:text-gray-200"
                                onClick={() => setMobileMenuOpen(true)}
                            >
                                <span className="sr-only">Open main menu</span>
                                <svg
                                    className="h-6 w-6"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth="1.5"
                                    stroke="currentColor"
                                    aria-hidden="true"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                                </svg>
                            </button>
                        </div>
                    </>
                )}

                {isAuthPage && (
                    <div className="flex flex-1 justify-end">
                        <ThemeToggle />
                    </div>
                )}
            </nav>

            {/* Mobile Menu */}
            <AnimatePresence>
                {mobileMenuOpen && !isAuthPage && (
                    <motion.div
                        className="lg:hidden fixed inset-0 z-50"
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.2 }}
                    >
                        {/* Black overlay */}
                        <div className="absolute inset-0 bg-black/50 backdrop-blur-sm"></div>

                        {/* Mobile menu */}
                        <div className="relative bg-background px-6 py-6 shadow-xl">
                            <div className="flex items-center justify-between">
                                <Link href="/" className="-m-1.5 p-1.5">
                                    <span className="sr-only">NextHire</span>
                                    <Image
                                        src="/college-placement-logo.png"
                                        alt="NextHire"
                                        width={120}
                                        height={40}
                                        className="h-8 w-auto"
                                        priority
                                    />
                                </Link>
                                <button
                                    type="button"
                                    className="-m-2.5 rounded-md p-2.5 text-gray-700 dark:text-gray-200"
                                    onClick={() => setMobileMenuOpen(false)}
                                >
                                    <span className="sr-only">Close menu</span>
                                    <svg
                                        className="h-6 w-6"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth="1.5"
                                        stroke="currentColor"
                                        aria-hidden="true"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                </button>
                            </div>
                            <div className="mt-6 flow-root">
                                <div className="space-y-2 py-6">
                                    <MainNav mobile closeMenu={closeMenu} />
                                </div>
                                <div className="py-6">
                                    <Link
                                        href="/login"
                                        className="block rounded-lg py-2.5 px-3 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50 dark:text-gray-100 dark:hover:bg-gray-800"
                                    >
                                        Log in
                                    </Link>
                                    <Link
                                        href="/register"
                                        className="block rounded-lg py-2.5 px-3 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50 dark:text-gray-100 dark:hover:bg-gray-800"
                                    >
                                        Sign up
                                    </Link>
                                </div>
                                <div className="py-6">
                                    <ThemeToggle />
                                </div>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    )
}

