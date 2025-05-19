// Navbar.tsx
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md py-4 px-6 fixed w-full top-0 left-0 z-50">
      <div className="flex items-center justify-between max-w-screen-xl mx-auto">
        <Link href="/" className="text-xl font-bold text-yellow-600 flex items-center space-x-2">
          <img src="/logo.png" alt="Logo" className="h-8" />
          <span>LKP SBMZ</span>
        </Link>
        
        <div className="flex space-x-6">
          <Link href="#home" className="text-gray-700 hover:text-yellow-600">Home</Link>
          <Link href="#program" className="text-gray-700 hover:text-yellow-600">Program</Link>
          <Link href="#tentor" className="text-gray-700 hover:text-yellow-600">Tentor</Link>
          <Link href="#tentang-kami" className="text-gray-700 hover:text-yellow-600">Tentang Kami</Link>
          <Link href="#testimoni" className="text-gray-700 hover:text-yellow-600">Testimoni</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
