import { ShoppingCart } from "lucide-react";

const Navbar = () => {
  const navItems = [
    { id: 1, name: "Products" },
    { id: 2, name: "Features" },
    { id: 3, name: "Pricing" },
    { id: 4, name: "Testimonials" },
    { id: 5, name: "FAQs" },
  ];

  const navClass =
    "text-sm lg:text-base xl:text-lg font-semibold text-gray-700 hover:text-primary transition-colors duration-200 relative after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-0.5 after:bg-primary after:transition-all after:duration-300 hover:after:w-full";

  return (
    <div className="navbar bg-base-100 shadow-sm px-4 lg:px-8 xl:px-16 2xl:px-10 min-h-16 lg:min-h-18 xl:min-h-20 backdrop-blur-md">
      
      {/* Container */}
      <div className="container mx-auto flex items-center justify-between">

        {/* LEFT */}
        <div className="navbar-start">
          {/* Mobile Menu */}
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>

            {/* Dropdown */}
            <ul
              tabIndex={0}
              className="dropdown-content bg-base-100 rounded-box mt-3 w-72 p-4 shadow space-y-3"
            >
              {navItems.map((item) => (
                <li key={item.id}>
                  <a href="#" className="font-medium btn w-full btn-ghost">
                    {item.name}
                  </a>
                </li>
              ))}

              {/* Divider */}
              <div className="border-t my-2 border-gray-200"></div>

              {/* Buttons Row */}
              <li>
                <div className="flex gap-2">
                  {/* Login */}
                  <a
                    className="btn flex-1 text-center font-semibold py-2 rounded-full 
                    border border-[#4F39F6] text-[#4F39F6]
                    hover:bg-linear-to-r hover:from-[#4F39F6] hover:to-[#9514FA] 
                    hover:text-white transition-all duration-300"
                  >
                    Login
                  </a>

                  {/* Get Started */}
                  <a
                    className="btn flex-1 text-center font-semibold py-2 rounded-full text-white
                    bg-linear-to-r from-[#4F39F6] to-[#9514FA]
                    hover:bg-none hover:text-[#4F39F6] hover:border hover:border-[#4F39F6]
                    transition-all duration-300"
                  >
                    Get Started
                  </a>
                </div>
              </li>
            </ul>
          </div>

          {/* Logo */}
          <a className="text-2xl lg:text-3xl xl:text-4xl bg-linear-to-r from-[#4F39F6] to-[#9514FA] bg-clip-text text-transparent font-extrabold">
            DigiTools
          </a>
        </div>

        {/* CENTER (Desktop Nav) */}
        <div className="navbar-center hidden lg:flex">
          <ul className="flex flex-row gap-6 lg:gap-8 xl:gap-10 2xl:gap-12">
            {navItems.map((item) => (
              <li key={item.id}>
                <a href="#" className={navClass}>
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* RIGHT */}
        <div className="navbar-end gap-3 lg:gap-4">
          <ShoppingCart  className="lg:hidden xl:flex"/>

          {/* Login */}
          <a
            className="btn text-sm lg:text-base xl:text-lg font-semibold 
            py-3 lg:py-4 xl:py-5 px-4 lg:px-5 xl:px-6 
            rounded-full border border-[#4F39F6] text-[#4F39F6]
            hover:bg-linear-to-r hover:from-[#4F39F6] hover:to-[#9514FA] 
            hover:text-white hover:border-transparent
            transition-all duration-300 hidden md:flex"
          >
            Login
          </a>

          {/* Get Started */}
          <a
            className="btn text-white text-sm lg:text-base xl:text-lg font-semibold 
            py-3 lg:py-4 xl:py-5 px-4 lg:px-5 xl:px-6 
            rounded-full
            bg-linear-to-r from-[#4F39F6] to-[#9514FA]
            hover:bg-none hover:bg-white hover:text-[#4F39F6] hover:border hover:border-[#4F39F6]
            transition-all duration-300 hidden md:flex"
          >
            Get Started
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;