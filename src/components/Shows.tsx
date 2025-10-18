import { Calendar, MapPin } from "lucide-react";
import ticketImg from "@/assets/ticket-1.png";

interface ShowsProps {
  lang: 'en' | 'ru';
}

const Shows = ({ lang }: ShowsProps) => {
  const content = {
    en: {
      title: "SHOWS",
      subtitle: "Come See Us Live",
      shows: [
        { date: "Dec 15, 2024", venue: "Youth Club", city: "Downtown", status: "Tickets" },
        { date: "Jan 20, 2025", venue: "School Festival", city: "Central", status: "Free Entry" },
        { date: "Feb 10, 2025", venue: "Community Center", city: "Westside", status: "Tickets" },
      ],
      noShows: "No upcoming shows... yet!"
    },
    ru: {
      title: "КОНЦЕРТЫ",
      subtitle: "Увидимся вживую",
      shows: [
        { date: "15 дек, 2024", venue: "Молодёжный клуб", city: "Центр", status: "Билеты" },
        { date: "20 янв, 2025", venue: "Школьный фестиваль", city: "Центральный", status: "Вход свободный" },
        { date: "10 фев, 2025", venue: "Общественный центр", city: "Западный", status: "Билеты" },
      ],
      noShows: "Пока нет концертов... но скоро будут!"
    }
  };

  const t = content[lang];

  return (
    <section id="shows" className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="font-grunge text-5xl md:text-7xl text-grunge-red mb-4 transform -rotate-1 shadow-neon">
            {t.title}
          </h2>
          <p className="font-bold-display text-2xl md:text-4xl text-grunge-black transform rotate-1">
            {t.subtitle}
          </p>
        </div>

        <div className="space-y-6 max-w-3xl mx-auto">
          {t.shows.map((show, index) => (
            <div 
              key={index}
              className="relative bg-white p-6 shadow-ticket transform hover:scale-105 transition-all duration-300 overflow-hidden ticket-punch border-l-4 border-dashed border-grunge-red"
              style={{ transform: `rotate(${index % 2 === 0 ? '1' : '-1'}deg)` }}
            >
              {/* Ticket decoration */}
              <div className="absolute top-0 right-0 w-24 h-24 opacity-10 pointer-events-none">
                <img src={ticketImg} alt="" className="w-full h-full object-cover rotate-45" />
              </div>
              
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 relative z-10">
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-grunge-black">
                    <Calendar className="w-5 h-5" />
                    <span className="font-bold-display text-2xl">{show.date}</span>
                  </div>
                  <div className="flex items-center gap-2 text-grunge-gray">
                    <MapPin className="w-5 h-5" />
                    <span className="font-body text-lg font-semibold">{show.venue}, {show.city}</span>
                  </div>
                </div>
                <button className="gradient-red hover:shadow-neon text-white font-bold-display text-lg px-8 py-3 transform -rotate-1 transition-all duration-300 hover:scale-110 shadow-grunge border-2 border-white/20">
                  {show.status}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Shows;
