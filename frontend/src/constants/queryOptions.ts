export const QUERY_OPTIONS = [
  {
    title: "Город - Район - Улица (По умолчанию)",
    query: "",
  },
  {
    title: "Страна - Город - Район - Улица - Дом - Жители",
    query:
      "?root=country&depth=city&depth=district&depth=street&depth=house&depth=resident",
  },
  {
    title: "Город - Улица - Жители",
    query: "?root=city&depth=street&depth=resident",
  },
  {
    title: "Страна - Город - Улица - Жители",
    query: "?root=country&depth=city&depth=street&depth=resident",
  },
  {
    title: "Район - Улица - Дом (без жителей)",
    query: "?root=district&depth=street&depth=house",
  },
];
