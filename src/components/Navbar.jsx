import React from "react";
import { FaLinkedin, FaOrcid } from "react-icons/fa";
import { FaGoogleScholar } from "react-icons/fa6";

export default function Navbar() {
    return (
        <nav className="font-poppins text-sm bg-white sticky top-0 z-50 border-b-1 border-gray-300 tracking-widest">
            <div className="px-4 py-3 flex justify-between items-center">
                <div className="flex items-center space-x-8">
                    <div className="flex space-x-12">
                        <a href="#home" className="hover:text-red-500 transition">Home</a>
                        <a href="#research" className="hover:text-red-500 transition">Research</a>
                        <a href="#talks" className="hover:text-red-500 transition">Conferences/Talks</a>
                    </div>
                </div>
                <div className="flex space-x-4">
                    <a href="https://www.linkedin.com/in/aline-banboukian/" target="_blank" rel="noopener noreferrer" className="hover:text-red-500 transition">
                        <FaLinkedin size={22} />
                    </a>
                    <a href="https://scholar.google.com/citations?user=zihxnFYAAAAJ&hl=en&oi=ao" target="_blank" rel="noopener noreferrer" className="hover:text-red-500 transition">
                        <FaGoogleScholar size={22} />
                    </a>
                    <a href="https://orcid.org/0000-0003-1895-9052" target="_blank" rel="noopener noreferrer" className="hover:text-red-500 transition">
                        <FaOrcid size={22} />
                    </a>
                    {/*<a href="https://github.com/abanboukian" target="_blank" rel="noopener noreferrer" className="hover:text-gray-700 transition">*/}
                    {/*    <FaGithub size={22} />*/}
                    {/*</a>*/}
                </div>

            </div>
        </nav>
    );
}