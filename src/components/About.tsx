interface AboutProps {
  lang: 'en' | 'ru';
}

const About = ({ lang }: AboutProps) => {
  const content = {
    en: {
      title: "ABOUT US",
      subtitle: "Young Blood, Old Sound",
      text1: "We're FireBirds - four 12-year-olds who fell in love with the raw energy of 90s grunge and punk rock.",
      text2: "Influenced by legends like Nirvana, Soundgarden, Green Day, and Foo Fighters, we bring that Seattle sound to a new generation.",
      text3: "From garage rehearsals to local shows, we're keeping the spirit of punk rock alive - loud, honest, and unapologetic."
    },
    ru: {
      title: "О НАС",
      subtitle: "Молодая кровь, старый звук",
      text1: "Мы FireBirds - четыре 12-летних подростка, которые влюбились в сырую энергию гранжа и панк-рока 90-х.",
      text2: "Под влиянием легенд вроде Nirvana, Soundgarden, Green Day и Foo Fighters, мы приносим тот сиэтлский звук новому поколению.",
      text3: "От репетиций в гараже до местных концертов, мы сохраняем дух панк-рока живым - громким, честным и бескомпромиссным."
    }
  };

  const t = content[lang];

  return (
    <section id="about" className="py-24 md:py-32 px-6 bg-white">
      <div className="max-w-5xl mx-auto">
        <div className="mb-16 text-center">
          <h2 className="font-grunge text-4xl md:text-6xl lg:text-7xl text-grunge-black mb-3 tracking-tight leading-none">
            {t.title}
          </h2>
          <div className="w-16 h-0.5 bg-grunge-red mx-auto mb-4"></div>
          <p className="font-bold-display text-lg md:text-xl text-grunge-gray uppercase tracking-widest">
            {t.subtitle}
          </p>
        </div>

        <div className="space-y-8 text-lg md:text-xl text-grunge-black/80 leading-relaxed max-w-3xl mx-auto">
          <p className="first-letter:text-6xl first-letter:font-grunge first-letter:text-grunge-red first-letter:float-left first-letter:mr-3 first-letter:leading-none">
            {t.text1}
          </p>
          
          <p>
            {t.text2}
          </p>
          
          <p className="border-l-4 border-grunge-red pl-6 italic">
            {t.text3}
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
