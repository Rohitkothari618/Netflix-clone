import Image from "next/image";
import { FaSearch, FaBell } from "react-icons/fa";
import { HiBell } from "react-icons/hi";
import Link from "next/link";
import { useEffect, useState } from "react";
function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className={`${isScrolled && "bg-[#141414]"}`}>
      <div className="flex items-center space-x-2 md:space-x-10">
        <Image
          src={"/images/logo.svg"}
          width={100}
          height={50}
          className="cursor-pointer object-contain"
          alt="Netflix-icons"
        />
        <ul className="hidden space-x-4 md:flex">
          <li className="headerLink">Home</li>
          <li className="headerLink">TV Shows</li>
          <li className="headerLink">Movies</li>
          <li className="headerLink">New & Popular</li>
          <li className="headerLink">My List</li>
        </ul>
      </div>

      <div className="flex items-center space-x-4 text-sm font-light">
        <FaSearch className="hidden sm:inline h-6 w-6 " />
        <p className="hidden lg:inline">kids</p>
        <HiBell className="h-6 w-6 hidden sm:inline " />
        <Link href="/account">
          <Image
            src="https://rb.gy/g1pwyx"
            width={32}
            height={32}
            alt="profile"
            className="cursor-pointer rounded "
          />
        </Link>
      </div>
    </header>
  );
}

export default Header;
