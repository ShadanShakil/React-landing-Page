function Header({ header }) {
  return (
    <header className="text-salmon  body-font">
      <div className=" mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center bg-cream">
        <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
          <img src={header.logo} className="h-12 w-12 rounded-full" alt="" />
          <span className="ml-3 text-xl text-teal">{header.title}</span>
        </a>
        <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400	flex flex-wrap items-center text-base justify-center">
          <a className="mr-5 hover:text-gray-900">Home Page</a>
          <a className="mr-5 hover:text-gray-900">About us</a>
          <a className="mr-5 hover:text-gray-900">Contact us</a>
        </nav>
        <button className="inline-flex items-center bg-salmon text-cream border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">
          Login
          <svg
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            className="w-4 h-4 ml-1"
            viewBox="0 0 24 24"
          >
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </header>
  );
}

export default Header;
