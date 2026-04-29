import { lazy, Suspense, useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Link } from "react-router-dom";
import { LoadingSpinner } from "@/components/ui/loading-spinner";
import SEO from "@/components/SEO";
import { Play } from "lucide-react";

const AnimatedLines = lazy(() => import("@/components/Canvas/AnimatedLines"));
const CarouselChannels = lazy(() => import("@/components/carousels/Chanels"));
import BannerHome from "@/components/carousels/PrincipalInfo";

function LazyYouTubeEmbed({ videoId }: { videoId: string }) {
  const [shouldLoad, setShouldLoad] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isClicked) {
      setShouldLoad(true);
      return;
    }
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setShouldLoad(true);
            observer.disconnect();
          }
        });
      },
      { threshold: 0.1, rootMargin: "200px" }
    );
    if (containerRef.current) observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, [isClicked]);

  const thumbnailUrl = `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;

  if (!shouldLoad) {
    return (
      <div
        ref={containerRef}
        className="w-[90%] h-[90%] rounded-lg shadow-lg overflow-hidden relative cursor-pointer group/placeholder"
        onClick={() => setIsClicked(true)}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            setIsClicked(true);
          }
        }}
        aria-label="Cargar video de YouTube"
      >
        <img
          src={thumbnailUrl}
          alt="Video thumbnail"
          className="w-full h-full object-cover"
          width={1280}
          height={720}
          style={{ aspectRatio: "16 / 9" }}
          loading="lazy"
          decoding="async"
        />
        <div className="absolute inset-0 bg-black/40 group-hover/placeholder:bg-black/50 transition-colors flex items-center justify-center">
          <div className="bg-white/90 rounded-full p-4 group-hover/placeholder:scale-110 transition-transform">
            <Play className="w-12 h-12 text-teal-500 fill-teal-500" />
          </div>
        </div>
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white text-sm font-medium bg-black/60 px-4 py-2 rounded-full">
          Haz clic para cargar el video
        </div>
      </div>
    );
  }

  return (
    <iframe
      src={`https://www.youtube.com/embed/${videoId}`}
      title="YouTube video player"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      referrerPolicy="strict-origin-when-cross-origin"
      allowFullScreen
      className="w-[90%] h-[90%] rounded-lg shadow-lg group-hover/iframe:shadow-teal-500/50 transition-all duration-500 group-hover/iframe:scale-105"
    />
  );
}

interface CardInfo {
  title: string;
  description: string;
  path: string;
  imagePath: string;
}

const pagosPSEInfo = {
  title: "PAGOS FACILES Y SEGUROS",
  description:
    "Realiza tus pagos de forma rápida y segura a través de Nequi o Daviplata. Si necesitas ayuda, contáctanos directamente por WhatsApp.",
  path: "https://wa.me/3160542489",
  imagePath: "/cards/pagos.svg",
};

const cardsInfo: CardInfo[] = [
  {
    title: "Internet",
    description:
      "Con una conexión de fibra óptica estable y de alta velocidad, perfecta para navegar, trabajar, jugar en línea y reproducir contenido sin interrupciones.",
    path: "/planes/internet",
    imagePath: "/cards/wifi.svg",
  },
  {
    title: "Internet + TV",
    description:
      "Combina internet de alta velocidad con servicio de televisión digital, todo en un solo plan pensado para entretenimiento y conectividad sin complicaciones.",
    path: "/planes/television",
    imagePath: "/cards/tv.svg",
  },
];

function HomePage() {
  return (
    <>
      <SEO
        title="TEAS Internet - Internet Hogar 100% Fibra Óptica | Pagos en Línea"
        description="TEAS Internet: Internet hogar 100% fibra óptica de alta velocidad. Planes de internet, televisión y telefonía. Paga tu factura de internet en línea con PSE. TEAS pagos en línea, pagos por PSE TEAS."
        keywords="TEAS Internet, internet hogar, fibra óptica, internet 100% fibra óptica, pagos en línea, pagar tu factura de internet en línea, TEAS pagos en línea, pagos por pse TEAS, internet fibra, planes de internet, internet de alta velocidad, internet residencial, TEAS, proveedor de internet, internet colombia"
        ogTitle="TEAS Internet - Internet Hogar 100% Fibra Óptica"
        ogDescription="Internet hogar 100% fibra óptica de alta velocidad. Planes de internet, televisión y telefonía. Paga tu factura de internet en línea con PSE."
        ogUrl="https://teas.com.co/"
        canonical="https://teas.com.co/"
      />

      <div className="w-full overflow-x-hidden space-y-14 md:space-y-10 mb-10 md:mb-20">

        {/* Sección banner + carrusel */}
        <div className="bg-black flex flex-col items-center justify-center">
          <BannerHome />
          <h2 className="text-3xl text-primary-foreground text-center px-4">
            Tenemos para ti la oferta de canales más completa{" "}
            <span className="font-extrabold">disponible en todo Usme.</span>
          </h2>
          <div className="w-full max-w-full overflow-hidden">
            <Suspense fallback={<LoadingSpinner size="lg" />}>
              <CarouselChannels />
            </Suspense>
          </div>
        </div>

        {/* Contenedor interior con padding */}
        <div className="w-full max-w-[1920px] mx-auto px-4 sm:px-6 md:px-10 lg:px-20 xl:px-40 space-y-14 md:space-y-10 flex flex-col items-center justify-center">
          <Suspense fallback={<div className="w-full h-16" />}>
            <AnimatedLines className="justify-start w-full" />
          </Suspense>

          {/* Header */}
          <div className="text-center w-full max-w-3xl mx-auto space-y-4">
            <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-secondary-foreground tracking-tight">
              ¡Comprometidos con brindarte la mejor experiencia!
            </h3>
            <p className="text-muted-foreground text-base sm:text-lg leading-relaxed">
              Accede a nuestros servicios de internet por fibra óptica y televisión, diseñados con tecnología moderna para mantenerte siempre conectado.
            </p>
          </div>

          {/* Cards de servicios */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 w-full max-w-6xl">
            {cardsInfo.map((card, index) => (
              <div
                key={card.title}
                className="flex flex-col items-center group cursor-pointer"
                style={{ animation: `fadeInUp 0.6s ease-out ${index * 0.1}s both` }}
              >
                <Card className="w-full h-full bg-gradient-to-b from-black via-zinc-950 to-black hover:border-teal-500/40 rounded-2xl overflow-hidden transition-all duration-500 ease-out hover:shadow-2xl hover:shadow-teal-500/60 hover:scale-[1.02] hover:-translate-y-1">
                  <CardHeader className="text-center flex flex-col items-center justify-center pb-2">
                    <div className="w-20 h-20 mb-4 rounded-2xl bg-teal-500/20 flex items-center justify-center transition-all duration-500 ease-out group-hover:bg-teal-500 group-hover:scale-110">
                      <img
                        src={card.imagePath}
                        alt={card.title}
                        className="w-12 h-12 object-contain brightness-0 invert opacity-90 group-hover:opacity-100"
                        loading="lazy"
                        decoding="async"
                        width={48}
                        height={48}
                      />
                    </div>
                    <CardTitle className="text-xl font-bold text-teal-500 transition-colors duration-300 group-hover:text-teal-200">
                      {card.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="flex-1">
                    <p className="text-sm text-primary-foreground text-center leading-relaxed line-clamp-4">
                      {card.description}
                    </p>
                  </CardContent>
                  <CardFooter className="flex justify-center pt-4">
                    <Button
                      variant="orange"
                      className="min-h-[44px] min-w-[130px] font-semibold"
                    >
                      <Link
                        to={card.path}
                        className="flex items-center justify-center w-full h-full gap-2"
                      >
                        Saber más
                      </Link>
                    </Button>
                  </CardFooter>
                </Card>
              </div>
            ))}
          </div>
        </div>

        {/* Card PSE - ancho completo con fondo negro */}
        <div className="w-full bg-black flex justify-center items-center px-4 py-16">
          <Card className="w-full max-w-5xl bg-white rounded-2xl overflow-hidden border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-500">
            <div className="flex flex-col lg:flex-row items-stretch">

              {/* Mascota */}
              <div className="w-full lg:w-1/3 flex justify-center items-center p-6 bg-[#f5f7f9]">
                <img
                  src="/mascota.png"
                  alt="Mascota"
                  className="w-40 sm:w-52 md:w-64 lg:w-80 object-contain transition-all duration-500 hover:scale-105 animate-float"
                />
              </div>

              {/* Contenido */}
              <div className="w-full lg:w-2/3 p-6 sm:p-8 lg:p-10 flex flex-col justify-center text-center lg:text-left space-y-6">
                <CardTitle className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#2d4258] leading-tight">
                  {pagosPSEInfo.title}
                </CardTitle>

                <p className="text-base sm:text-lg md:text-xl text-gray-600 leading-relaxed max-w-xl mx-auto lg:mx-0">
                  {pagosPSEInfo.description}
                </p>

                {/* Logos */}
                <div className="flex flex-wrap justify-center lg:justify-start items-center gap-6 sm:gap-8">
                  <img
                    src="/cards/Nequi.png"
                    alt="Nequi"
                    className="w-20 sm:w-24 md:w-28 lg:w-32 object-contain transition-all duration-500 hover:scale-110 hover:-translate-y-1"
                  />
                  <img
                    src="/cards/Daviplata.png"
                    alt="Daviplata"
                    className="w-20 sm:w-24 md:w-28 lg:w-32 object-contain transition-all duration-500 hover:scale-110 hover:-translate-y-1"
                  />
                </div>

                {/* Botón */}
                <div className="flex justify-center">
                  <Button
                    asChild
                    className="bg-[#00ae9d] hover:bg-[#019688] text-white font-semibold px-6 py-3 sm:py-4 text-base sm:text-lg rounded-xl transition-all duration-300 hover:scale-[1.03] shadow-md w-full sm:w-auto"
                  >
                    <a
                      href={pagosPSEInfo.path}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2"
                    >
                      Pagar o solicitar ayuda
                    </a>
                  </Button>
                </div>
              </div>

            </div>
          </Card>
        </div>
        <div className="w-full max-w-[1920px] mx-auto px-4 sm:px-6 md:px-10 lg:px-20 xl:px-40 space-y-14 md:space-y-10 flex flex-col items-center justify-center">

          <Suspense fallback={<div className="w-full h-16" />}>
            <AnimatedLines className="justify-start w-full" />
          </Suspense>

          {/* Header */}
          <div className="text-center w-full max-w-3xl mx-auto space-y-4">
            <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-secondary-foreground tracking-tight">
              Conoce tus derechos como usuario
            </h3>
            <p className="text-muted-foreground text-base sm:text-lg leading-relaxed">
              Infórmate sobre el régimen de protección al usuario de servicios de telecomunicaciones, conoce tus derechos y deberes, y cómo hacerlos valer.
            </p>
          </div>

          {/* Imagen */}
          <div className="w-full flex justify-center">
            <CardContent className="p-0 w-full max-w-5xl">
              <img
                src="/banners/conoce-tus-derechos-y-deberes-como-usuario.jpg"
                alt="Derechos y deberes del usuario - CRC"
                className="w-full object-cover rounded-xl transition-transform duration-500 hover:scale-105"
                style={{ aspectRatio: "16 / 7" }}
              />
            </CardContent>
          </div>

        </div>

      </div>
    </>
  );
}

export default HomePage;