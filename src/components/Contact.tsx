import { Mail, Instagram, Music, Youtube, Twitter, Facebook } from "lucide-react";

interface ContactProps {
  lang: 'en' | 'ru';
}

const Contact = ({ lang }: ContactProps) => {
  const content = {
    en: {
      title: "GET IN TOUCH",
      subtitle: "Book Us, Follow Us, Rock With Us",
      email: "Email",
      social: "Follow Us",
      booking: "For booking inquiries:",
      emailAddress: "firebirds@band.com"
    },
    ru: {
      title: "СВЯЗАТЬСЯ",
      subtitle: "Забронируй нас, следи за нами, рокни с нами",
      email: "Email",
      social: "Следи за нами",
      booking: "По вопросам выступлений:",
      emailAddress: "firebirds@band.com"
    }
  };

  const t = content[lang];

  return (
    <section id="contact" className="py-20 px-4 bg-grunge-black text-white">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="font-grunge text-5xl md:text-7xl text-grunge-red mb-4 transform -rotate-1">
            {t.title}
          </h2>
          <p className="font-bold-display text-2xl md:text-4xl transform rotate-1">
            {t.subtitle}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-grunge-light text-grunge-black p-8 transform -rotate-1 hover:rotate-0 transition-all duration-300 shadow-sticker">
            <div className="flex items-center gap-4 mb-4">
              <Mail className="w-8 h-8 text-grunge-red" />
              <h3 className="font-bold-display text-2xl">{t.email}</h3>
            </div>
            <p className="text-grunge-gray mb-2">{t.booking}</p>
            <a 
              href={`mailto:${t.emailAddress}`}
              className="text-grunge-red hover:underline font-bold"
            >
              {t.emailAddress}
            </a>
          </div>

          <div className="bg-grunge-light text-grunge-black p-8 transform rotate-1 hover:rotate-0 transition-all duration-300 shadow-sticker">
            <div className="flex items-center gap-4 mb-6">
              <Instagram className="w-8 h-8 text-grunge-red" />
              <h3 className="font-bold-display text-2xl">{t.social}</h3>
            </div>
            <div className="grid grid-cols-2 gap-3">
              <a 
                href="https://instagram.com/firebirds_band" 
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-grunge-red text-white px-4 py-3 font-bold hover:bg-grunge-black transition-all duration-300 transform hover:scale-105 shadow-grunge"
              >
                <Instagram className="w-5 h-5" />
                <span className="hidden sm:inline">Instagram</span>
              </a>
              <a 
                href="https://youtube.com/@firebirds" 
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-grunge-red text-white px-4 py-3 font-bold hover:bg-grunge-black transition-all duration-300 transform hover:scale-105 shadow-grunge"
              >
                <Youtube className="w-5 h-5" />
                <span className="hidden sm:inline">YouTube</span>
              </a>
              <a 
                href="https://twitter.com/firebirds_band" 
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-grunge-red text-white px-4 py-3 font-bold hover:bg-grunge-black transition-all duration-300 transform hover:scale-105 shadow-grunge"
              >
                <Twitter className="w-5 h-5" />
                <span className="hidden sm:inline">Twitter</span>
              </a>
              <a 
                href="https://facebook.com/firebirdsband" 
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-grunge-red text-white px-4 py-3 font-bold hover:bg-grunge-black transition-all duration-300 transform hover:scale-105 shadow-grunge"
              >
                <Facebook className="w-5 h-5" />
                <span className="hidden sm:inline">Facebook</span>
              </a>
              <a 
                href="https://music.apple.com/artist/firebirds" 
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-grunge-red text-white px-4 py-3 font-bold hover:bg-grunge-black transition-all duration-300 transform hover:scale-105 shadow-grunge col-span-2"
              >
                <Music className="w-5 h-5" />
                <span>Stream Our Music</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
