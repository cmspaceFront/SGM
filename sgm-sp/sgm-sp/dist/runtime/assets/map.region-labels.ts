export type MapRegionLabel = {
  text: string;
  dx?: number;
  dy?: number;
  /** Доп. смещение подписи при zoom-in (поверх dx/dy). */
  focusDx?: number;
  focusDy?: number;
  fontSize?: number;
  maxWidth?: number;
};

// Дополняй по мере объединения регионов в `map.region-groups.json`:
// ключи должны совпадать с `data-region="..."` в `map.svg`.
export const MAP_REGION_LABELS: Record<string, MapRegionLabel> = {
  karakalpakstan: {
    text: "Qoraqalpog‘iston\nRespublikasi",
    dy: -8,
    fontSize: 16,
  },

  // New grouped map ids (shape-*) — add as needed.
  "shape-3": { text: "Xorazm", fontSize: 20, dx: -60, dy: -20 },
  "shape-162": { text: "Navoiy", fontSize: 30, dx: 0, dy: 0 },
  "shape-163": { text: "Buxoro", fontSize: 30, dx: 0, dy: 0 },
  "shape-1": { text: "Samarqand", fontSize: 25, dx: 0, dy: 20 },
  "shape-0": { text: "Qashqadaryo", fontSize: 30, dx: 0, dy: -20 },
  "shape-4": { text: "Surxondaryo", fontSize: 24, dx: 10, dy: 0 },
  "shape-5": { text: "Jizzax", fontSize: 30, dx: -10, dy: 0 },
  "shape-164": { text: "Sirdaryo", fontSize: 20, dx: 10, dy: 0 },
  "shape-165": { text: "Toshkent", fontSize: 25, dx: -15, dy: 0 },
  "shape-166": { text: "Namangan", fontSize: 16, dx: -5, dy: 10 },
  "shape-168": { text: "Andijon", fontSize: 20, dx: -5, dy: -5 },
  "shape-2": { text: "Farg‘ona", fontSize: 24, dx: 5, dy: 8, focusDy: -22 },


  // Текущая версия `map.svg` использует технические id `r1..r14`.
  // Привязка ниже сделана под макет (подписи регионов на карте первой карточки).
  r1: { text: "Xorazm", fontSize: 12 },
  r2: { text: "Buxoro", fontSize: 12 },
  r3: { text: "Navoiy", fontSize: 12 },
  r4: { text: "Samarqand", fontSize: 12 },
  r5: { text: "Jizzax", fontSize: 12 },
  r6: { text: "Sirdaryo", fontSize: 10 },
  r7: { text: "Toshkent", fontSize: 12 },
  r8: { text: "Namangan", fontSize: 10 },
  r9: { text: "Farg‘ona", fontSize: 10 },
  r10: { text: "Andijon", fontSize: 10 },
  r11: { text: "Qashqadaryo", fontSize: 11 },
  r12: { text: "Surxondaryo", fontSize: 11 },
};

