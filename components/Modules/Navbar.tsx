import Link from "next/link";
import { useState } from "react";
import { MenuIcon } from "@heroicons/react/outline";

interface NavItemProps {
  href: string;
  text: string;
  className?: string;
}

const NavItem: React.FC<NavItemProps> = ({ href, text, className }) => {
  return (
    <Link
      className={`text-gray-300 hover:bg-[#594D6F] px-3 py-2 rounded-md text-sm font-medium ${className}`}
      href={href}
    >
      {text}
    </Link>
  );
};

interface NavbarProps {
  logoText: string;
  navItems: NavItemProps[];
  getStartedButton: {
    text: string;
    href: string;
    className?: string;
  };
}

const Navbar: React.FC<NavbarProps> = ({
  logoText,
  navItems,
  getStartedButton,
}) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="border-b-2 border-[#594D6F]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-5">
            <Link
              className="text-white font-bold text-xl tracking-wide"
              href="/"
            >
              {logoText}
            </Link>
          </div>
          <div className="hidden sm:flex sm:space-x-4">
            {navItems.map((item, index) => (
              <NavItem
                key={index}
                href={item.href}
                text={item.text}
                className={item.className}
              />
            ))}
            <Link
              className={`bg-[#754ac3] hover:bg-[#594D6F] text-white px-4 py-2 rounded-md text-sm font-medium`}
              href={getStartedButton.href}
            >
              {getStartedButton.text}
            </Link>
          </div>
          <div className="sm:hidden">
            <button
              className="text-gray-300 hover:bg-[#594D6F] px-3 py-2 rounded-md text-sm font-medium flex"
              onClick={toggleMobileMenu}
            >
              <MenuIcon className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>
      {isMobileMenuOpen && (
        <div className="sm:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navItems.map((item, index) => (
              <NavItem
                key={index}
                href={item.href}
                text={item.text}
                className={`text-gray-300 hover:bg-[#594D6F] block px-3 py-2 rounded-md text-base font-medium ${item.className}`}
              />
            ))}
            <Link
              className={`bg-[#754ac3] hover:bg-[#594D6F] block text-white px-4 py-2 rounded-md text-sm font-mediumm`}
              href={getStartedButton.href}
            >
              {getStartedButton.text}
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
