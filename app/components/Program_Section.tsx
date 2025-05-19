import React from "react";

const ProgramSection: React.FC = () => {
  // Array berisi data program
  const programs = [
    {
      title: "Bimbingan Belajar SD",
      items: ["Matematika", "Bahasa Inggris"],
    },
    {
      title: "Bimbingan Belajar SMP",
      items: ["Matematika", "Bahasa Inggris"],
    },
    {
      title: "Bimbingan Belajar SMA",
      items: ["Matematika", "Bahasa Inggris"],
    },
    {
      title: "Kursus Ujian Masuk Perguruan Tinggi",
      items: ["Materi intensif sesuai kurikulum ujian"],
    },
    {
      title: "Pelatihan Keterampilan",
      items: ["Keterampilan bahasa asing"],
    },
  ];

  return (
    <section className="bg-yellow-100 py-12 px-6">
      <div className="max-w-5xl mx-auto">
        {/* Title */}
        <h2 className="text-3xl font-bold mb-8 text-center text-yellow-600">
          Program yang Ditawarkan
        </h2>

        {/* Program List in Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Render Program List */}
          {programs.map((program, index) => (
            <div
              key={index}
              className="bg-yellow-200 p-6 rounded-lg shadow-md transition transform hover:scale-105 hover:shadow-xl"
            >
              <h3 className="text-xl font-semibold text-gray-800">
                {program.title}
              </h3>
              <ul className="mt-2 text-gray-600 list-disc list-inside">
                {program.items.map((item, itemIndex) => (
                  <li key={itemIndex}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProgramSection;
