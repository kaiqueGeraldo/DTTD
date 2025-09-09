import Image from "next/image";

export default function Home() {
  const companies = [
    {
      name: "Antea Group",
      logo: "/img/antea.webp",
      link: "https://anteagroup.com.br/",
    },
    {
      name: "Arenal",
      logo: "/img/arenal.webp",
      link: "https://www.arenal-pcs.com/",
    },
    {
      name: "LG Sonic",
      logo: "/img/lgsonic.webp",
      link: "https://www.lgsonic.com/",
    },
    {
      name: "Royal Eijkelkamp",
      logo: "/img/royal.webp",
      link: "https://www.royaleijkelkamp.com/",
    },
    {
      name: "Trisoplast",
      logo: "/img/trisoplast.webp",
      link: "https://www.trisoplast.com/",
    },
  ];

  return (
    <div className="min-h-screen bg-white flex flex-col items-center text-center font-[Montserrat] text-black">
      {/* Cabeçalho bandeiras Brasil */}
      <div className="w-full border-t-13 border-[#009c3b]">
        <div className="h-3 bg-[#f2c800]" />
        <div className="h-3 bg-[#002776]" />
      </div>

      {/* Título e Subtítulo */}
        <a href="http://dttd.com.br" target="_blank" rel="noopener noreferrer">
          <Image
            src="/img/cabecalho.webp"
            alt="DTTD Logo"
            width={500}
            height={200}
            priority
            className="mx-auto w-100 md:w-110"
          />
        </a>

      {/* Lista de empresas */}
      <div className="mt-5 w-full max-w-md space-y-4 px-4">
        {companies.map((company) => (
          <a
            key={company.name}
            href={company.link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center"
          >
            <Image
              src={company.logo}
              alt={company.name}
              width={300}
              height={150}
              loading="lazy"
              className="w-100 h-auto object-contain"
            />
          </a>
        ))}
      </div>

      {/* Bandeiras */}
      <div className="mt-5">
        <Image
          src="/img/bandeiras.webp"
          alt="Bandeiras Brasil e Holanda"
          width={320}
          height={150}
          loading="lazy"
          className="w-80 mx-auto"
        />
      </div>

      {/* Rodapé bandeiras Holanda */}
      <div className="mt-5 w-full">
        <div className="h-3 bg-[#da1212]" />
        <div className="h-3 bg-[#ffffff]" />
        <div className="h-3 bg-[#002776]" />
      </div>
    </div>
  );
}
