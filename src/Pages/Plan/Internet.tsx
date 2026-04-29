import { lazy, Suspense } from "react";
import { LoadingSpinner } from "@/components/ui/loading-spinner";
import AnimatedLines from "@/components/Canvas/AnimatedLines";
import { Check, Wifi, Zap } from "lucide-react";
import SEO from "@/components/SEO";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

// Lazy loading de componentes pesados
const BannerPlanes = lazy(() => import("@/components/Banners/BannerPlanes"));
const InternetPlans = lazy(() => import("@/Layouts/InternetPlans"));

// Array de características incluidas en los planes
const planFeatures = [
  "Internet ilimitado sin restricciones.",
  "Soporte 24/7.",
  "Módem con WIFI de alta velocidad incluido.",
  "Estabilidad en conexión.",
  "Garantía de soporte.",
  "Velocidad simétrica.",
];

const plansData = [
  
  {
    title: "Plan 200 Mbps",
    speed: "200",
    price: "$65.000",
    category: "Básico",
    caracteristicas: [
      "Navegación fluida y redes sociales",
      "Streaming HD",
      "Videollamadas estables",
      "Descarga de archivos livianos",
      "WIFI de uso domestico",
    ],
    extras: [],
  },
  {
    title: "Plan 300 Mbps",
    speed: "350",
    price: "$85.000",
    category: "Básico",
    caracteristicas: [
      "Streaming Full HD en varios dispositivos",
      "Videollamadas en HD sin cortes",
      "Clases virtuales y teletrabajo",
      "Juegos online casuales",
      "Descargas más rápidas",
    ],
    extras: [],
  },
  {
    title: "Plan 500 Mbps",
    speed: "500",
    price: "$105.000",
    category: "Básico",
    caracteristicas: [
      "Streaming 4K en múltiples pantallas",
      "Gaming online con baja latencia",
      "Subida y descarga de archivos pesados",
      "Smart Home y cámaras IP",
      "Ideal para creadores de contenido básicos",
    ],
    extras: [],
  },
  {
    title: "Plan 750 Mbps",
    speed: "700",
    price: "$125.000",
    category: "Básico",
    caracteristicas: [
      "Gaming competitivo",
      "Streaming 4K/8K simultáneo",
      "Teletrabajo intensivo",
      "Servidores locales o acceso remoto",
      "Descargas ultra rápidas",
    ],
    extras: [],
  },
  {
    title: "Plan Gamer",
    speed: "920",
    price: "",
    category: "Gamer",
    caracteristicas: [
      "¡IP PUBLICA!",
      "Módem 5G con wifi",
      "NAT ABIERTA LAS 24/7",
    ],
    extras: [],
  }
];

function PlanInternetPage() {
  return (
    <>
      <SEO
        title="Planes de Internet 100% Fibra Óptica - TEAS | Internet Hogar de Alta Velocidad"
        description="Planes de internet 100% fibra óptica para tu hogar. Velocidades desde 200 Mbps hasta 920 Mbps. Internet ilimitado, velocidad simétrica, soporte 24/7. Plan Gamer disponible con IP pública y NAT abierta."
        keywords="planes de internet, internet fibra óptica, internet hogar, internet 100% fibra óptica, planes internet TEAS, internet alta velocidad, internet ilimitado, plan gamer, internet simétrico, fibra óptica Usme, internet Usme"
        ogTitle="Planes de Internet 100% Fibra Óptica - TEAS"
        ogDescription="Planes de internet 100% fibra óptica para tu hogar. Velocidades desde 200 Mbps hasta 920 Mbps. Internet ilimitado y velocidad simétrica."
        ogUrl="https://teas.com.co/planes/internet"
        canonical="https://teas.com.co/planes/internet"
      />
      <div className="w-full flex flex-col">
        {/* Navbar + Fondo con grafo */}
        <Suspense fallback={<LoadingSpinner fullScreen size="xl" />}>
            <BannerPlanes
              image="internet/internet-fibra-optica-banner.webp"
              className="bg-gradient-to-b from-teal-600 via-teal-600 to-teal-800"

            >
            <section className="flex flex-col items-center justify-center text-center">
              <Badge
                variant="orange"
                className="inline-flex items-center gap-2 rounded-full text-xs sm:text-sm font-semibold uppercase tracking-[0.16em] "
              >
                Fibra óptica 100% para tu hogar
              </Badge>

              <h2 className="max-w-3xl sm:max-w-4xl text-5xl sm:text-5xl lg:text-6xl xl:text-7xl text-teal-50 font-extrabold leading-tight tracking-wide drop-shadow-[0_18px_40px_rgba(0,0,0,0.45)]">
                <span className="block">
                  Los planes{" "}
                 <span className="block">
                    más veloces
                  </span>
                </span>
                <span className="block mt-1">
                  de{" "}
                  <span className="">
                    internet
                  </span>{" "}
                  para tu{" "}
                  <span className="">
                    hogar.
                  </span>
                </span>
              </h2>
              {/* Feature Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-8 w-full max-w-4xl">
                <Card className="bg-black/20 border-teal-300/20 backdrop-blur hover:bg-black/30 transition-all duration-300 hover:scale-105">
                  <CardContent className="flex flex-col items-center text-center p-6 gap-3">
                    <div className="h-12 w-12 rounded-full bg-gradient-to-br from-teal-400 to-teal-500 flex items-center justify-center shadow-lg">
                      <Zap className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-lg font-bold text-teal-50">
                      Velocidad Simétrica
                    </h3>
                    <p className="text-sm text-teal-100/80">
                      Misma velocidad de subida y bajada para todas tus actividades
                    </p>
                  </CardContent>
                </Card>

                <Card className="bg-black/20 border-teal-300/20 backdrop-blur hover:bg-black/30 transition-all duration-300 hover:scale-105">
                  <CardContent className="flex flex-col items-center text-center p-6 gap-3">
                    <div className="h-12 w-12 rounded-full bg-gradient-to-br from-teal-400 to-teal-500 flex items-center justify-center shadow-lg">
                      <Wifi className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-lg font-bold text-teal-50">
                      100% Fibra Óptica
                    </h3>
                    <p className="text-sm text-teal-100/80">
                      Tecnología de punta directo hasta tu hogar
                    </p>
                  </CardContent>
                </Card>

                <Card className="bg-black/20 border-teal-300/20 backdrop-blur hover:bg-black/30 transition-all duration-300 hover:scale-105 sm:col-span-2 lg:col-span-1">
                  <CardContent className="flex flex-col items-center text-center p-6 gap-3">
                    <div className="h-12 w-12 rounded-full bg-gradient-to-br from-teal-400 to-teal-500 flex items-center justify-center shadow-lg">
                      <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                      </svg>
                    </div>
                    <h3 className="text-lg font-bold text-teal-50">
                      Conexión Estable
                    </h3>
                    <p className="text-sm text-teal-100/80">
                      Sin cortes ni interrupciones en tu servicio
                    </p>
                  </CardContent>
                </Card>
              </div>
            </section>

          </BannerPlanes>
        </Suspense>
        {/* Sección de planes */}
        <div className="w-full flex justify-center items-center">
          
          <Suspense fallback={<LoadingSpinner size="lg" />}>
          
            <InternetPlans plansData={plansData} />
          </Suspense>
        </div>

        {/* Sección de beneficios */}
        <div className="w-full bg-white px-4 sm:px-6 md:px-10">
  <div className="sm:w-[90%] md:w-full lg:w-[80%] mx-auto">

   

    <div className="space-y-6 px-4 md:px-0">

      

      {/* Beneficios */}
      

    </div>
  </div>
</div>
      </div >
      <br />
    </>
  );
}

export default PlanInternetPage;
