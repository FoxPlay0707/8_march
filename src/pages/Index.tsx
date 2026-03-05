import { useNavigate } from "react-router-dom";
import giftBoxImg from "@/assets/gift-box.png";
import FallingPetals from "@/components/FallingPetals";

const Index = () => {
  const navigate = useNavigate();

  return (
    <div className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-background">
      <FallingPetals />

      {/* Decorative circles */}
      <div className="pointer-events-none absolute -top-32 -right-32 h-96 w-96 rounded-full bg-rose-light/30 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-32 -left-32 h-96 w-96 rounded-full bg-gold-light/30 blur-3xl" />

      <div className="relative z-10 flex flex-col items-center gap-8 px-4 text-center">
        {/* Title */}
        <h1 className="animate-fade-in-up font-display text-5xl font-bold tracking-wide text-foreground md:text-7xl">
          С 8 Марта<span className="text-gradient-gold">!</span>
        </h1>
        <p className="animate-fade-in-up font-body text-lg font-light tracking-widest text-muted-foreground uppercase"
           style={{ animationDelay: "0.2s", opacity: 0 }}>
          У вас есть подарок
        </p>

        {/* Gift box */}
        <div className="animate-float mt-4">
          <img
            src={giftBoxImg}
            alt="Подарочная коробка"
            className="h-56 w-56 object-contain drop-shadow-2xl md:h-72 md:w-72"
          />
        </div>

        {/* Open button */}
        <button
          onClick={() => navigate("/invitation")}
          className="animate-pulse-glow mt-4 rounded-full border-2 border-gold bg-background px-10 py-4 font-display text-2xl font-semibold tracking-wide text-foreground transition-all duration-300 hover:scale-105 hover:border-primary hover:bg-primary hover:text-primary-foreground active:scale-95 md:text-3xl"
          style={{ animationDelay: "0.6s" }}
        >
          ✨ Открыть подарок ✨
        </button>
      </div>
    </div>
  );
};

export default Index;
