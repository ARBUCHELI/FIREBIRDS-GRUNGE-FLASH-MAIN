import { Globe } from "lucide-react";

interface LanguageSwitcherProps {
  currentLang: 'en' | 'ru';
  onLanguageChange: (lang: 'en' | 'ru') => void;
}

const LanguageSwitcher = ({ currentLang, onLanguageChange }: LanguageSwitcherProps) => {
  return (
    <div className="flex items-center gap-1 bg-grunge-light/10 rounded p-1">
      <Globe className="w-4 h-4 text-white ml-1" />
      <button
        onClick={() => onLanguageChange('en')}
        className={`font-bold-display px-3 py-1 rounded transition-colors ${
          currentLang === 'en' 
            ? 'bg-grunge-red text-white' 
            : 'text-white hover:bg-grunge-red/50'
        }`}
      >
        EN
      </button>
      <button
        onClick={() => onLanguageChange('ru')}
        className={`font-bold-display px-3 py-1 rounded transition-colors ${
          currentLang === 'ru' 
            ? 'bg-grunge-red text-white' 
            : 'text-white hover:bg-grunge-red/50'
        }`}
      >
        RU
      </button>
    </div>
  );
};

export default LanguageSwitcher;
