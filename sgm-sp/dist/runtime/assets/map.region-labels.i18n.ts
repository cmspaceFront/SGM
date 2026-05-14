import type { Language } from "../shared/i18n";
import type { MapRegionLabel } from "./map.region-labels";

type LabelSpec = Omit<MapRegionLabel, "text"> & { textByLang: Record<Language, string> };

const LABELS: Record<string, LabelSpec> = {
  karakalpakstan: {
    dy: -8,
    fontSize: 16,
    textByLang: {
      uz: "Qoraqalpog‘iston\nRespublikasi",
      uz_cy: "Қорақалпоғистон\nРеспубликаси",
      ru: "Республика\nКаракалпакстан",
      en: "Republic of\nKarakalpakstan",
    },
  },

  // New grouped map ids (shape-*) — add as needed.
  "shape-3": {
    fontSize: 20,
    dx: -60,
    dy: -20,
    textByLang: {
      uz: "Xorazm",
      uz_cy: "Хоразм",
      ru: "Хорезм",
      en: "Khorezm",
    },
  },
  "shape-7": {
    fontSize: 32,
    dx: 0,
    dy: -20,
    textByLang: {
      uz: "Qoraqalpog‘iston\nRespublikasi",
      uz_cy: "Қорақалпоғистон\nРеспубликаси",
      ru: "Республика\nКаракалпакстан",
      en: "Republic of\nKarakalpakstan",
    },
  },
  "shape-162": {
    fontSize: 30,
    dx: 0,
    dy: 0,
    textByLang: {
      uz: "Navoiy",
      uz_cy: "Навоий",
      ru: "Навои",
      en: "Navoi",
    },
  },
  "shape-163": {
    fontSize: 30,
    dx: 0,
    dy: 0,
    textByLang: {
      uz: "Buxoro",
      uz_cy: "Бухоро",
      ru: "Бухара",
      en: "Bukhara",
    },
  },
  "shape-1": {
    fontSize: 25,
    dx: 0,
    dy: 20,
    textByLang: {
      uz: "Samarqand",
      uz_cy: "Самарқанд",
      ru: "Самарканд",
      en: "Samarkand",
    },
  },
  "shape-0": {
    fontSize: 30,
    dx: 0,
    dy: -20,
    textByLang: {
      uz: "Qashqadaryo",
      uz_cy: "Қашқадарё",
      ru: "Кашкадарья",
      en: "Kashkadarya",
    },
  },
  "shape-4": {
    fontSize: 24,
    dx: 10,
    dy: 0,
    textByLang: {
      uz: "Surxondaryo",
      uz_cy: "Сурхондарё",
      ru: "Сурхандарья",
      en: "Surkhandarya",
    },
  },
  "shape-5": {
    fontSize: 30,
    dx: -10,
    dy: 0,
    textByLang: {
      uz: "Jizzax",
      uz_cy: "Жиззах",
      ru: "Джизак",
      en: "Jizzakh",
    },
  },
  "shape-164": {
    fontSize: 20,
    dx: 10,
    dy: 0,
    textByLang: {
      uz: "Sirdaryo",
      uz_cy: "Сирдарё",
      ru: "Сырдарья",
      en: "Sirdarya",
    },
  },
  "shape-165": {
    fontSize: 25,
    dx: -15,
    dy: 0,
    textByLang: {
      uz: "Toshkent",
      uz_cy: "Тошкент",
      ru: "Ташкент",
      en: "Tashkent",
    },
  },
  "shape-166": {
    fontSize: 16,
    dx: -5,
    dy: 10,
    textByLang: {
      uz: "Namangan",
      uz_cy: "Наманган",
      ru: "Наманган",
      en: "Namangan",
    },
  },
  "shape-168": {
    fontSize: 20,
    dx: -5,
    dy: -5,
    textByLang: {
      uz: "Andijon",
      uz_cy: "Андижон",
      ru: "Андижан",
      en: "Andijan",
    },
  },
  "shape-2": {
    fontSize: 24,
    dx: 5,
    dy: -15,
    textByLang: {
      uz: "Farg‘ona",
      uz_cy: "Фарғона",
      ru: "Фергана",
      en: "Fergana",
    },
  },

  // Текущая версия `map.svg` использует технические id `r1..r14`.
  // Привязка ниже сделана под макет (подписи регионов на карте первой карточки).
  r1: {
    fontSize: 12,
    textByLang: { uz: "Xorazm", uz_cy: "Хоразм", ru: "Хорезм", en: "Khorezm" },
  },
  r2: {
    fontSize: 12,
    textByLang: { uz: "Buxoro", uz_cy: "Бухоро", ru: "Бухара", en: "Bukhara" },
  },
  r3: {
    fontSize: 12,
    textByLang: { uz: "Navoiy", uz_cy: "Навоий", ru: "Навои", en: "Navoi" },
  },
  r4: {
    fontSize: 12,
    textByLang: { uz: "Samarqand", uz_cy: "Самарқанд", ru: "Самарканд", en: "Samarkand" },
  },
  r5: {
    fontSize: 12,
    textByLang: { uz: "Jizzax", uz_cy: "Жиззах", ru: "Джизак", en: "Jizzakh" },
  },
  r6: {
    fontSize: 10,
    textByLang: { uz: "Sirdaryo", uz_cy: "Сирдарё", ru: "Сырдарья", en: "Sirdarya" },
  },
  r7: {
    fontSize: 12,
    textByLang: { uz: "Toshkent", uz_cy: "Тошкент", ru: "Ташкент", en: "Tashkent" },
  },
  r8: {
    fontSize: 10,
    textByLang: { uz: "Namangan", uz_cy: "Наманган", ru: "Наманган", en: "Namangan" },
  },
  r9: {
    fontSize: 10,
    textByLang: { uz: "Farg‘ona", uz_cy: "Фарғона", ru: "Фергана", en: "Fergana" },
  },
  r10: {
    fontSize: 10,
    textByLang: { uz: "Andijon", uz_cy: "Андижон", ru: "Андижан", en: "Andijan" },
  },
  r11: {
    fontSize: 11,
    textByLang: { uz: "Qashqadaryo", uz_cy: "Қашқадарё", ru: "Кашкадарья", en: "Kashkadarya" },
  },
  r12: {
    fontSize: 11,
    textByLang: { uz: "Surxondaryo", uz_cy: "Сурхондарё", ru: "Сурхандарья", en: "Surkhandarya" },
  },
};

export function getMapRegionLabels(lang: Language): Record<string, MapRegionLabel> {
  const out: Record<string, MapRegionLabel> = {};
  for (const [id, spec] of Object.entries(LABELS)) {
    out[id] = {
      text: spec.textByLang[lang],
      dx: spec.dx,
      dy: spec.dy,
      fontSize: spec.fontSize,
      maxWidth: spec.maxWidth,
    };
  }
  return out;
}

