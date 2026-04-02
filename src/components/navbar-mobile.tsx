'use client';

export default function NavbarMobile() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 100, 
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="w-full fixed flex justify-center py-4 z-50">
      <div className="bg-black flex justify-center py-3 px-8 w-80 rounded-lg" style={{boxShadow: "0 5px 15px rgba(145, 92, 182, .4)"}}>
        <div className="flex space-x-4">
          <button
            className="text-white hover:text-gray-300 hover:bg-gray-800 px-3 py-2 rounded cursor-pointer transition-all duration-300" 
            onClick={() => scrollToSection("home")}
          >
            Home
          </button>
          <button
            className="text-white hover:text-gray-300 hover:bg-gray-800 px-3 py-2 rounded cursor-pointer transition-all duration-300" 
            onClick={() => scrollToSection("about")}
          >
            About
          </button>
          <button
            className="text-white hover:text-gray-300 hover:bg-gray-800 px-3 py-2 rounded cursor-pointer transition-all duration-300" 
            onClick={() => scrollToSection("contact")}
          >
            Contact
          </button>
        </div>
      </div>
    </div>
  );
}
