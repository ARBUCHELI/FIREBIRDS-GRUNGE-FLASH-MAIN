import artyomImg from "@/assets/Artyom.jpg";
import alisaImg from "@/assets/Alisa.jpg";
import trofimImg from "@/assets/Trofim.jpg";
{/*import guitarImg from "@/assets/guitar.jpg";
import guitaristAndBassistImg from "@/assets/guitarist-and-basist.jpg";
import nizhnyNovgorodImg from "@/assets/nizhny-novgorod.jpg";
import vinylRecordsImg from "@/assets/vinyl-records.jpg";*/}

interface GalleryProps {
  lang: 'en' | 'ru';
}

const Gallery = ({ lang }: GalleryProps) => {
  const content = {
    en: {
      title: "GALLERY",
      subtitle: "Our Gear & Moments",
    },
    ru: {
      title: "ГАЛЕРЕЯ",
      subtitle: "Наше оборудование и моменты",
    }
  };

  const t = content[lang];

  const images = [
    { src: artyomImg, alt: "Artyom", caption: "Artyom" },
    { src: alisaImg, alt: "Alisa", caption: "Alisa"},
    { src: trofimImg, alt: "Trofim", caption: "Trofim"},
  ];

  return (
    <section id="gallery" className="py-24 md:py-32 px-6 bg-grunge-light">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-grunge text-4xl md:text-6xl lg:text-7xl text-grunge-black mb-3 tracking-tight leading-none">
            {t.title}
          </h2>
          <div className="w-16 h-0.5 bg-grunge-red mx-auto mb-4"></div>
          <p className="font-bold-display text-lg md:text-xl text-grunge-gray uppercase tracking-widest">
            {t.subtitle}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {images.map((image, index) => (
            <div 
              key={index}
              className="group relative overflow-hidden bg-white shadow-editorial hover:shadow-dramatic transition-all duration-500"
            >
              <div className="aspect-square overflow-hidden">
                <img 
                  src={image.src} 
                  alt={image.alt}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end">
                <p className="text-white font-bold-display text-lg md:text-xl p-6 uppercase tracking-wider">
                  {image.caption}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
