const NavbarLine = () => {
  return (
    <nav className="flex justify-center items-center w-full fixed top-0 px-10 bg-pink-300 py-3 mx-auto">
      <div className="flex items-center flex-shrink-0 mr-6">
        <a href="/" className="p-1 font-bold text-pink-900 text-2xl tracking-tight">
          CatchyMew Beauty
        </a>
      </div>
      <div className="text-sm w-full flex justify-end items-center">
        <a
          href="/"
          className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-gray-200 mr-4"
        >
          Home
        </a>
        <a
          href="/products"
          className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-gray-200 mr-4"
        >
          Product
        </a>
        <a
          href="/about-us"
          className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-gray-200 mr-4"
        >
          About Us
        </a>
        <a
          href="our-teams"
          className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-gray-200 mr-4"
        >
          Our Teams
        </a>
      </div>
    </nav>
  );
};

export default NavbarLine;
