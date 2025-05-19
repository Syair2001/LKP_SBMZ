// HeroSection.tsx
import { Badge } from "@/components/ui/badge";

const HeroSection = () => {
  return (
    <section id="hero" className="relative w-full h-[80vh] sm:h-[90vh] md:h-[80vh] bg-gradient-to-r from-yellow-500 to-yellow-300 text-white py-20 px-4 text-center shadow-lg animate__animated animate__fadeIn">
      <img
        src="/foto1.jpg"
        alt="Hero Image"
        className="absolute top-0 left-0 w-full h-full object-cover opacity-30"
      />
      <div className="relative z-10 flex flex-col justify-center items-center h-full space-y-6">
        {/* Badge Bimbel #1 */}
        <Badge className="absolute top-5 right-5 bg-yellow-600 text-white px-4 py-2 rounded-full shadow-md text-sm font-semibold">
          Bimbel #1 di Barru
        </Badge>

        <h1 className="text-4xl md:text-6xl font-bold mb-4">Selamat Datang di LKP SBMZ</h1>
        <p className="text-xl mb-6">Mengembangkan kemampuan dengan pendidikan terbaik di Barru</p>
        
        {/* Tombol WhatsApp */}
        <a
          href="https://wa.me/6281355356155?text=Assalamualaikum%20Wr.S%20Wb.%20Admin%2C%20saya%20ingin%20mendaftar%20di%20LKP%20SBMZ.%20Berikut%20data%20saya%3A%0ANama%3A%20%0AUmur%3A%20%0AProgram%20yang%20dipilih%3A%20%0AKapan%20bisa%20mulai%3A%20"
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-3 bg-yellow-600 hover:bg-yellow-700 text-white font-semibold rounded-lg shadow-md transition-all duration-300 transform hover:scale-105"
        >
          Daftar Sekarang
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
