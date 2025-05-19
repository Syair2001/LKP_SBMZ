"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"; // Menggunakan Avatar untuk placeholder
import { UserIcon } from "lucide-react"; // Ikon pengguna sebagai fallback

const TentangKamiSection = () => {
  return (
    <section id="tentang-kami" className="py-16 px-4 md:px-8 lg:px-16 bg-yellow-100">
      <h2 className="text-3xl font-bold mb-8 text-center text-yellow-600">Tentang Kami</h2>
      <Card className="max-w-4xl mx-auto shadow-md bg-yellow-200">
        <CardHeader className="flex flex-col md:flex-row items-center gap-6 md:gap-12">
          {/* Gambar dengan placeholder */}
          <Avatar className="w-32 h-32">
            <AvatarImage src="logo.png" alt="LKP SBMZ" />
            <AvatarFallback>
              <UserIcon className="w-12 h-12 text-gray-500" />
            </AvatarFallback>
          </Avatar>

          {/* Judul dan Deskripsi */}
          <div className="text-center md:text-left">
            <CardTitle className="text-xl text-gray-800">LKP SBMZ</CardTitle>
          </div>
        </CardHeader>

        <CardContent>
          <p className="text-sm text-muted-foreground leading-relaxed">
            LKP SBMZ adalah Lembaga Kursus dan Pelatihan yang berkomitmen untuk meningkatkan keterampilan dan kompetensi masyarakat, khususnya di Kabupaten Barru. 
            Berdiri dengan semangat pengabdian dan inovasi, LKP SBMZ menawarkan berbagai program pendidikan nonformal yang relevan dengan kebutuhan dunia kerja 
            dan perkembangan zaman.
          </p>
          <p className="text-sm text-muted-foreground leading-relaxed mt-4">
            Dengan didukung oleh pengajar profesional dan fasilitas pembelajaran yang memadai, kami bertekad menjadi lembaga terpercaya dalam mencetak generasi 
            yang siap bersaing dan berkarya. Fokus utama kami adalah pendidikan berbasis teknologi, keterampilan praktis, dan pembentukan karakter.
          </p>
        </CardContent>
      </Card>
    </section>
  );
};

export default TentangKamiSection;
