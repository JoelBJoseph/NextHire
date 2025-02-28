"use client"

import type React from "react"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { usePathname } from "next/navigation"
import { Home, Settings, HelpCircle, LogOut } from "lucide-react"
import { useEffect } from "react"

export default function AdminLayout({
                                      children,
                                    }: {
  children: React.ReactNode
}) {
  const pathname = usePathname()

  // Hide the main header when in admin pages
  useEffect(() => {
    const header = document.querySelector("header")
    const footer = document.querySelector("footer")
    if (header) header.style.display = "none"
    if (footer) footer.style.display = "none"

    return () => {
      if (header) header.style.display = ""
      if (footer) footer.style.display = ""
    }
  }, [])

  const navItems = [
    { href: "/admin/home", label: "Dashboard", icon: Home },
    { href: "/admin/edit", label: "Settings", icon: Settings },
    { href: "/admin/help", label: "Support", icon: HelpCircle },
  ]

  return (
      <div className="flex h-screen bg-gray-100 dark:bg-gray-900">
        {/* Sidebar */}
        <div className="hidden md:flex md:w-64 md:flex-col">
          <div className="flex flex-col flex-grow pt-5 overflow-y-auto bg-white dark:bg-gray-800 border-r">
            <div className="flex items-center flex-shrink-0 px-4 mb-8">
              <Link href="/admin/home" className="flex items-center">
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
            <div className="flex-grow flex flex-col">
              <nav className="flex-1 px-2 pb-4 space-y-1">
                {navItems.map((item) => {
                  const Icon = item.icon
                  return (
                      <Link
                          key={item.href}
                          href={item.href}
                          className={cn(
                              "group flex items-center px-4 py-2 text-sm font-medium rounded-md transition-colors",
                              pathname === item.href
                                  ? "bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-200"
                                  : "text-gray-600 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700",
                          )}
                      >
                        <Icon className="mr-3 h-5 w-5" />
                        {item.label}
                      </Link>
                  )
                })}
              </nav>
              <div className="flex-shrink-0 flex border-t border-gray-200 dark:border-gray-700 p-4">
                <Link href="/" className="w-full">
                  <Button variant="outline" className="w-full justify-start" size="sm">
                    <LogOut className="mr-2 h-4 w-4" />
                    Exit Admin
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile header */}
        <div className="md:hidden fixed top-0 z-50 w-full bg-white dark:bg-gray-800 border-b">
          <div className="flex items-center justify-between h-16 px-4">
            <Link href="/admin/home" className="flex items-center">
              <Image
                  src="/college-placement-logo.png"
                  alt="NextHire"
                  width={120}
                  height={40}
                  className="h-8 w-auto"
                  priority
              />
            </Link>
            <Link href="/">
              <Button variant="outline" size="sm">
                <LogOut className="h-4 w-4" />
                <span className="sr-only">Exit Admin</span>
              </Button>
            </Link>
          </div>
          <nav className="flex overflow-x-auto border-t border-gray-200 dark:border-gray-700">
            {navItems.map((item) => {
              const Icon = item.icon
              return (
                  <Link
                      key={item.href}
                      href={item.href}
                      className={cn(
                          "flex-1 flex items-center justify-center px-4 py-2 text-sm font-medium whitespace-nowrap",
                          pathname === item.href
                              ? "border-b-2 border-blue-500 text-blue-600 dark:border-blue-400 dark:text-blue-400"
                              : "text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-gray-100",
                      )}
                  >
                    <Icon className="mr-2 h-4 w-4" />
                    {item.label}
                  </Link>
              )
            })}
          </nav>
        </div>

        {/* Main content */}
        <div className="flex flex-col flex-1 overflow-hidden">
          <main className="flex-1 relative overflow-y-auto focus:outline-none md:p-8 p-4 pt-20 md:pt-8">{children}</main>
        </div>
      </div>
  )
}

