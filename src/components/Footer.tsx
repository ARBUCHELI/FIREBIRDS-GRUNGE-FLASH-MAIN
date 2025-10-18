interface FooterProps {
  lang: 'en' | 'ru';
}

const Footer = ({ lang }: FooterProps) => {
  const content = {
    en: {
      rights: "All rights reserved.",
      band: "FireBirds - Punk Rock Band"
    },
    ru: {
      rights: "Все права защищены.",
      band: "FireBirds - Панк-рок группа"
    }
  };

  const t = content[lang];
  const year = new Date().getFullYear();

  return (
    <footer className="bg-grunge-black text-white py-8 px-4 border-t-4 border-grunge-red">
      <div className="max-w-6xl mx-auto text-center">
        <p className="font-grunge text-2xl text-grunge-red mb-2">FIREBIRDS</p>
        <p className="text-grunge-gray mb-1">{t.band}</p>
        <p className="text-grunge-concrete text-sm">
          © {year} FireBirds. {t.rights}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
