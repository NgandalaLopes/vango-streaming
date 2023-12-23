import Link from "next/link"
import Image from "next/image"
import { ThemeToggler } from "./ThemeToggler"
import SearchInput from "./SearchInput"
import GenreDropdown from "./GenreDropdown"

function Header() {
  return (
    <header className="fixed w-full z-20 top-0 flex items-center justify-between p-5 bg-gradient-to-t from-gray-200/0 via-gray-900/25 to-gray-900">
        <Link href="/" className="mr-10"> 
            <Image 
            src="https://raw.githubusercontent.com/NgandalaLopes/media-source/main/vango/logo-minimal-dark.webp" 
            alt="VANGO Logo" 
            width={60}
            height={60}
            className="cursor-pointer invert-0 dark:invert"
            /> 
        </Link>

        <div className="flex space-x-2">
            <GenreDropdown />
            <SearchInput />
            <ThemeToggler />
        </div>
    </header>
  )
}

export default Header