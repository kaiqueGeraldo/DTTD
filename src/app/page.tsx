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
      <div className="mt-5">
        <a href="http://dttd.com.br" target="_blank" rel="noopener noreferrer">
          <img
            src="/img/cabecalho.webp"
            alt="DTTD Logo"
            className="mx-auto w-100 md:w-110"
          />
        </a>
      </div>

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
            <img
              src={company.logo}
              alt={company.name}
              className="w-100 h-auto object-contain"
            />
          </a>
        ))}
      </div>

      {/* Bandeiras */}
      <div className="mt-5">
        <img
          src="/img/bandeiras.webp"
          alt="Bandeiras Brasil e Holanda"
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
