'use client'

import Link from 'next/link'
import { useState } from 'react'
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa'

export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false)

    return (
        <header className="border-b bg-gray-300 shadow-md sticky top-0 z-50">
            <div className="container mx-auto flex justify-between items-center py-4 px-6">

                {/* Logo / Brand */}
                <Link href="/" className="text-2xl font-extrabold text-blue-700 md:ml-10">
                    <img className='w-25 h-15 bg-green-900 rounded-lg scale-120 hover:scale-110' src={"/images/Logo.png"}></img>
                </Link>

                {/* Center Navigation */}
                <nav className="hidden md:flex space-x-8 text-black font-medium">
                    <Link href="/" className="hover:text-blue-600 transition">Home</Link>
                    <Link href="/about" className="hover:text-blue-600 transition">About</Link>
                    <Link href="/why-us" className="hover:text-blue-600 transition">Why Us</Link>
                    <Link href="/catalogue" className="hover:text-blue-600 transition">Catalogue</Link>
                    <Link href="/contact" className="hover:text-blue-600 transition">Contact</Link>
                </nav>

                {/* Social Media Icons */}
                <div className="hidden md:flex space-x-4 text-gray-800 md:mr-10 lg:mr-10">
                    <a
                        href="https://www.facebook.com/profile.php?id=61580547964027"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-400 text-black hover:bg-blue-600 hover:text-white hover:scale-110 transition-transform duration-200"
                    >
                        <FaFacebookF/>
                    </a>


                    {/* <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-300 text-bleck hover:bg-gray-600 hover:text-white hover:scale-110 transition-transform duration-200">
                        <FaTwitter />
                    </a> */}

                    <a href="https://www.instagram.com/sarash.packaging.solutions/" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-400 text-bleck hover:bg-pink-600 hover:text-white hover:scale-110 transition-transform duration-200">
                        <FaInstagram />
                    </a>
                </div>

                {/* Mobile Menu Toggle */}
                <button
                    className="md:hidden text-2xl text-gray-700"
                    onClick={() => setMenuOpen(!menuOpen)}
                >
                    ☰
                </button>
            </div>

            {/* Mobile Dropdown Menu */}
            {menuOpen && (
                <div className="md:hidden bg-white shadow-md p-4 space-y-4 text-center">
                    <Link href="/" className="block text-gray-700 hover:text-blue-600">Home</Link>
                    <Link href="/about" className="block text-gray-700 hover:text-blue-600">About</Link>
                    <Link href="/why-us" className="block text-gray-700 hover:text-blue-600">Why Us</Link>
                    <Link href="/catalogue" className="block text-gray-700 hover:text-blue-600">Catalogue</Link>
                    <Link href="/contact" className="block text-gray-700 hover:text-blue-600">Contact</Link>

                    {/* Mobile Social Icons */}
                    <div className="flex justify-center space-x-6 pt-4 border-t">
                        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 text-lg">
                            <FaFacebookF />
                        </a>
                        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 text-lg">
                            <FaTwitter />
                        </a>
                        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-pink-600 text-lg">
                            <FaInstagram />
                        </a>
                    </div>
                </div>
            )}
        </header>
    )
}
