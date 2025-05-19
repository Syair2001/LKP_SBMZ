"use client";

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { UserIcon } from "lucide-react";

const tentors = [
  {
    nama: "MULIYADI HUSAIN, S.H., M.H.",
    asal: "UNHAS, UNISMUH MAKASSAR & UMI MAKASSAR",
    pengalaman: [
      "SMAN 1 BARRU (2006 - 2007 & 2013 - Sekarang)",
      "SMAN 4 BARRU (2007 - 2010)",
      "SMAN 6 BARRU (2010 - Sekarang)",
      "MGMP SMA Kabupaten Barru",
      "AGUPENA BARRU",
      "PGRI Barru"
    ],
    prestasi: []
  },
  {
    nama: "Fauziah, S.Pd., M. Pd",
    asal: "S1 & S2 - UNM PEND. MATEMATIKA",
    pengalaman: [
      "Bimbel SCI (Study Center of Indonesia)",
      "Guru privat SD-SMA Matematika",
      "Guru Honorer SMPN SATAP 4 BARRU (MATEMATIKA 2022-2024, INFORMATIKA 2024)",
      "Dosen Pend. Matematika STKIP ANDI MATAPPA (2024-sekarang)"
    ],
    prestasi: [
      "Peserta CCG (cerdas cermat guru) tingkat nasional 2024 perwakilan tim kab. Barru"
    ]
  },
  {
    nama: "NURHABIBA",
    asal: "S-1 Universitas Muhammadiyah Makassar",
    pengalaman: [
      "SMAS PGRI Barru (2015-2024)",
      "SMP Negeri 1 Barru (2015 - 2024)",
      "PKBM Mattirowalie",
      "PKBM & LKP Sipurio",
      "SD Negeri 1 Barru"
    ],
    prestasi: []
  },
  {
    nama: "Asmaul Husnah A, S.Pd., M. Pd",
    asal: "S1-UNM, S2-UPI PEND. IPS",
    pengalaman: [
      "Guru privat SD-SMA Bhs. Inggris",
      "Research Data Analyst"
    ],
    prestasi: []
  }
];

const TentorSection = () => {
  return (
    <section id="tentor" className="py-16 px-4 md:px-8 lg:px-16 bg-yellow-100">
      <h2 className="text-3xl font-bold mb-8 text-center text-yellow-600">Para Tentor</h2>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {tentors.map((tentor, index) => (
          <Card
            key={index}
            className="shadow-lg transition-shadow duration-300 hover:shadow-2xl transform hover:scale-105 bg-yellow-200"
          >
            <CardHeader className="flex flex-row items-center gap-4">
              <Avatar>
                <AvatarFallback>
                  <UserIcon className="w-5 h-5" />
                </AvatarFallback>
              </Avatar>
              <div>
                <CardTitle>{tentor.nama}</CardTitle>
                <CardDescription className="text-sm text-muted-foreground">
                  {tentor.asal}
                </CardDescription>
              </div>
            </CardHeader>
            <CardContent>
              <h4 className="font-semibold mt-2 mb-1">Pengalaman Mengajar:</h4>
              <ul className="list-disc list-inside text-sm space-y-1">
                {tentor.pengalaman.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
              {tentor.prestasi.length > 0 && (
                <>
                  <h4 className="font-semibold mt-4 mb-1">Prestasi:</h4>
                  <ul className="list-disc list-inside text-sm space-y-1">
                    {tentor.prestasi.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </>
              )}
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default TentorSection;
