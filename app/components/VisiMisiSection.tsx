// VisiMisiSection.tsx
"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const visi = "Menjadi lembaga kursus dan pelatihan yang unggul dan terpercaya dalam meningkatkan kompetensi masyarakat di era digital.";

const misi = [
  "Menyelenggarakan program pelatihan berbasis kebutuhan masyarakat dan dunia kerja.",
  "Meningkatkan kualitas pembelajaran dengan tenaga pengajar profesional.",
  "Mengembangkan potensi peserta didik melalui pendekatan edukatif dan teknologi.",
  "Menjalin kemitraan dengan berbagai pihak untuk mendukung pengembangan kompetensi.",
];

const VisiMisiSection = () => {
  return (
    <section id="visi-misi" className="py-16 px-6 md:px-8 lg:px-16 bg-yellow-100">
      <h2 className="text-3xl font-bold mb-8 text-center text-yellow-600">Visi & Misi</h2>
      <div className="grid md:grid-cols-2 gap-6">
        <Card className="bg-yellow-200 shadow-md hover:scale-105 transition transform hover:shadow-xl">
          <CardHeader>
            <CardTitle className="text-xl text-gray-800">Visi</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground text-sm">{visi}</p>
          </CardContent>
        </Card>
        <Card className="bg-yellow-200 shadow-md hover:scale-105 transition transform hover:shadow-xl">
          <CardHeader>
            <CardTitle className="text-xl text-gray-800">Misi</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc list-inside space-y-2 text-sm text-muted-foreground">
              {misi.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default VisiMisiSection;
