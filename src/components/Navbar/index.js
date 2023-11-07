'use client'
import Link from "next/link";
import { useState } from "react";
import NavbarItem from "./NavbarItem";
import { MdAccountCircle, MdContacts, MdOutlineReorder, MdSettings, MdSpaceDashboard } from 'react-icons/md'


export default function Navbar() {
    const [openMobile, setOpenMobile] = useState(false)
    return (
        <nav className="bg-transparent border-gray-200 
                        dark:bg-transparent">
            <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-2">
                <button
                    onClick={() => setOpenMobile(!openMobile)}
                    data-collapse-toggle="navbar-default"
                    type="button"
                    class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg 
                        md:hidden 
                        hover:bg-gray-100 
                        focus:outline-none focus:ring-2 focus:ring-gray-200 
                        dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                    aria-controls="navbar-default"
                    aria-expanded="false"
                >
                    <span class="sr-only">Open main menu</span>
                    <MdOutlineReorder fontSize={20} />
                </button>
                <div class="hidden w-full md:block md:w-auto" id="navbar-default">
                    <ul
                        class="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 
                        md:flex-row md:mt-0 md:border-0 md:bg-white 
                        dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700"
                    >
                        <NavbarItem image={<MdAccountCircle fontSize={20} className="mr-1" />}>
                            Profile
                        </NavbarItem>
                        <NavbarItem image={<MdSpaceDashboard fontSize={20} className="mr-1" />}>
                            Dashboard
                        </NavbarItem>
                        <NavbarItem image={<MdSettings fontSize={20} className="mr-1" />}>
                            Settings
                        </NavbarItem>
                        <NavbarItem image={<MdContacts fontSize={20} className="mr-1" />}>
                            Contacts
                        </NavbarItem>
                    </ul>
                </div>
            </div>
            {
                openMobile && (
                    <div className="absolute top-0 right-2 z-40 bg-[#000000]">
                        <ul
                            class="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 
                            md:flex-row md:mt-0 md:border-0 md:bg-white 
                            dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700"
                        >
                            <NavbarItem image={<MdAccountCircle fontSize={20} className="mr-1" />}>
                                Profile
                            </NavbarItem>
                            <NavbarItem image={<MdSpaceDashboard fontSize={20} className="mr-1" />}>
                                Dashboard
                            </NavbarItem>
                            <NavbarItem image={<MdSettings fontSize={20} className="mr-1" />}>
                                Dashboard
                            </NavbarItem>
                            <NavbarItem image={<MdContacts fontSize={20} className="mr-1" />}>
                                Contacts
                            </NavbarItem>
                        </ul>
                    </div>
                )
            }
        </nav>
    )
}