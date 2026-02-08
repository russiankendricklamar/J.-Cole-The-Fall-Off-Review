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
      strip1: "THE FALL OFF — A MASTERPIECE — J. COLE — 2026 — DREAMVILLE —",
      strip2: "LEGENDARY STATUS — NORTH CAROLINA — THE CLIMB BACK —"
    },
    review: {
      title: "A KING\nBOWS\nOUT",
      rating: "RATING",
      genre: "GENRE",
      runtime: "RUNTIME",
      mainText: "J. Cole’s latest album is the double project “The Fall-Off,” a 24-track release split into Disc 29 and Disc 39 and presented as his final statement and an attempt to outdo his debut. It is not a flawless instant classic, but it is a highly ambitious project with several outstanding moments that stands well above most mainstream rap and comfortably ranks among the top three albums of his post-mixtape era.",
      subText: "The album is framed as a final chapter: Cole has said he spent ten years deliberately building toward this release as a personal challenge and a debt he felt he owed himself and hip-hop. Its dual structure works like a circle: a return home to Fayetteville and a journey through familiar themes—pride, death, relationships, the Ville – revisited with more age and experience. At its conceptual core is the idea of “falling off” as an inevitable stage in a cycle—not so much a career collapse as an acceptance of endings and a shift of focus from fame to family and legacy. The narrative framework holds together quite well, moving from a homecoming arc on the early Disc 29 tracks to the more philosophical, retrospective moments on Disc 39, where the protagonist is no longer trying to prove himself but to reconsider and reframe his journey.",
      highlight: "It sounds like a man who has conquered the mountain and is now looking for a way to fly off it.",
      prodTitle: "Production",
      prodText: "The core production team consists of Cole himself, Ibrahim Hamad, T-Minus, plus The Alchemist, Boi-1da, FnZ and others, resulting in a blend of classic soul/boom‑bap with more modern and at times densely layered arrangements. Some critics and fans point to the sound being a bit too even and “flat” on certain songs and to the debatable amount of singing, which means the grand double‑album format doesn’t always feel fully justified in terms of dynamics. Among the strongest production moments is the dramatic “Bunce Road Blues”, driven by The Alchemist’s work and the guest appearances that help sell the risky concept of a “drunk Uncle Future”, while tracks like “Bombs in the Ville / Hit the Gas” and “Legacy” deliver a thick, cinematic sound that matches the scope of the album’s ambition. Overall, musically this is modern‑day Cole: more deliberate and occasionally experimental, but without a radical break from the aesthetics of “Forest Hills Drive” and “The Off‑Season” – it feels like evolution rather than revolution.",
      lyricTitle: "Lyricism",
      lyricText: "Lyrically, Cole stays in his familiar lane: reflection, social commentary, career growth, religion, family and a hometown‑driven narrative. “The Fall-Off Is Inevitable” on Disc 39 is widely singled out as a technical high point, built as a kind of reverse speed‑run through the protagonist’s life that recalls Nas’s “Rewind”, but stretched across an entire biography. “Safety”, “Poor Thang” and “Drum n Bass” on Disc 29 sketch a return to the city where, instead of a triumphant homecoming, he faces dead friends, tension and run‑ins with rivals, giving the first half a strong dramatic arc. The Disc 29 closer “Lonely at the Top” is a key moment: the peak he’s reached turns out to be emotionally hollow, and here Cole speaks with maximum honesty about the price he’s paid. The writing does have weak spots: cringeworthy punchlines and clichéd imagery pop up now and then, with critics especially pointing to a line on “WHO TF IZ U” and some flat passages on more melodic, vocally driven tracks, yet the average level of penmanship still sits above the genre norm and, at its best, this is truly top‑tier work."
    },
    visuals: {
      title: "Visuals",
      gallery: "003 — GALLERY",
      captions: {
        coverMain: "Official Cover",
        clipAmari: "Midnight",
        clipPunchin: "The Fall-Off is Inevitable",
        trailerPressure: "THE FALL-OFF ANNOUNCEMENT",
        clipInterlude: "Two Six",
        coverCD: "CD Cover"
      }
    },
    tracks: {
      title: "Tracklist",
      disc1: "Disc 29",
      disc2: "Disc 39"
    },
    footer: {
      labelTitle: "Label",
      designTitle: "Design",
      rights: "All Rights Reserved.",
      year: "Year: 2026"
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
      strip1: "THE FALL OFF — J. COLE — 2026 — DREAMVILLE —",
      strip2: "ЛЕГЕНДАРНЫЙ СТАТУС — СПОКОЙНЫЙ ФИНАЛ — ПУТЬ НАВЕРХ И ОБРАТНО —"
    },
    review: {
      title: "КОРОЛЬ\nУХОДИТ",
      rating: "РЕЙТИНГ",
      genre: "ЖАНР",
      runtime: "ХРОНОМЕТРАЖ",
      mainText: "\"The Fall-Off\" — двойной альбом J. Cole, заявленный как его финальный релиз и попытка подвести итог карьере и “сделать лучшее, чем на дебюте”. Это не безупречная «нестареющая классика», но очень амбициозная, местами выдающаяся работа, которая на голову выше среднего уровня мейнстрим‑рэпа и уверенно входит в топ‑3 его дискографии пост‑микстейп‑эры.",
      subText: "Альбом подаётся как финальная глава: Cole прямо пишет, что 10 лет целенаправленно строил этот релиз как личный челлендж и “долг перед собой и хип‑хопом”.\nСтруктура двойного альбома выстроена как цикл: возвращение домой в Фейетвилл, движение по знакомым темам — гордость, смерть, отношения, «Ville», — но уже с опытом и возрастом.\nКонцептуальный центр — идея «падения» как неизбежного этапа цикла: не столько карьерный крах, сколько принятие конечности пути и смещение фокуса со славы на семью и наследие.\nПовествовательный каркас работает довольно стройно: от возвращения “домой” в ранних треках Disc 29 до более философских и ретроспективных моментов Disc 39, где герой уже не доказывает, а переосмысливает.",
      highlight: "Это звучит как человек, который покорил вершину и теперь ищет способ слезть с неё.",
      prodTitle: "Продакшн",
      prodText: "Продюсерский костяк: сам Cole, Ibrahim Hamad, T‑Minus, плюс Alchemist, Boi‑1da, FnZ и др., что задаёт смесь классического соула/бум‑бэпа с более современными, местами максимально насыщенными аранжировками.\nЧасть критиков и фанатов отмечают чрезмерную «плоскость» звучания на ряде треков и спорное обилие пения, из‑за чего монументальный формат double album не всегда полностью оправдывается по динамике.\nСильные продакшн‑моменты: драматичный «Bunce Road Blues» с яркой работой Alchemist и гостевыми партиями, которые вытягивают спорную идею с “пьяным дядей Future”. Треки вроде «Bombs in the Ville / Hit the Gas» и «Legacy» дают плотный, кинематографичный звук, соответствующий масштабам замысла.\nВ целом музыкально это “Modern Day Cole”: более выверенный, местами экспериментальный, но без радикального разрыва с эстетикой «Forest Hills Drive» и «The Off‑Season» — эволюция, а не революция.",
      lyricTitle: "Лирика",
      lyricText: "Лирически Cole остаётся в привычной зоне: рефлексия, социальные наблюдения, карьерная эволюция, религия, семья и hometown‑нарратив.\n«The Fall-Off Is Inevitable» на Disc 39 выделяют как технический пик: трек строится как “reverse speedrun” жизни героя, чем‑то напоминая приём «Rewind» у Nas, но растянутый на целую биографию.\n«Safety», «Poor Thang» и «Drum n Bass» на Disc 29 рисуют возвращение в город, где вместо триумфа — смерть друзей, напряжение и столкновение с оппонентами, что даёт хороший драматический вектор первой половине.\nФинал Disc 29 — «Lonely at the Top» — важная точка: достигнутый пик оказывается эмоционально пустым, и здесь Cole максимально честно проговаривает цену своего пути.\n"
    },
    visuals: {
      title: "Визуал",
      gallery: "003 — ГАЛЕРЕЯ",
      captions: {
        coverMain: "Официальная Обложка",
        clipAmari: "Midnight",
        clipPunchin: "The Fall-Off is Inevitable",
        trailerPressure: "THE FALL-OFF ANNOUNCEMENT",
        clipInterlude: "Two Six",
        coverCD: "Обложка CD"
      }
    },
    tracks: {
      title: "Треклист",
      disc1: "Диск 29",
      disc2: "Диск 39"
    },
    footer: {
      labelTitle: "Лейбл",
      designTitle: "Дизайн",
      rights: "Все права защищены.",
      year: "Год: 2026"
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
  const [language, setLanguage] = useState<Language>('en'); 

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
