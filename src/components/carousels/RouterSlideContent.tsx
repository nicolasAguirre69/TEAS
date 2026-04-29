import Translucent from "@/components/Cards/Translucent";

const ROUTER_SLIDE_INFO_DATA = [
  {
    id: 1,
    title: "Conexión balanceada",
    description: "Misma rapidez al subir y descargar",
    image: "/cards/up-down.svg",
  },
  {
    id: 2,
    title: "Respuesta inmediata",
    description: "Navegación ágil y sin retrasos",
    image: "/cards/24-7.svg",
  },
  {
    id: 3,
    title: "Atención permanente",
    description: "Asistencia disponible en todo momento",
    image: "/cards/speed-test.svg",
  },
];

interface RouterSlideContentProps {
  children: React.ReactNode;
}

export function RouterSlideContent({ children }: RouterSlideContentProps) {
  return (
    <div className="flex flex-col items-center w-full">
      
      {/* Área del media */}
      <div className="relative w-full flex flex-col items-center">
        
        {/* Título */}
        <div className="flex flex-col items-center justify-center px-4 text-center mb-4">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-white font-bold leading-tight">
          Experimenta una conexión de alta velocidad
        </h1>
          <h1 className="text-4xl sm:text-4xl md:text-5xl lg:text-7xl xl:text-8xl text-white font-extrabold leading-tight">
            como nunca antes
          </h1>
        </div>

        {children}
      </div>
      <div className="hidden sm:block w-full max-w-6xl px-4 mt-6 mb-10">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 lg:gap-6">
          {ROUTER_SLIDE_INFO_DATA.map((item) => (
            <Translucent key={item.id} data={item} />
          ))}
        </div>
      </div>
    </div>
  );
}