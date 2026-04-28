import { ChevronsUp } from "lucide-react";
import { Card, CardContent } from "../ui/card";
import { cn } from "@/lib/utils";

interface Plan {
  speed: string;
  price: string;
  category: string;
  caracteristicas: string[];
}

interface TranslucentPlanProps {
  plan: Plan;
  className?: string;
  style?: React.CSSProperties;
}

export default function TranslucentPlan({
  plan,
  className,
  style,
}: TranslucentPlanProps) {
  return (
    <div>
      {/* CARD PRINCIPAL */}
      <Card
        className={cn(
          "bg-gradient-to-b from-black/50 to-[#00ae9d]/90 shadow-lg hover:shadow-xl transition-shadow backdrop-blur-md",
          className
        )}
        style={style}
      >

        {/* ICONO IZQUIERDO */}
        <Card className="p-2 absolute top-5 sm:top-2 left-[-15px] sm:left-[-25px] md:left-[-20px] lg:left-[-25px] z-30 shadow-lg hover:shadow-xl backdrop-blur-md bg-gradient-to-b from-black/50 to-[#00C853]/90 transition-all border-white shadow-[#00C853]/50 ring-4 ring-[#00ae9d]/30 hover:scale-[1.2] rounded-full">
          <CardContent className="p-0">
            <ChevronsUp className="size-6 sm:size-8 lg:size-8 md:size-6 text-white" />
          </CardContent>
        </Card>

        {/* TAG +TV */}
        <Card className="p-2 absolute top-2 right-[-25px] sm:right-[-35px] md:right-[-25px] lg:right-[-35px] z-30 shadow-lg hover:shadow-xl transition-all backdrop-blur-md bg-gradient-to-b from-black/50 to-[#1DAA61]/90 border-white shadow-[#00C853]/50 ring-4 ring-[#00ae9d]/30">
          <CardContent className="p-0">
            <span className="text-2xl sm:text-3xl md:text-xl lg:text-2xl font-bold text-white">
              +TV
            </span>
          </CardContent>
        </Card>

        {/* CONTENIDO */}
        <CardContent className="w-full">
          <div className="flex flex-col items-center justify-center">
            <h3>
              <span className="text-6xl font-extrabold text-white">
                {plan.speed}
              </span>
            </h3>
            <span className="text-2xl font-bold text-[#00E676]">
              MEGAS
            </span>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}