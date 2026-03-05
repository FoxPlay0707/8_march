import floralBg from "@/assets/floral-bg.jpg";
import FallingPetals from "@/components/FallingPetals";

const Invitation = () => {
  return (
    <div className="relative flex min-h-screen items-center justify-center overflow-hidden bg-background p-4">
      <FallingPetals />

      {/* Background glow */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-40 left-1/2 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-rose-light/20 blur-3xl" />
        <div className="absolute bottom-0 left-0 h-80 w-80 rounded-full bg-gold-light/20 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-rose-light/20 blur-3xl" />
      </div>

      {/* Card */}
      <div className="animate-card-reveal relative z-10 w-full max-w-2xl overflow-hidden rounded-2xl shadow-elegant">
        {/* Floral header image */}
        <div className="relative h-56 w-full overflow-hidden md:h-64">
          <img
            src={floralBg}
            alt="Цветочное оформление"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background" />
        </div>

        {/* Content */}
        <div className="bg-background px-8 pb-10 pt-4 text-center md:px-14">
          <h1 className="font-display text-4xl font-bold text-foreground md:text-5xl">
            Приглашение
          </h1>

          <div className="mx-auto my-6 h-px w-24 bg-gradient-to-r from-transparent via-gold to-transparent" />

          {/* === ТЕКСТ ПРИГЛАШЕНИЯ — РЕДАКТИРУЙТЕ ЗДЕСЬ === */}
          <div className="space-y-4 font-body text-base leading-relaxed text-foreground/80 md:text-lg">
            <p className="font-display text-2xl italic text-foreground md:text-3xl">
              Дорогая, поздравляем тебя!
            </p>

            <p>
              {/* Напишите здесь основной текст приглашения */}
              Здесь будет ваш текст приглашения на мероприятие.
              Опишите что, где и когда будет происходить.
            </p>

            <p>
              {/* Детали мероприятия */}
              📅 Дата: _________<br />
              🕐 Время: _________<br />
              📍 Место: _________
            </p>

            <p className="font-display text-xl italic text-primary">
              {/* Заключительные слова */}
              Ждём тебя с нетерпением! 💐
            </p>
          </div>
          {/* === КОНЕЦ ТЕКСТА ПРИГЛАШЕНИЯ === */}

          <div className="mx-auto mt-8 h-px w-24 bg-gradient-to-r from-transparent via-gold to-transparent" />

          <p className="mt-6 font-display text-lg tracking-widest text-muted-foreground">
            С любовью ❤️
          </p>
        </div>
      </div>
    </div>
  );
};

export default Invitation;
