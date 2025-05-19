"use client";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQSection = () => {
  const faqData = [
    {
      question: "Apa saja program yang ditawarkan?",
      answer:
        "Kami menawarkan berbagai program seperti bimbingan belajar untuk SD, SMP, SMA, kursus ujian masuk perguruan tinggi, dan pelatihan keterampilan.",
    },
    {
      question: "Apakah ada jadwal fleksibel untuk kursus?",
      answer:
        "Ya, kami menyediakan jadwal yang fleksibel untuk menyesuaikan kebutuhan siswa, baik secara offline maupun online.",
    },
    {
      question: "Bagaimana cara mendaftar ke program?",
      answer:
        "Anda dapat mendaftar melalui website kami atau langsung datang ke kantor cabang terdekat.",
    },
    {
      question: "Apakah tersedia kursus online?",
      answer:
        "Ya, kami memiliki program kursus online dengan materi yang sama seperti kelas offline.",
    },
    {
      question: "Berapa biaya untuk setiap program?",
      answer:
        "Biaya bervariasi tergantung pada program yang diambil. Silakan hubungi kami untuk informasi lebih lanjut.",
    },
  ];

  return (
    <section className="bg-yellow-100 py-16 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-10">
          FAQ (Frequently Asked Questions)
        </h2>

        <Accordion type="single" collapsible className="w-full space-y-2">
          {faqData.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`} className="border-b border-gray-200">
              <AccordionTrigger className="text-left text-lg font-medium text-gray-800 hover:text-yellow-600 transition-colors">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 text-sm">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQSection;
