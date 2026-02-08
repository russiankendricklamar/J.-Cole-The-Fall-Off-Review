import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

type Language = 'en' | 'ru';

interface Translations {
  nav: {
    review: string;
    tracks: string;
    credits: string;
    vol: string;
  };
  hero: {
    chapter: string;
    label: string;
  };
  marquee: {
    strip1: string;
    strip2: string;
  };
  review: {
    title: string;
    rating: string;
    genre: string;
    runtime: string;
    mainText: string;
    subText: string;
    highlight: string;
    prodTitle: string;
    prodText: string;
    lyricTitle: string;
    lyricText: string;
  };
  visuals: {
    title: string;
    gallery: string;
    view: string;
    captions: {
      cover: string;
      trailer: string;
      concept1: string;
      visualizer: string;
      concept2: string;
    }
  };
  tracks: {
    title: string;
    disc1: string;
    disc2: string;
  };
  footer: {
    labelTitle: string;
    designTitle: string;
    rights: string;
    year: string;
  };
}

const translations: Record<Language, Translations> = {
  en: {
    nav: {
      review: "Review",
      tracks: "Tracks",
      credits: "Credits",
      vol: "The Fall Off / Vol. 1"
    },
    hero: {
      chapter: "The Final Chapter",
      label: "Dreamville Records"
    },
    marquee: {
      strip1: "THE FALL OFF — A MASTERPIECE — J. COLE — 2025 — DREAMVILLE —",
      strip2: "LEGENDARY STATUS — NORTH CAROLINA — THE CLIMB BACK —"
    },
    review: {
      title: "A KING\nBOWS\nOUT",
      rating: "RATING",
      genre: "GENRE",
      runtime: "RUNTIME",
      mainText: "\"The Fall Off\" isn't a decline; it's a controlled demolition of the throne he built, leaving nothing but dust and legacy.",
      subText: "For years, Jermaine Cole teased this moment. The final act. The closing curtain. Where other rappers fade into obscurity or tarnish their discography with lackluster attempts to stay relevant, Cole has orchestrated his exit with the precision of a grandmaster. This album feels heavy—not in a burdensome way, but with the gravitational pull of a planet. It is dense, intricate, and brutally honest.",
      highlight: "It sounds like a man who has conquered the mountain and is now looking for a way to fly off it.",
      prodTitle: "Production",
      prodText: "The beats are dusty, soulful, yet pierced with futuristic synths that create a sense of timelessness. Cole produces roughly 70% of the record himself, proving once again that his ear for sampling is unmatched in the modern era.",
      lyricTitle: "Lyricism",
      lyricText: "There are no wasted bars here. Every syllable serves a purpose. He tackles fatherhood, the industry, the fallacy of fame, and the hunger that initially drove him out of Fayetteville."
    },
    visuals: {
      title: "Visuals",
      gallery: "003 — GALLERY",
      view: "VIEW",
      captions: {
        cover: "The Fall Off — Official Cover",
        trailer: "Teaser Trailer",
        concept1: "Concept Art .001",
        visualizer: "Visualizer",
        concept2: "Concept Art .002"
      }
    },
    tracks: {
      title: "Tracklist",
      disc1: "Disc 1",
      disc2: "Disc 2"
    },
    footer: {
      labelTitle: "Label",
      designTitle: "Design",
      rights: "All Rights Reserved.",
      year: "Year: 2025"
    }
  },
  ru: {
    nav: {
      review: "Рецензия",
      tracks: "Треки",
      credits: "Титры",
      vol: "The Fall Off / Том 1"
    },
    hero: {
      chapter: "Последняя Глава",
      label: "Dreamville Records"
    },
    marquee: {
      strip1: "THE FALL OFF — ШЕДЕВР — J. COLE — 2025 — DREAMVILLE —",
      strip2: "ЛЕГЕНДАРНЫЙ СТАТУС — СЕВЕРНАЯ КАРОЛИНА — ПУТЬ НАВЕРХ —"
    },
    review: {
      title: "КОРОЛЬ\nУХОДИТ",
      rating: "РЕЙТИНГ",
      genre: "ЖАНР",
      runtime: "ВРЕМЯ",
      mainText: "\"The Fall Off\" — это не упадок; это контролируемый снос трона, который он построил, оставляя после себя лишь пыль и наследие.",
      subText: "Годами Джермейн Коул дразнил нас этим моментом. Финальный акт. Занавес. Там, где другие рэперы уходят в безвестность или портят дискографию слабыми попытками остаться актуальными, Коул срежиссировал свой уход с точностью гроссмейстера. Этот альбом ощущается тяжелым — не как бремя, а как гравитационное притяжение планеты. Он плотный, сложный и предельно честный.",
      highlight: "Это звучит как человек, который покорил вершину и теперь ищет способ улететь с неё.",
      prodTitle: "Продакшн",
      prodText: "Биты пыльные, душевные, но пронзенные футуристическими синтезаторами, создающими ощущение вневременности. Коул сам спродюсировал около 70% записи, еще раз доказав, что его слух на сэмплы не имеет равных в современную эпоху.",
      lyricTitle: "Лирика",
      lyricText: "Здесь нет лишних строк. Каждый слог служит цели. Он затрагивает темы отцовства, индустрии, ложности славы и того голода, который изначально вывел его из Фейетвилла."
    },
    visuals: {
      title: "Визуал",
      gallery: "003 — ГАЛЕРЕЯ",
      view: "СМОТРЕТЬ",
      captions: {
        cover: "The Fall Off — Обложка",
        trailer: "Тизер Трейлер",
        concept1: "Концепт Арт .001",
        visualizer: "Визуализатор",
        concept2: "Концепт Арт .002"
      }
    },
    tracks: {
      title: "Треклист",
      disc1: "Диск 1",
      disc2: "Диск 2"
    },
    footer: {
      labelTitle: "Лейбл",
      designTitle: "Дизайн",
      rights: "Все права защищены.",
      year: "Год: 2025"
    }
  }
};

interface LanguageContextType {
  language: Language;
  toggleLanguage: () => void;
  t: Translations;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('ru'); 

  useEffect(() => {
    document.documentElement.lang = language;
  }, [language]);

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'en' ? 'ru' : 'en');
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t: translations[language] }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
