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
      vol: "\"The Fall Off\" album"
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
      mainText: "J. Cole’s latest album is the double project “The Fall-Off,” a 24-track release split into Disc 29 and Disc 39 and presented as his final statement and an attempt to outdo his debut. It is not a flawless instant classic, but it is a highly ambitious project with several outstanding moments that stands well above most mainstream rap and comfortably ranks among the top three albums of his post-mixtape era.",
      subText: "The album is framed as a final chapter: Cole has said he spent ten years deliberately building toward this release as a personal challenge and a debt he felt he owed himself and hip-hop. Its dual structure works like a circle: a return home to Fayetteville and a journey through familiar themes—pride, death, relationships, the Ville—revisited with more age and experience. At its conceptual core is the idea of “falling off” as an inevitable stage in a cycle—not so much a career collapse as an acceptance of endings and a shift of focus from fame to family and legacy. The narrative framework holds together quite well, moving from a homecoming arc on the early Disc 29 tracks to the more philosophical, retrospective moments on Disc 39, where the protagonist is no longer trying to prove himself but to reconsider and reframe his journey.",
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
      vol: "Альбом \"The Fall-Off\""
    },
    hero: {
      chapter: "Последняя Глава",
      label: "Dreamville Records"
    },
    marquee: {
      strip1: "THE FALL OFF — J. COLE — 2025 — DREAMVILLE —",
      strip2: "ЛЕГЕНДАРНЫЙ СТАТУС — СПОКОЙНЫЙ ФИНАЛ — ПУТЬ НАВЕРХ И ОБРАТНО —"
    },
    review: {
      title: "КОРОЛЬ\nУХОДИТ",
      rating: "РЕЙТИНГ",
      genre: "ЖАНР",
      runtime: "ВРЕМЯ",
      mainText: "\"The Fall-Off\" — двойной альбом J. Cole, заявленный как его финальный релиз и попытка подвести итог карьере и “сделать лучшее, чем на дебюте”. Это не безупречная «нестареющая классика», но очень амбициозная, местами выдающаяся работа, которая на голову выше среднего уровня мейнстрим‑рэпа и уверенно входит в топ‑3 его дискографии пост‑микстейп‑эры.",
      subText: "Альбом подаётся как финальная глава: Cole прямо пишет, что 10 лет целенаправленно строил этот релиз как личный челлендж и “долг перед собой и хип‑хопом”.\nСтруктура двойного альбома выстроена как цикл: возвращение домой в Фейетвилл, движение по знакомым темам — гордость, смерть, отношения, «Ville», — но уже с опытом и возрастом.\nКонцептуальный центр — идея «падения» как неизбежного этапа цикла: не столько карьерный крах, сколько принятие конечности пути и смещение фокуса со славы на семью и наследие.\nПовествовательный каркас работает довольно стройно: от возвращения “домой” в ранних треках Disc 29 до более философских и ретроспективных моментов Disc 39, где герой уже не доказывает, а переосмысливает.",
      highlight: "Это звучит как человек, который покорил вершину и теперь ищет способ слезть с неё.",
      prodTitle: "Продакшн",
      prodText: "Продюсерский костяк: сам Cole, Ibrahim Hamad, T‑Minus, плюс Alchemist, Boi‑1da, FnZ и др., что задаёт смесь классического соула/бум‑бэпа с более современными, местами максимально насыщенными аранжировками.",
      prodText: "Часть критиков и фанатов отмечают чрезмерную «плоскость» звучания на ряде треков и спорное обилие пения, из‑за чего монументальный формат double album не всегда полностью оправдывается по динамике.",
      prodText: "Сильные продакшн‑моменты: драматичный «Bunce Road Blues» с яркой работой Alchemist и гостевыми партиями, которые вытягивают спорную идею с “пьяным дядей Future”. Треки вроде «Bombs in the Ville / Hit the Gas» и «Legacy» дают плотный, кинематографичный звук, соответствующий масштабам замысла.",
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
