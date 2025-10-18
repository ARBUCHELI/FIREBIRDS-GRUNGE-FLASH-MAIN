import { Menu, X } from "lucide-react";
import { useState } from "react";
import LanguageSwitcher from "./LanguageSwitcher";

interface NavigationProps {
  lang: 'en' | 'ru';
  onLanguageChange: (lang: 'en' | 'ru') => void;
}

const Navigation = ({ lang, onLanguageChange }: NavigationProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const content = {
    en: {
      links: [
        { name: "About", href: "#about" },
        { name: "Music", href: "#music" },
        { name: "Shows", href: "#shows" },
        { name: "Gallery", href: "#gallery" },
        { name: "Contact", href: "#contact" },
      ]
    },
    ru: {
      links: [
        { name: "О нас", href: "#about" },
        { name: "Музыка", href: "#music" },
        { name: "Концерты", href: "#shows" },
        { name: "Галерея", href: "#gallery" },
        { name: "Контакты", href: "#contact" },
      ]
    }
  };

  const t = content[lang];

  return (
    <nav className="fixed top-0 left-0 right-0 bg-grunge-black/95 backdrop-blur-sm z-50 border-b-4 border-grunge-red">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <a href="#" className="font-grunge text-2xl text-grunge-red transform -rotate-2">
            FIREBIRDS
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {t.links.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="font-bold-display text-white hover:text-grunge-red transition-colors"
              >
                {link.name}
              </a>
            ))}
            <LanguageSwitcher currentLang={lang} onLanguageChange={onLanguageChange} />
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-4">
            <LanguageSwitcher currentLang={lang} onLanguageChange={onLanguageChange} />
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white hover:text-grunge-red transition-colors"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-grunge-red/30">
            {t.links.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block py-3 font-bold-display text-white hover:text-grunge-red transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
