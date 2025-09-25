"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";

type FilterProps = {
  /** Server'dan gelen additionalInfoSections başlıkları */
  infoTitles?: string[];
};

/** Belirli başlıklar için dropdown seçenekleri (diğerleri text input olur) */
const INFO_OPTIONS: Record<string, string[]> = {
  // === Cam Rengi dropdown'ı ===
  "Cam Rengi": [
    "Kahverengi",
    "Degrade Füme",
    "Mavi",
    "Degrade Pembe",
    "Yeşil",
    "Sarı",
    "Mavi Aynalı",
    "Gümüş Aynalı",
    "Mavi Gold Aynalı",
    "Mor Bronz Aynalı",
    "Kırmızı Aynalı",
    "Mor Degrade",
    "Kahverengi Aynalı",
    "Turuncu",
    "Pembe Degrade",
    "Şeffaf Rose",
    "Kırmızı Degrade",
    "Füme Aynalı",
    "Turuncu Aynalı",
    "Kırmızı Sarı Aynalı",
    "Pembe Aynalı",
    "Yeşil Degrade",
    "Yeşil Aynalı",
    "Mor Aynalı",
    "Turuncu Degrade",
    "Gümüş Renkli Aynalı",
    "Sarı Degrade",
    "Gümüş Degrade",
    "Şeffaf Şablon",
    "Turkuaz",
  ],
  "Cerceve Rengi": [
  "Kahverengi Kırçıllı",
  "Gümüş",
  "Siyah",
  "Mavi",
  "Pembe",
  "Kahverengi",
  "Taba",
  "Şeffaf Gri",
  "Gri",
  "Gri Kırçıllı",
  "Gold",
  "Bej",
  "Beyaz",
  "Yeşil",
  "Şeffaf Mavi",
  "Lacivert",
],
"MARKA": [
  "Alain Mikli",
  "Alexander Mc Queen",
  "Armani Exchange",
  "Balenciaga",
  "Balmain",
  "Blancia",
  "Boss",
  "Bottega Veneta",
  "Burberry",
  "Bvlgari",
  "Calvin Klein",
  "Carolina Herrera",
  "Carrera",
  "Cartier",
  "Chopard",
  "Christian Dior",
  "David Beckham",
  "Dita",
  "Dolce Gabbana",
  "Dsquared 2",
  "Emporio Armani",
  "Escada",
  "Etnia Barcelona",
  "Etro",
  "Eyepetizer",
  "Fendi",
  "Ferrari Scuderia",
  "Fisher Price",
  "Forty Million",
  "Franco Vital",
  "Furla",
  "Giorgio Armani",
  "Gucci",
  "Guess",
  "Hally And Son",
  "Hawk",
  "Haze",
  "Hermossa",
  "Irresistor",
  "Jimmy Choo",
  "Kilian",
  "Lacoste",
  "Lindberg",
  "Lool",
  "Marc Jacobs",
  "Max & Co.",
  "Max Mara",
  "Michael Kors",
  "Michel Herbelin",
  "Michel Kors",
  "Missoni",
  "Miu Miu",
  "Modo",
  "Moncler",
  "Montblanc",
  "Moschino",
  "Movitra Milano",
  "Mustang",
  "Mykita",
  "NinoFlex",
  "Oakley",
  "Off-White",
  "Oliver Peoples",
  "Osse",
  "Persol",
  "Philipp Plein",
  "Phlipp Plein",
  "Polaroid",
  "Police",
  "Porsche Design",
  "Prada",
  "Prada Sport",
  "Rayban",
  "Redberry",
  "Roberto Cavalli",
  "Saint Laurent",
  "Serengeti",
  "Silhouette",
  "Smıth",
  "Spy",
  "Starck",
  "Swarovski",
  "Tag Heuer",
  "Tidou",
  "Tiffany & Co.",
  "Tom Ford",
  "Tomas Maıer",
  "Tommy Hilfiger",
  "Under Armour",
  "Valentino",
  "Versace",
  "Vogue",
  "Zegna",
],
"Ekartman": [
  "58","55","51","57","56","54","52","60","53","50","48","76","47","59","49"
],
// Filter.tsx -> INFO_OPTIONS içine EKLE
"Cerceve Sekli": [
  "Geometrik",
  "Dikdörtgen",
  "Yuvarlak",
  "Damla",
  "Kare",
  "Çekik",
  "Yekpare",
  "Oval",
  "Bombeli",
  "Çokgen",
  "Kelebek",
  "Armut",
  "Faset",
  "Nilör",
  "Club Master",
  // yaygın yazımlar (eşleşme şansını artırmak için)
  "Clubmaster",
  "Nylor"
],
// Filter.tsx -> INFO_OPTIONS içine EKLE
"Cerceve Tipi": [
  "Asetat",
  "Metal",
  "Çerçevesiz",
  "Titanyum",
  "Faset",
  // olası yazım (veride TR chars yoksa):
  "Cercevesiz"
],
"Cam Tipi": [
  "Organik",
  "Mineral",
  "Polikarbon",
  "Polikarbonat", // (bazı ürünlerde böyle geçebilir)
  "Demo"
],
"Cam Ozelligi": [
  "UV400",
  "UV 400",        // olası alternatif yazım
  "Polarize",
  "Photochromic",
  "Özelliksiz",
  "Ozelliksiz",    // TR chars'sız olasılık
  "Fotokromik"     // Photochromic için TR karşılık olasılığı
],
"Klipsli": [
  "Evet",
  "Hayır",
],

  // ileride başka başlıkları buraya ekleyebilirsin: "Frame Shape": [...], "LensMaterial": [...]
};

export default function Filter({ infoTitles = [] }: FilterProps) {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const { replace } = useRouter();

  const get = (k: string) => searchParams.get(k) ?? "";

  const handleFilterChange = (
    e: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>
  ) => {
    const { name, value } = e.target;
    const params = new URLSearchParams(searchParams);

    // sayfalamayı sıfırla
    params.set("page", "0");

    // boş/placeholder ise paramı sil
    if (!value || value === "Type" || value === "Sort By" || value === "Category") {
      params.delete(name);
    } else {
      params.set(name, value);
    }
    replace(`${pathname}?${params.toString()}`);
  };

  return (
    <div className="mt-12 flex flex-col gap-4 md:flex-row md:justify-between">
      <div className="flex gap-3 md:gap-6 flex-wrap">
        {/* TYPE */}
       

        {/* PRICE */}
        <input
          type="text"
          name="min"
          placeholder="min price"
          className="text-xs rounded-2xl pl-2 w-24 ring-1 ring-gray-400"
          value={get("min")}
          onChange={handleFilterChange}
        />
        <input
          type="text"
          name="max"
          placeholder="max price"
          className="text-xs rounded-2xl pl-2 w-24 ring-1 ring-gray-400"
          value={get("max")}
          onChange={handleFilterChange}
        />

        {/* CATEGORY (örnek) */}
      

        {/* === DİNAMİK additionalInfoSections alanları === */}
        {infoTitles.map((title) => {
          const paramKey = `info.${title}`; // URL: ?info.<Title>=<value>
          const options = INFO_OPTIONS[title]; // Dropdown tanımlı mı?

          if (options && options.length > 0) {
            // --- Dropdown (Cam Rengi vb.) ---
            return (
              <select
                key={title}
                name={paramKey}
                value={get(paramKey)}
                className="py-2 px-4 rounded-2xl text-xs font-medium bg-[#EBEDED]"
                onChange={handleFilterChange}
                title={`Filter by ${title}`}
              >
                <option value="">{title}</option>
                {options.map((opt) => (
                  <option key={opt} value={opt}>
                    {opt}
                  </option>
                ))}
              </select>
            );
          }

          // --- Varsayılan: serbest text input ---
          return (
            <input
              key={title}
              type="text"
              name={paramKey}
              placeholder={`${title} (value)`}
              className="text-xs rounded-2xl pl-2 w-44 ring-1 ring-gray-400"
              value={get(paramKey)}
              onChange={handleFilterChange}
              title={`Filter by ${title} (additionalInfoSections.description)`}
            />
          );
        })}

      
      </div>

      {/* SORT */}
      <div>
        <select
          name="sort"
          className="py-2 px-4 rounded-2xl text-xs font-medium bg-white ring-1 ring-gray-400"
          value={get("sort")}
          onChange={handleFilterChange}
        >
          <option value="">Sort By</option>
          <option value="asc price">Price (low to high)</option>
          <option value="desc price">Price (high to low)</option>
          <option value="desc lastUpdated">Newest</option>
          <option value="asc lastUpdated">Oldest</option>
        </select>
      </div>
    </div>
  );
}
