// TestimoniSection.tsx
"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const testimonials = [
  {
    nama: "Ahmad Rafi",
    peran: "Siswa LKP SBMZ",
    komentar: "Belajar di LKP SBMZ sangat menyenangkan! Materinya lengkap dan pengajarnya ramah.",
    avatar: "/avatars/ahmad.jpg"
  },
  {
    nama: "Siti Aisyah",
    peran: "Orang Tua Siswa",
    komentar: "Anak saya mengalami banyak kemajuan setelah bergabung di LKP SBMZ. Terima kasih!",
    avatar: "/avatars/aisyah.jpg"
  },
  {
    nama: "Dewi Lestari",
    peran: "Alumni",
    komentar: "Ilmu yang saya dapatkan di SBMZ sangat bermanfaat untuk dunia kerja. Recommended banget!",
    avatar: "/avatars/dewi.jpg"
  }
];

const TestimoniSection = () => {
  return (
    <section id="testimoni" className="py-16 px-4 md:px-8 lg:px-16 bg-yellow-100">
      <h2 className="text-3xl font-bold mb-12 text-center text-yellow-600">Testimoni</h2>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {testimonials.map((testi, index) => (
          <Card key={index} className="shadow-md bg-yellow-200 border-yellow-200">
            <CardHeader className="flex flex-row items-center space-x-4">
              <Avatar>
                <AvatarImage src={testi.avatar} alt={testi.nama} />
                <AvatarFallback>{testi.nama.split(" ")[0][0]}{testi.nama.split(" ")[1]?.[0]}</AvatarFallback>
              </Avatar>
              <div>
                <CardTitle className="text-base text-yellow-700">{testi.nama}</CardTitle>
                <CardDescription className="text-sm text-muted-foreground">{testi.peran}</CardDescription>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-sm italic">"{testi.komentar}"</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default TestimoniSection;
