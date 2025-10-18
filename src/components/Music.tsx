import { Music as MusicIcon, Play } from "lucide-react";
import arcadeImg from "@/assets/arcade-element.png";

interface MusicProps {
  lang: 'en' | 'ru';
}

const Music = ({ lang }: MusicProps) => {
  const content = {
    en: {
      title: "MUSIC",
      subtitle: "Our Sound",
      albums: [
        { title: "Garage Days", year: "2024", tracks: 8 },
        { title: "First Flight", year: "2023", tracks: 6 },
      ],
      listen: "Listen"
    },
    ru: {
      title: "МУЗЫКА",
      subtitle: "Наш звук",
      albums: [
        { title: "Garage Days", year: "2024", tracks: 8 },
        { title: "First Flight", year: "2023", tracks: 6 },
      ],
      listen: "Слушать"
    }
  };

  const t = content[lang];

  return (
    <section id="music" className="relative py-24 md:py-32 px-6 bg-grunge-black text-white overflow-hidden">
      {/* Arcade decoration */}
      <img 
        src={arcadeImg} 
        alt="" 
        className="absolute top-10 right-10 w-48 opacity-10 pointer-events-none hidden lg:block"
      />
      <img 
        src={arcadeImg} 
        alt="" 
        className="absolute bottom-10 left-10 w-48 opacity-10 pointer-events-none hidden lg:block rotate-180"
      />
      
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="font-grunge text-4xl md:text-6xl lg:text-7xl text-white mb-3 tracking-tight leading-none">
            {t.title}
          </h2>
          <div className="w-16 h-0.5 bg-grunge-red mx-auto mb-4"></div>
          <p className="font-bold-display text-lg md:text-xl text-white/70 uppercase tracking-widest">
            {t.subtitle}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {t.albums.map((album, index) => (
            <div 
              key={index}
              className="bg-white group hover:bg-grunge-red transition-all duration-300 overflow-hidden shadow-editorial hover:shadow-dramatic"
            >
              <div className="p-8">
                <div className="flex items-start justify-between mb-6">
                  <MusicIcon className="w-12 h-12 text-grunge-red group-hover:text-white transition-colors" />
                  <span className="text-grunge-gray group-hover:text-white/70 font-bold-display text-sm uppercase tracking-wider transition-colors">{album.year}</span>
                </div>
                <h3 className="font-grunge text-4xl text-grunge-black group-hover:text-white mb-3 leading-tight transition-colors">{album.title}</h3>
                <p className="text-grunge-gray group-hover:text-white/80 mb-6 font-body transition-colors">{album.tracks} tracks</p>
                <button className="bg-grunge-black group-hover:bg-white text-white group-hover:text-grunge-black font-bold-display py-3 px-6 flex items-center gap-2 transition-all duration-300 uppercase text-sm tracking-wider w-full justify-center">
                  <Play className="w-4 h-4" />
                  {t.listen}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Music;
