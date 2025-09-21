import { useState, useEffect, useRef } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import logo from '../assets/Colour_Logo.png';


// Reusable classes
const navLinkClass = ({ isActive }) =>
  `px-5 py-2 text-base font-medium transition-colors relative ${
    isActive ? 'text-blue-500' : 'text-gray-700 hover:text-blue-500 hover:underline'
  }`;

const mobileNavLinkClass =
  'block px-4 py-3 text-base font-medium text-gray-700 hover:text-blue-500 hover:bg-gray-50 transition-colors rounded-lg';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isIndustriesOpen, setIsIndustriesOpen] = useState(false);
  const [isMoreOpen, setIsMoreOpen] = useState(false);
  const [isProductsOpen, setIsProductsOpen] = useState(false);

  const location = useLocation();
  const isDomainPage = location.pathname === '/domain';

  const industriesDropdownRef = useRef(null);
  const moreDropdownRef = useRef(null);
  const productsDropdownRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (industriesDropdownRef.current && !industriesDropdownRef.current.contains(event.target)) {
        setIsIndustriesOpen(false);
      }
      if (moreDropdownRef.current && !moreDropdownRef.current.contains(event.target)) {
        setIsMoreOpen(false);
      }
      if (productsDropdownRef.current && !productsDropdownRef.current.contains(event.target)) {
        setIsProductsOpen(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const toggleMobileMenu = () => {
    setIsOpen(!isOpen);
    if (isOpen) {
      setIsIndustriesOpen(false);
      setIsMoreOpen(false);
      setIsProductsOpen(false);
    }
  };

  const toggleIndustriesDropdown = (e) => {
    e.preventDefault();
    setIsIndustriesOpen(!isIndustriesOpen);
  };

  const toggleMoreDropdown = (e) => {
    e.preventDefault();
    setIsMoreOpen(!isMoreOpen);
  };

  const toggleProductsDropdown = (e) => {
    e.preventDefault();
    setIsProductsOpen(!isProductsOpen);
  };

  const handleProductsClick = (e) => {
    if (location.pathname === '/') {
      e.preventDefault();
      const section = document.getElementById('products');
      if (section) section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    } else {
      window.location.href = '/#products';
    }
  };

  return (
    <header
      className={`fixed top-0 left-1/2 transform -translate-x-1/2 z-50 mt-4 mt-[10px] md:mt-6 `}
      style={{
        width: 'calc(100vw - 20px)', // Increased width for small screens
        maxWidth: '1600px',
        marginLeft: '10px',
        marginRight: '10px',
      }}
    >
      <div
        className={`px-2 md:px-4 h-12 md:h-18 flex items-center justify-between rounded-full shadow-sm mr-3  ${
          isDomainPage ? 'bg-gray-00' : 'bg-white/95 backdrop-blur'
        } shadow-sm`}
      >
        {/* Logo */}
        <NavLink to="/" className="flex items-center flex-shrink-0">
          <img
            src={logo}
            alt="Ceylon Innovation Logo"
            className="w-[90px] h-auto ml-2 md:w-[140px] md:ml-5"
          />
        </NavLink>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center space-x-1 relative">
          {/* Home */}
          <button
            className="px-6 py-2 text-base font-medium text-gray-700 hover:text-blue-500 flex items-center space-x-1 cursor-pointer"
            onClick={() => {
              const section = document.getElementById("Home");
              if (section) {
                section.scrollIntoView({ behavior: "smooth" });
              }
            }}
          >
            <span>Home</span>
          </button>

          {/* Products Dropdown */}
          <button
            className="px-6 py-2 text-base font-medium text-gray-700 hover:text-blue-500 flex items-center space-x-1 cursor-pointer"
            onClick={() => {
              const section = document.getElementById("products");
              if (section) {
                section.scrollIntoView({ behavior: "smooth" });
              }
            }}
          >
            <span>Products</span>
          </button>



          {/* Industries Dropdown */}
          <div className="relative" ref={industriesDropdownRef}>
            <button
              className="px-6 py-2 text-base font-medium text-gray-700 hover:text-blue-500 flex items-center space-x-1 cursor-pointer"
              onClick={toggleIndustriesDropdown}
            >
              <span>Industries</span>
              <ChevronDown
                size={16}
                className={`transform transition-transform ${isIndustriesOpen ? 'rotate-180' : ''}`}
              />
            </button>
            {isIndustriesOpen && (
              <div className="absolute left-0 mt-2 w-64 bg-white/90 backdrop-blur border border-gray-100 rounded-2xl shadow-lg z-50 p-2 cursor-pointer">
                <NavLink
                  to="/domain/healthcare"
                  className="block px-4 py-2 text-base text-gray-800 hover:bg-blue-50 hover:text-blue-600 rounded-lg"
                  onClick={() => setIsIndustriesOpen(false)}
                >
                  • Healthcare
                </NavLink>
                <NavLink
                  to="/domain/hospitality"
                  className="block px-4 py-2 text-base text-gray-800 hover:bg-blue-50 hover:text-blue-600 rounded-lg"
                  onClick={() => setIsIndustriesOpen(false)}
                >
                  • Hospitality
                </NavLink>
                <NavLink
                  to="/domain/retail"
                  className="block px-4 py-2 text-base text-gray-800 hover:bg-blue-50 hover:text-blue-600 rounded-lg"
                  onClick={() => setIsIndustriesOpen(false)}
                >
                  • Retail
                </NavLink>
                <NavLink
                  to="/domain/education"
                  className="block px-4 py-2 text-base text-gray-800 hover:bg-blue-50 hover:text-blue-600 rounded-lg"
                  onClick={() => setIsIndustriesOpen(false)}
                >
                  • Education
                  </NavLink>
                <NavLink
                  to="/domain/finance"
                  className="block px-4 py-2 text-base text-gray-800 hover:bg-blue-50 hover:text-blue-600 rounded-lg"
                  onClick={() => setIsIndustriesOpen(false)}
                >
                  • Finance
                </NavLink>
                <NavLink
                  to="/domain/resturant"
                  className="block px-4 py-2 text-base text-gray-800 hover:bg-blue-50 hover:text-blue-600 rounded-lg"
                  onClick={() => setIsIndustriesOpen(false)}
                >
                  • Resturant 
                </NavLink>
                <NavLink
                  to="/domain/pastry"
                  className="block px-4 py-2 text-base text-gray-800 hover:bg-blue-50 hover:text-blue-600 rounded-lg"
                  onClick={() => setIsIndustriesOpen(false)}
                >
                  • Pastry
                </NavLink>
                <NavLink
                  to="/domain/service"
                  className="block px-4 py-2 text-base text-gray-800 hover:bg-blue-50 hover:text-blue-600 rounded-lg"
                  onClick={() => setIsIndustriesOpen(false)}
                >
                  • Service 
                </NavLink>
                <NavLink
                  to="/domain/other"
                  className="block px-4 py-2 text-base text-gray-800 hover:bg-blue-50 hover:text-blue-600 rounded-lg"
                  onClick={() => setIsIndustriesOpen(false)}
                >
                  • Other
                </NavLink>
                <NavLink
                    to="/domain/other"
                  className="block px-4 py-2 text-base text-gray-800 hover:bg-blue-50 hover:text-blue-600 rounded-lg"
                  onClick={() => setIsIndustriesOpen(false)}
                >

                </NavLink>

              </div>
            )}
          </div>

          {/* About Us */}
          <NavLink to="/about" className={navLinkClass}>
            About Us
          </NavLink>

          {/* More Dropdown */}
          <div className="relative" ref={moreDropdownRef}>
            <button
              className="px-6 py-2 text-base font-medium text-gray-700 hover:text-blue-500 flex items-center space-x-1 cursor-pointer"
              onClick={toggleMoreDropdown}
            >
              <span>More</span>
              <ChevronDown
                size={16}
                className={`transform transition-transform ${isMoreOpen ? 'rotate-180' : ''}`}
              />
            </button>
            {isMoreOpen && (
              <div className="absolute left-0 mt-2 w-56 bg-white/90 backdrop-blur border border-gray-100 rounded-2xl shadow-lg z-50 p-2">
                <NavLink
                  to="/more/careers"
                  className="block px-4 py-2 text-base text-gray-800 hover:bg-blue-50 hover:text-blue-600 rounded-lg"
                  onClick={() => setIsMoreOpen(false)}
                >
                  • Careers
                </NavLink>
                <NavLink
                  to="/more/charity"
                  className="block px-4 py-2 text-base text-gray-800 hover:bg-blue-50 hover:text-blue-600 rounded-lg"
                  onClick={() => setIsMoreOpen(false)}
                >
                  • Charity
                </NavLink>
                <NavLink
                  to="/more/partners"
                  className="block px-4 py-2 text-base text-gray-800 hover:bg-blue-50 hover:text-blue-600 rounded-lg"
                  onClick={() => setIsMoreOpen(false)}
                >
                  • Partners
                </NavLink>
              </div>
            )}
          </div>

          {/* Contact Us Button */}
          <NavLink
            to="/contact"
            className="ml-2 mr-0 inline-flex items-center px-6 py-3  rounded-full text-white bg-gradient-to-r from-sky-400 to-blue-600 shadow ring-2 ring-blue-200 hover:brightness-105"
          >
            Contact us
          </NavLink>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden p-2 md:pr-5 text-gray-700 hover:text-blue-600 hover:bg-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors"
          onClick={toggleMobileMenu}
          aria-label="Toggle navigation menu"
          aria-expanded={isOpen}
        >
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <>
          <div
            className="lg:hidden fixed inset-0 bg-black-0 bg-opacity-25 z-40 transition-opacity"
            onClick={toggleMobileMenu}
          />
          <nav
            className={`lg:hidden absolute top-full left-0 right-0 ${
              isDomainPage ? 'bg-gray-100' : 'bg-white'
            } border border-gray-100 rounded-2xl shadow-xl mx-1 sm:mx-4 mt-2 z-50`} // mx-1 for smaller margin
          >
            <div className="px-2 sm:px-6 py-4 space-y-2">
              {/* Home */}
              <NavLink
                to="/"
                end
                className={({ isActive }) =>
                  `${mobileNavLinkClass} ${isActive ? 'text-black-600 bg-blue-50' : ''}`
                }
                onClick={toggleMobileMenu}
              >
                Home
              </NavLink>

              {/* Products Dropdown */}
              <div ref={productsDropdownRef}>
                <button
                  className="w-full flex justify-between items-center px-4 py-3 text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-lg"
                  onClick={toggleProductsDropdown}
                >
                  <span>Products</span>
                  <ChevronDown
                    size={18}
                    className={`transform transition-transform ${isProductsOpen ? 'rotate-180' : ''}`}
                  />
                </button>
                {isProductsOpen && (
                  <div className="ml-4 mt-1 space-y-1">
                    <NavLink
                      to="/skynetPro"
                      className={mobileNavLinkClass}
                      onClick={toggleMobileMenu}
                    >
                      Skynet Pro
                    </NavLink>
                    <NavLink
                      to="/skyneRetail"
                      className={mobileNavLinkClass}
                      onClick={toggleMobileMenu}
                    >
                      Skynet Retail
                    </NavLink>
                    <NavLink
                      to="/HealthCareIMS"
                      className={mobileNavLinkClass}
                      onClick={toggleMobileMenu}
                    >
                      Healthcare IMS
                    </NavLink>
                    <NavLink
                      to="/StarsIMS"
                      className={mobileNavLinkClass}
                      onClick={toggleMobileMenu}
                    >
                    Stars IMS
                    </NavLink>
                  </div>
                )}
              </div>

              {/* Industries Dropdown */}
              <div ref={industriesDropdownRef}>
                <button
                  className="w-full flex justify-between items-center px-4 py-3 text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-lg"
                  onClick={toggleIndustriesDropdown}
                >
                  <span>Industries</span>
                  <ChevronDown
                    size={18}
                    className={`transform transition-transform ${isIndustriesOpen ? 'rotate-180' : ''}`}
                  />
                </button>
                {isIndustriesOpen && (
                  <div className="ml-4 mt-1 space-y-1">
                    <NavLink
                      to="/domain/healthcare"
                      className={mobileNavLinkClass}
                      onClick={toggleMobileMenu}
                    >
                      Healthcare
                    </NavLink>
                    <NavLink
                      to="/domain/hospitality"
                      className={mobileNavLinkClass}
                      onClick={toggleMobileMenu}
                    >
                      Hotels
                    </NavLink>
                    <NavLink
                      to="/domain/retail"
                      className={mobileNavLinkClass}
                      onClick={toggleMobileMenu}
                    >
                      Retail
                    </NavLink>
                    <NavLink
                      to="/domain/education"
                      className={mobileNavLinkClass}
                      onClick={toggleMobileMenu}
                    >
                      Education
                    </NavLink>
                  </div>
                )}
              </div>

              {/* About Us */}
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  `${mobileNavLinkClass} ${isActive ? 'text-blue-600 bg-blue-50' : ''}`
                }
                onClick={toggleMobileMenu}
              >
                About Us
              </NavLink>

              {/* More Dropdown */}
              <div ref={moreDropdownRef}>
                <button
                  className="w-full flex justify-between items-center px-4 py-3 text-base font-medium text-gray-700 hover:text-blue-500 hover:bg-gray-50 rounded-lg hover:underline"
                  onClick={toggleMoreDropdown}
                >
                  <span>More</span>
                  <ChevronDown
                    size={18}
                    className={`transform transition-transform ${isMoreOpen ? 'rotate-180' : ''}`}
                  />
                </button>
                {isMoreOpen && (
                  <div className="ml-4 mt-1 space-y-1">
                    <NavLink
                      to="/more/careers"
                      className={mobileNavLinkClass}
                      onClick={toggleMobileMenu}
                    >
                      Careers
                    </NavLink>
                    <NavLink
                      to="/more/charity"
                      className={mobileNavLinkClass}
                      onClick={toggleMobileMenu}
                    >
                      Charity
                    </NavLink>
                    <NavLink
                      to="/more/partners"
                      className={mobileNavLinkClass}
                      onClick={toggleMobileMenu}
                    >
                      Partners
                    </NavLink>
                  </div>
                )}
              </div>

              {/* Contact Us */}
              <NavLink
                to="/contact"
                className="block text-center px-4 py-3 text-base font-medium text-white rounded-full bg-gradient-to-r from-sky-400 to-blue-600 shadow ring-2 ring-blue-200"
                onClick={toggleMobileMenu}
              >
                Contact us
              </NavLink>
            </div>
          </nav>
        </>
      )}
    </header>
  );
}