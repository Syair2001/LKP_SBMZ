const Footer = () => {
  return (
    <footer className="bg-yellow-500 text-gray-900 py-10">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
        {/* Tentang LKP SBMZ */}
        <div>
          <h3 className="text-lg font-semibold mb-2">Tentang LKP SBMZ</h3>
          <p className="text-sm">
            LKP SBMZ adalah lembaga kursus dan pelatihan yang menyediakan berbagai program pendidikan nonformal. Kami bertujuan untuk meningkatkan keterampilan dan kompetensi masyarakat, khususnya di Kabupaten Barru, melalui pelatihan berbasis teknologi.
          </p>
        </div>

        {/* Navigasi */}
        <div>
          <h3 className="text-lg font-semibold mb-2">Navigasi</h3>
          <ul className="text-sm space-y-2">
            <li><a href="/" className="hover:underline">Beranda</a></li>
            <li><a href="/program" className="hover:underline">Program Kami</a></li>
            <li><a href="/about" className="hover:underline">Tentang Kami</a></li>
            <li><a href="/contact" className="hover:underline">Kontak</a></li>
          </ul>
        </div>

        {/* Kontak */}
        <div>
          <h3 className="text-lg font-semibold mb-2">Kontak Kami</h3>
          <p className="text-sm mb-1">
            Telepon: <a href="tel:+62" className="hover:underline">+62 813 5535 6155</a>
          </p>
          <p className="text-sm">
            Alamat: Jl. Pasar Sentral No.92, Sumpang Binangae, Kec. Barru, Kabupaten Barru, Sulawesi Selatan 90711
          </p>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="mt-10 text-center border-t border-gray-300 pt-4">
        <p className="text-sm">
          &copy; 2025 LKP SBMZ.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
