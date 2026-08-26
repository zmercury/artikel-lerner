/* ================================================================
   Artikel Trainer - app.js
   German vocabulary / article learning SRS app
   ================================================================ */

'use strict';

/* ============================================================
   DEFAULT VOCABULARY (Fallback for file:/// local browsing)
   ============================================================ */
const DEFAULT_VOCABULARY = [
  {
    "id": "tisch",
    "word": "Tisch",
    "article": "der",
    "plural": "Tische",
    "translation": "table",
    "category": "home"
  },
  {
    "id": "stuhl",
    "word": "Stuhl",
    "article": "der",
    "plural": "Stühle",
    "translation": "chair",
    "category": "home"
  },
  {
    "id": "schrank",
    "word": "Schrank",
    "article": "der",
    "plural": "Schränke",
    "translation": "cupboard / wardrobe",
    "category": "home"
  },
  {
    "id": "teppich",
    "word": "Teppich",
    "article": "der",
    "plural": "Teppiche",
    "translation": "carpet",
    "category": "home"
  },
  {
    "id": "spiegel",
    "word": "Spiegel",
    "article": "der",
    "plural": "Spiegel",
    "translation": "mirror",
    "category": "home"
  },
  {
    "id": "balkon",
    "word": "Balkon",
    "article": "der",
    "plural": "Balkone",
    "translation": "balcony",
    "category": "home"
  },
  {
    "id": "garten",
    "word": "Garten",
    "article": "der",
    "plural": "Gärten",
    "translation": "garden",
    "category": "home"
  },
  {
    "id": "schluessel",
    "word": "Schlüssel",
    "article": "der",
    "plural": "Schlüssel",
    "translation": "key",
    "category": "home"
  },
  {
    "id": "kuehlschrank",
    "word": "Kühlschrank",
    "article": "der",
    "plural": "Kühlschränke",
    "translation": "refrigerator",
    "category": "home"
  },
  {
    "id": "ofen",
    "word": "Ofen",
    "article": "der",
    "plural": "Öfen",
    "translation": "oven / stove",
    "category": "home"
  },
  {
    "id": "teller",
    "word": "Teller",
    "article": "der",
    "plural": "Teller",
    "translation": "plate",
    "category": "home"
  },
  {
    "id": "loeffel",
    "word": "Löffel",
    "article": "der",
    "plural": "Löffel",
    "translation": "spoon",
    "category": "home"
  },
  {
    "id": "muell",
    "word": "Müll",
    "article": "der",
    "plural": "",
    "translation": "trash / garbage",
    "category": "home"
  },
  {
    "id": "lampe",
    "word": "Lampe",
    "article": "die",
    "plural": "Lampen",
    "translation": "lamp",
    "category": "home"
  },
  {
    "id": "kueche",
    "word": "Küche",
    "article": "die",
    "plural": "Küchen",
    "translation": "kitchen",
    "category": "home"
  },
  {
    "id": "tuer",
    "word": "Tür",
    "article": "die",
    "plural": "Türen",
    "translation": "door",
    "category": "home"
  },
  {
    "id": "wand",
    "word": "Wand",
    "article": "die",
    "plural": "Wände",
    "translation": "wall",
    "category": "home"
  },
  {
    "id": "treppe",
    "word": "Treppe",
    "article": "die",
    "plural": "Treppen",
    "translation": "stairs / staircase",
    "category": "home"
  },
  {
    "id": "wohnung",
    "word": "Wohnung",
    "article": "die",
    "plural": "Wohnungen",
    "translation": "apartment",
    "category": "home"
  },
  {
    "id": "dusche",
    "word": "Dusche",
    "article": "die",
    "plural": "Duschen",
    "translation": "shower",
    "category": "home"
  },
  {
    "id": "waschmaschine",
    "word": "Waschmaschine",
    "article": "die",
    "plural": "Waschmaschinen",
    "translation": "washing machine",
    "category": "home"
  },
  {
    "id": "gabel",
    "word": "Gabel",
    "article": "die",
    "plural": "Gabeln",
    "translation": "fork",
    "category": "home"
  },
  {
    "id": "tasse",
    "word": "Tasse",
    "article": "die",
    "plural": "Tassen",
    "translation": "cup / mug",
    "category": "home"
  },
  {
    "id": "flasche",
    "word": "Flasche",
    "article": "die",
    "plural": "Flaschen",
    "translation": "bottle",
    "category": "home"
  },
  {
    "id": "uhr",
    "word": "Uhr",
    "article": "die",
    "plural": "Uhren",
    "translation": "clock / watch",
    "category": "home"
  },
  {
    "id": "decke",
    "word": "Decke",
    "article": "die",
    "plural": "Decken",
    "translation": "blanket / ceiling",
    "category": "home"
  },
  {
    "id": "bett",
    "word": "Bett",
    "article": "das",
    "plural": "Betten",
    "translation": "bed",
    "category": "home"
  },
  {
    "id": "fenster",
    "word": "Fenster",
    "article": "das",
    "plural": "Fenster",
    "translation": "window",
    "category": "home"
  },
  {
    "id": "zimmer",
    "word": "Zimmer",
    "article": "das",
    "plural": "Zimmer",
    "translation": "room",
    "category": "home"
  },
  {
    "id": "sofa",
    "word": "Sofa",
    "article": "das",
    "plural": "Sofas",
    "translation": "sofa / couch",
    "category": "home"
  },
  {
    "id": "regal",
    "word": "Regal",
    "article": "das",
    "plural": "Regale",
    "translation": "shelf",
    "category": "home"
  },
  {
    "id": "haus",
    "word": "Haus",
    "article": "das",
    "plural": "Häuser",
    "translation": "house",
    "category": "home"
  },
  {
    "id": "bad",
    "word": "Bad",
    "article": "das",
    "plural": "Bäder",
    "translation": "bathroom",
    "category": "home"
  },
  {
    "id": "messer",
    "word": "Messer",
    "article": "das",
    "plural": "Messer",
    "translation": "knife",
    "category": "home"
  },
  {
    "id": "glas",
    "word": "Glas",
    "article": "das",
    "plural": "Gläser",
    "translation": "drinking glass",
    "category": "home"
  },
  {
    "id": "kissen",
    "word": "Kissen",
    "article": "das",
    "plural": "Kissen",
    "translation": "pillow / cushion",
    "category": "home"
  },
  {
    "id": "bild",
    "word": "Bild",
    "article": "das",
    "plural": "Bilder",
    "translation": "picture / painting",
    "category": "home"
  },
  {
    "id": "licht",
    "word": "Licht",
    "article": "das",
    "plural": "Lichter",
    "translation": "light",
    "category": "home"
  },
  {
    "id": "apfel",
    "word": "Apfel",
    "article": "der",
    "plural": "Äpfel",
    "translation": "apple",
    "category": "food"
  },
  {
    "id": "kaese",
    "word": "Käse",
    "article": "der",
    "plural": "Käse",
    "translation": "cheese",
    "category": "food"
  },
  {
    "id": "kuchen",
    "word": "Kuchen",
    "article": "der",
    "plural": "Kuchen",
    "translation": "cake",
    "category": "food"
  },
  {
    "id": "joghurt",
    "word": "Joghurt",
    "article": "der",
    "plural": "Joghurts",
    "translation": "yoghurt",
    "category": "food"
  },
  {
    "id": "saft",
    "word": "Saft",
    "article": "der",
    "plural": "Säfte",
    "translation": "juice",
    "category": "food"
  },
  {
    "id": "kaffee",
    "word": "Kaffee",
    "article": "der",
    "plural": "Kaffees",
    "translation": "coffee",
    "category": "food"
  },
  {
    "id": "tee",
    "word": "Tee",
    "article": "der",
    "plural": "Tees",
    "translation": "tea",
    "category": "food"
  },
  {
    "id": "wein",
    "word": "Wein",
    "article": "der",
    "plural": "Weine",
    "translation": "wine",
    "category": "food"
  },
  {
    "id": "zucker",
    "word": "Zucker",
    "article": "der",
    "plural": "",
    "translation": "sugar",
    "category": "food"
  },
  {
    "id": "pfeffer",
    "word": "Pfeffer",
    "article": "der",
    "plural": "",
    "translation": "pepper",
    "category": "food"
  },
  {
    "id": "fisch",
    "word": "Fisch",
    "article": "der",
    "plural": "Fische",
    "translation": "fish",
    "category": "food"
  },
  {
    "id": "reis",
    "word": "Reis",
    "article": "der",
    "plural": "",
    "translation": "rice",
    "category": "food"
  },
  {
    "id": "salat",
    "word": "Salat",
    "article": "der",
    "plural": "Salate",
    "translation": "salad / lettuce",
    "category": "food"
  },
  {
    "id": "schinken",
    "word": "Schinken",
    "article": "der",
    "plural": "Schinken",
    "translation": "ham",
    "category": "food"
  },
  {
    "id": "kartoffel",
    "word": "Kartoffel",
    "article": "die",
    "plural": "Kartoffeln",
    "translation": "potato",
    "category": "food"
  },
  {
    "id": "tomate",
    "word": "Tomate",
    "article": "die",
    "plural": "Tomaten",
    "translation": "tomato",
    "category": "food"
  },
  {
    "id": "zwiebel",
    "word": "Zwiebel",
    "article": "die",
    "plural": "Zwiebeln",
    "translation": "onion",
    "category": "food"
  },
  {
    "id": "banane",
    "word": "Banane",
    "article": "die",
    "plural": "Bananen",
    "translation": "banana",
    "category": "food"
  },
  {
    "id": "suppe",
    "word": "Suppe",
    "article": "die",
    "plural": "Suppen",
    "translation": "soup",
    "category": "food"
  },
  {
    "id": "milch",
    "word": "Milch",
    "article": "die",
    "plural": "",
    "translation": "milk",
    "category": "food"
  },
  {
    "id": "butter",
    "word": "Butter",
    "article": "die",
    "plural": "",
    "translation": "butter",
    "category": "food"
  },
  {
    "id": "schokolade",
    "word": "Schokolade",
    "article": "die",
    "plural": "Schokoladen",
    "translation": "chocolate",
    "category": "food"
  },
  {
    "id": "orange",
    "word": "Orange",
    "article": "die",
    "plural": "Orangen",
    "translation": "orange",
    "category": "food"
  },
  {
    "id": "erdbeere",
    "word": "Erdbeere",
    "article": "die",
    "plural": "Erdbeeren",
    "translation": "strawberry",
    "category": "food"
  },
  {
    "id": "gurke",
    "word": "Gurke",
    "article": "die",
    "plural": "Gurken",
    "translation": "cucumber",
    "category": "food"
  },
  {
    "id": "wurst",
    "word": "Wurst",
    "article": "die",
    "plural": "Würste",
    "translation": "sausage",
    "category": "food"
  },
  {
    "id": "pizza",
    "word": "Pizza",
    "article": "die",
    "plural": "Pizzen",
    "translation": "pizza",
    "category": "food"
  },
  {
    "id": "brot",
    "word": "Brot",
    "article": "das",
    "plural": "Brote",
    "translation": "bread",
    "category": "food"
  },
  {
    "id": "broetchen",
    "word": "Brötchen",
    "article": "das",
    "plural": "Brötchen",
    "translation": "bread roll",
    "category": "food"
  },
  {
    "id": "ei",
    "word": "Ei",
    "article": "das",
    "plural": "Eier",
    "translation": "egg",
    "category": "food"
  },
  {
    "id": "gemuese",
    "word": "Gemüse",
    "article": "das",
    "plural": "Gemüse",
    "translation": "vegetables",
    "category": "food"
  },
  {
    "id": "obst",
    "word": "Obst",
    "article": "das",
    "plural": "",
    "translation": "fruit",
    "category": "food"
  },
  {
    "id": "fleisch",
    "word": "Fleisch",
    "article": "das",
    "plural": "",
    "translation": "meat",
    "category": "food"
  },
  {
    "id": "haehnchen",
    "word": "Hähnchen",
    "article": "das",
    "plural": "Hähnchen",
    "translation": "chicken (meat)",
    "category": "food"
  },
  {
    "id": "wasser",
    "word": "Wasser",
    "article": "das",
    "plural": "Wässer",
    "translation": "water",
    "category": "food"
  },
  {
    "id": "bier",
    "word": "Bier",
    "article": "das",
    "plural": "Biere",
    "translation": "beer",
    "category": "food"
  },
  {
    "id": "salz",
    "word": "Salz",
    "article": "das",
    "plural": "",
    "translation": "salt",
    "category": "food"
  },
  {
    "id": "oel",
    "word": "Öl",
    "article": "das",
    "plural": "Öle",
    "translation": "oil",
    "category": "food"
  },
  {
    "id": "eis",
    "word": "Eis",
    "article": "das",
    "plural": "",
    "translation": "ice cream / ice",
    "category": "food"
  },
  {
    "id": "fruehstueck",
    "word": "Frühstück",
    "article": "das",
    "plural": "Frühstücke",
    "translation": "breakfast",
    "category": "food"
  },
  {
    "id": "abendessen",
    "word": "Abendessen",
    "article": "das",
    "plural": "Abendessen",
    "translation": "dinner / supper",
    "category": "food"
  },
  {
    "id": "stift",
    "word": "Stift",
    "article": "der",
    "plural": "Stifte",
    "translation": "pen",
    "category": "school"
  },
  {
    "id": "bleistift",
    "word": "Bleistift",
    "article": "der",
    "plural": "Bleistifte",
    "translation": "pencil",
    "category": "school"
  },
  {
    "id": "radiergummi",
    "word": "Radiergummi",
    "article": "der",
    "plural": "Radiergummis",
    "translation": "eraser",
    "category": "school"
  },
  {
    "id": "rucksack",
    "word": "Rucksack",
    "article": "der",
    "plural": "Rucksäcke",
    "translation": "backpack",
    "category": "school"
  },
  {
    "id": "lehrer",
    "word": "Lehrer",
    "article": "der",
    "plural": "Lehrer",
    "translation": "male teacher",
    "category": "school"
  },
  {
    "id": "schueler",
    "word": "Schüler",
    "article": "der",
    "plural": "Schüler",
    "translation": "male student",
    "category": "school"
  },
  {
    "id": "student",
    "word": "Student",
    "article": "der",
    "plural": "Studenten",
    "translation": "university student",
    "category": "school"
  },
  {
    "id": "kurs",
    "word": "Kurs",
    "article": "der",
    "plural": "Kurse",
    "translation": "course / class",
    "category": "school"
  },
  {
    "id": "beruf",
    "word": "Beruf",
    "article": "der",
    "plural": "Berufe",
    "translation": "profession / job",
    "category": "school"
  },
  {
    "id": "text",
    "word": "Text",
    "article": "der",
    "plural": "Texte",
    "translation": "text",
    "category": "school"
  },
  {
    "id": "fehler",
    "word": "Fehler",
    "article": "der",
    "plural": "Fehler",
    "translation": "mistake / error",
    "category": "school"
  },
  {
    "id": "schule",
    "word": "Schule",
    "article": "die",
    "plural": "Schulen",
    "translation": "school",
    "category": "school"
  },
  {
    "id": "universitaet",
    "word": "Universität",
    "article": "die",
    "plural": "Universitäten",
    "translation": "university",
    "category": "school"
  },
  {
    "id": "tafel",
    "word": "Tafel",
    "article": "die",
    "plural": "Tafeln",
    "translation": "blackboard",
    "category": "school"
  },
  {
    "id": "klasse",
    "word": "Klasse",
    "article": "die",
    "plural": "Klassen",
    "translation": "class / classroom",
    "category": "school"
  },
  {
    "id": "pruefung",
    "word": "Prüfung",
    "article": "die",
    "plural": "Prüfungen",
    "translation": "exam / test",
    "category": "school"
  },
  {
    "id": "hausaufgabe",
    "word": "Hausaufgabe",
    "article": "die",
    "plural": "Hausaufgaben",
    "translation": "homework",
    "category": "school"
  },
  {
    "id": "frage",
    "word": "Frage",
    "article": "die",
    "plural": "Fragen",
    "translation": "question",
    "category": "school"
  },
  {
    "id": "antwort",
    "word": "Antwort",
    "article": "die",
    "plural": "Antworten",
    "translation": "answer",
    "category": "school"
  },
  {
    "id": "lehrerin",
    "word": "Lehrerin",
    "article": "die",
    "plural": "Lehrerinnen",
    "translation": "female teacher",
    "category": "school"
  },
  {
    "id": "pause",
    "word": "Pause",
    "article": "die",
    "plural": "Pausen",
    "translation": "break / pause",
    "category": "school"
  },
  {
    "id": "sprache",
    "word": "Sprache",
    "article": "die",
    "plural": "Sprachen",
    "translation": "language",
    "category": "school"
  },
  {
    "id": "arbeit",
    "word": "Arbeit",
    "article": "die",
    "plural": "Arbeiten",
    "translation": "work / job",
    "category": "school"
  },
  {
    "id": "buch",
    "word": "Buch",
    "article": "das",
    "plural": "Bücher",
    "translation": "book",
    "category": "school"
  },
  {
    "id": "heft",
    "word": "Heft",
    "article": "das",
    "plural": "Hefte",
    "translation": "exercise book / notebook",
    "category": "school"
  },
  {
    "id": "lineal",
    "word": "Lineal",
    "article": "das",
    "plural": "Lineale",
    "translation": "ruler",
    "category": "school"
  },
  {
    "id": "woerterbuch",
    "word": "Wörterbuch",
    "article": "das",
    "plural": "Wörterbücher",
    "translation": "dictionary",
    "category": "school"
  },
  {
    "id": "fach",
    "word": "Fach",
    "article": "das",
    "plural": "Fächer",
    "translation": "school subject",
    "category": "school"
  },
  {
    "id": "papier",
    "word": "Papier",
    "article": "das",
    "plural": "Papiere",
    "translation": "paper",
    "category": "school"
  },
  {
    "id": "wort",
    "word": "Wort",
    "article": "das",
    "plural": "Wörter",
    "translation": "word",
    "category": "school"
  },
  {
    "id": "beispiel",
    "word": "Beispiel",
    "article": "das",
    "plural": "Beispiele",
    "translation": "example",
    "category": "school"
  },
  {
    "id": "zeugnis",
    "word": "Zeugnis",
    "article": "das",
    "plural": "Zeugnisse",
    "translation": "report card / certificate",
    "category": "school"
  },
  {
    "id": "mann",
    "word": "Mann",
    "article": "der",
    "plural": "Männer",
    "translation": "man / husband",
    "category": "people"
  },
  {
    "id": "vater",
    "word": "Vater",
    "article": "der",
    "plural": "Väter",
    "translation": "father",
    "category": "people"
  },
  {
    "id": "mutter",
    "word": "Mutter",
    "article": "die",
    "plural": "Mütter",
    "translation": "mother",
    "category": "people"
  },
  {
    "id": "sohn",
    "word": "Sohn",
    "article": "der",
    "plural": "Söhne",
    "translation": "son",
    "category": "people"
  },
  {
    "id": "bruder",
    "word": "Bruder",
    "article": "der",
    "plural": "Brüder",
    "translation": "brother",
    "category": "people"
  },
  {
    "id": "freund",
    "word": "Freund",
    "article": "der",
    "plural": "Freunde",
    "translation": "male friend / boyfriend",
    "category": "people"
  },
  {
    "id": "opa",
    "word": "Opa",
    "article": "der",
    "plural": "Opas",
    "translation": "grandpa",
    "category": "people"
  },
  {
    "id": "onkel",
    "word": "Onkel",
    "article": "der",
    "plural": "Onkel",
    "translation": "uncle",
    "category": "people"
  },
  {
    "id": "arzt",
    "word": "Arzt",
    "article": "der",
    "plural": "Ärzte",
    "translation": "male doctor",
    "category": "people"
  },
  {
    "id": "nachbar",
    "word": "Nachbar",
    "article": "der",
    "plural": "Nachbarn",
    "translation": "neighbor",
    "category": "people"
  },
  {
    "id": "kollege",
    "word": "Kollege",
    "article": "der",
    "plural": "Kollegen",
    "translation": "colleague (male)",
    "category": "people"
  },
  {
    "id": "frau",
    "word": "Frau",
    "article": "die",
    "plural": "Frauen",
    "translation": "woman / wife / Ms.",
    "category": "people"
  },
  {
    "id": "tochter",
    "word": "Tochter",
    "article": "die",
    "plural": "Töchter",
    "translation": "daughter",
    "category": "people"
  },
  {
    "id": "schwester",
    "word": "Schwester",
    "article": "die",
    "plural": "Schwestern",
    "translation": "sister",
    "category": "people"
  },
  {
    "id": "freundin",
    "word": "Freundin",
    "article": "die",
    "plural": "Freundinnen",
    "translation": "female friend / girlfriend",
    "category": "people"
  },
  {
    "id": "oma",
    "word": "Oma",
    "article": "die",
    "plural": "Omas",
    "translation": "grandma",
    "category": "people"
  },
  {
    "id": "tante",
    "word": "Tante",
    "article": "die",
    "plural": "Tanten",
    "translation": "aunt",
    "category": "people"
  },
  {
    "id": "aerztin",
    "word": "Ärztin",
    "article": "die",
    "plural": "Ärztinnen",
    "translation": "female doctor",
    "category": "people"
  },
  {
    "id": "familie",
    "word": "Familie",
    "article": "die",
    "plural": "Familien",
    "translation": "family",
    "category": "people"
  },
  {
    "id": "person",
    "word": "Person",
    "article": "die",
    "plural": "Personen",
    "translation": "person",
    "category": "people"
  },
  {
    "id": "kind",
    "word": "Kind",
    "article": "das",
    "plural": "Kinder",
    "translation": "child",
    "category": "people"
  },
  {
    "id": "baby",
    "word": "Baby",
    "article": "das",
    "plural": "Babys",
    "translation": "baby",
    "category": "people"
  },
  {
    "id": "maedchen",
    "word": "Mädchen",
    "article": "das",
    "plural": "Mädchen",
    "translation": "girl",
    "category": "people"
  },
  {
    "id": "paar",
    "word": "Paar",
    "article": "das",
    "plural": "Paare",
    "translation": "couple / pair",
    "category": "people"
  },
  {
    "id": "bus",
    "word": "Bus",
    "article": "der",
    "plural": "Busse",
    "translation": "bus",
    "category": "transport"
  },
  {
    "id": "zug",
    "word": "Zug",
    "article": "der",
    "plural": "Züge",
    "translation": "train",
    "category": "transport"
  },
  {
    "id": "flughafen",
    "word": "Flughafen",
    "article": "der",
    "plural": "Flughäfen",
    "translation": "airport",
    "category": "transport"
  },
  {
    "id": "bahnhof",
    "word": "Bahnhof",
    "article": "der",
    "plural": "Bahnhöfe",
    "translation": "train station",
    "category": "transport"
  },
  {
    "id": "bahnsteig",
    "word": "Bahnsteig",
    "article": "der",
    "plural": "Bahnsteige",
    "translation": "platform",
    "category": "transport"
  },
  {
    "id": "urlaub",
    "word": "Urlaub",
    "article": "der",
    "plural": "Urlaube",
    "translation": "vacation / holiday",
    "category": "transport"
  },
  {
    "id": "koffer",
    "word": "Koffer",
    "article": "der",
    "plural": "Koffer",
    "translation": "suitcase",
    "category": "transport"
  },
  {
    "id": "pass",
    "word": "Pass",
    "article": "der",
    "plural": "Pässe",
    "translation": "passport",
    "category": "transport"
  },
  {
    "id": "strassenbahn",
    "word": "Straßenbahn",
    "article": "die",
    "plural": "Straßenbahnen",
    "translation": "tram / streetcar",
    "category": "transport"
  },
  {
    "id": "ubahn",
    "word": "U-Bahn",
    "article": "die",
    "plural": "U-Bahnen",
    "translation": "subway / metro",
    "category": "transport"
  },
  {
    "id": "fahrt",
    "word": "Fahrt",
    "article": "die",
    "plural": "Fahrten",
    "translation": "journey / trip / ride",
    "category": "transport"
  },
  {
    "id": "reise",
    "word": "Reise",
    "article": "die",
    "plural": "Reisen",
    "translation": "trip / travel",
    "category": "transport"
  },
  {
    "id": "haltestelle",
    "word": "Haltestelle",
    "article": "die",
    "plural": "Haltestellen",
    "translation": "bus/tram stop",
    "category": "transport"
  },
  {
    "id": "fahrkarte",
    "word": "Fahrkarte",
    "article": "die",
    "plural": "Fahrkarten",
    "translation": "ticket",
    "category": "transport"
  },
  {
    "id": "ampel",
    "word": "Ampel",
    "article": "die",
    "plural": "Ampeln",
    "translation": "traffic light",
    "category": "transport"
  },
  {
    "id": "auto",
    "word": "Auto",
    "article": "das",
    "plural": "Autos",
    "translation": "car",
    "category": "transport"
  },
  {
    "id": "flugzeug",
    "word": "Flugzeug",
    "article": "das",
    "plural": "Flugzeuge",
    "translation": "airplane",
    "category": "transport"
  },
  {
    "id": "fahrrad",
    "word": "Fahrrad",
    "article": "das",
    "plural": "Fahrräder",
    "translation": "bicycle",
    "category": "transport"
  },
  {
    "id": "schiff",
    "word": "Schiff",
    "article": "das",
    "plural": "Schiffe",
    "translation": "ship / boat",
    "category": "transport"
  },
  {
    "id": "motorrad",
    "word": "Motorrad",
    "article": "das",
    "plural": "Motorräder",
    "translation": "motorcycle",
    "category": "transport"
  },
  {
    "id": "taxi",
    "word": "Taxi",
    "article": "das",
    "plural": "Taxis",
    "translation": "taxi / cab",
    "category": "transport"
  },
  {
    "id": "ticket",
    "word": "Ticket",
    "article": "das",
    "plural": "Tickets",
    "translation": "ticket",
    "category": "transport"
  },
  {
    "id": "gleis",
    "word": "Gleis",
    "article": "das",
    "plural": "Gleise",
    "translation": "track / railway platform",
    "category": "transport"
  },
  {
    "id": "pullover",
    "word": "Pullover",
    "article": "der",
    "plural": "Pullover",
    "translation": "sweater / pullover",
    "category": "clothing"
  },
  {
    "id": "mantel",
    "word": "Mantel",
    "article": "der",
    "plural": "Mäntel",
    "translation": "coat",
    "category": "clothing"
  },
  {
    "id": "schuh",
    "word": "Schuh",
    "article": "der",
    "plural": "Schuhe",
    "translation": "shoe",
    "category": "clothing"
  },
  {
    "id": "stiefel",
    "word": "Stiefel",
    "article": "der",
    "plural": "Stiefel",
    "translation": "boot",
    "category": "clothing"
  },
  {
    "id": "hut",
    "word": "Hut",
    "article": "der",
    "plural": "Hüte",
    "translation": "hat",
    "category": "clothing"
  },
  {
    "id": "anzug",
    "word": "Anzug",
    "article": "der",
    "plural": "Anzüge",
    "translation": "suit",
    "category": "clothing"
  },
  {
    "id": "guertel",
    "word": "Gürtel",
    "article": "der",
    "plural": "Gürtel",
    "translation": "belt",
    "category": "clothing"
  },
  {
    "id": "rock",
    "word": "Rock",
    "article": "der",
    "plural": "Röcke",
    "translation": "skirt",
    "category": "clothing"
  },
  {
    "id": "regenschirm",
    "word": "Regenschirm",
    "article": "der",
    "plural": "Regenschirme",
    "translation": "umbrella",
    "category": "clothing"
  },
  {
    "id": "hose",
    "word": "Hose",
    "article": "die",
    "plural": "Hosen",
    "translation": "pants / trousers",
    "category": "clothing"
  },
  {
    "id": "jacke",
    "word": "Jacke",
    "article": "die",
    "plural": "Jacken",
    "translation": "jacket",
    "category": "clothing"
  },
  {
    "id": "muetze",
    "word": "Mütze",
    "article": "die",
    "plural": "Mützen",
    "translation": "beanie / cap",
    "category": "clothing"
  },
  {
    "id": "brille",
    "word": "Brille",
    "article": "die",
    "plural": "Brillen",
    "translation": "glasses / eyeglasses",
    "category": "clothing"
  },
  {
    "id": "tasche",
    "word": "Tasche",
    "article": "die",
    "plural": "Taschen",
    "translation": "bag / handbag",
    "category": "clothing"
  },
  {
    "id": "sonnenbrille",
    "word": "Sonnenbrille",
    "article": "die",
    "plural": "Sonnenbrillen",
    "translation": "sunglasses",
    "category": "clothing"
  },
  {
    "id": "socke",
    "word": "Socke",
    "article": "die",
    "plural": "Socken",
    "translation": "sock",
    "category": "clothing"
  },
  {
    "id": "tshirt",
    "word": "T-Shirt",
    "article": "das",
    "plural": "T-Shirts",
    "translation": "T-shirt",
    "category": "clothing"
  },
  {
    "id": "hemd",
    "word": "Hemd",
    "article": "das",
    "plural": "Hemden",
    "translation": "button-down shirt",
    "category": "clothing"
  },
  {
    "id": "kleid",
    "word": "Kleid",
    "article": "das",
    "plural": "Kleider",
    "translation": "dress",
    "category": "clothing"
  },
  {
    "id": "tuch",
    "word": "Tuch",
    "article": "das",
    "plural": "Tücher",
    "translation": "scarf / cloth",
    "category": "clothing"
  },
  {
    "id": "kopf",
    "word": "Kopf",
    "article": "der",
    "plural": "Köpfe",
    "translation": "head",
    "category": "body"
  },
  {
    "id": "arm",
    "word": "Arm",
    "article": "der",
    "plural": "Arme",
    "translation": "arm",
    "category": "body"
  },
  {
    "id": "fuss",
    "word": "Fuß",
    "article": "der",
    "plural": "Füße",
    "translation": "foot",
    "category": "body"
  },
  {
    "id": "finger",
    "word": "Finger",
    "article": "der",
    "plural": "Finger",
    "translation": "finger",
    "category": "body"
  },
  {
    "id": "mund",
    "word": "Mund",
    "article": "der",
    "plural": "Münder",
    "translation": "mouth",
    "category": "body"
  },
  {
    "id": "zahn",
    "word": "Zahn",
    "article": "der",
    "plural": "Zähne",
    "translation": "tooth",
    "category": "body"
  },
  {
    "id": "bauch",
    "word": "Bauch",
    "article": "der",
    "plural": "Bäuche",
    "translation": "belly / stomach",
    "category": "body"
  },
  {
    "id": "ruecken",
    "word": "Rücken",
    "article": "der",
    "plural": "Rücken",
    "translation": "back",
    "category": "body"
  },
  {
    "id": "hals",
    "word": "Hals",
    "article": "der",
    "plural": "Hälse",
    "translation": "neck / throat",
    "category": "body"
  },
  {
    "id": "koerper",
    "word": "Körper",
    "article": "der",
    "plural": "Körper",
    "translation": "body",
    "category": "body"
  },
  {
    "id": "hand",
    "word": "Hand",
    "article": "die",
    "plural": "Hände",
    "translation": "hand",
    "category": "body"
  },
  {
    "id": "nase",
    "word": "Nase",
    "article": "die",
    "plural": "Nasen",
    "translation": "nose",
    "category": "body"
  },
  {
    "id": "schulter",
    "word": "Schulter",
    "article": "die",
    "plural": "Schultern",
    "translation": "shoulder",
    "category": "body"
  },
  {
    "id": "brust",
    "word": "Brust",
    "article": "die",
    "plural": "Brüste",
    "translation": "chest / breast",
    "category": "body"
  },
  {
    "id": "gesundheit",
    "word": "Gesundheit",
    "article": "die",
    "plural": "",
    "translation": "health / bless you",
    "category": "body"
  },
  {
    "id": "medizin",
    "word": "Medizin",
    "article": "die",
    "plural": "Medizinen",
    "translation": "medicine",
    "category": "body"
  },
  {
    "id": "apotheke",
    "word": "Apotheke",
    "article": "die",
    "plural": "Apotheken",
    "translation": "pharmacy",
    "category": "body"
  },
  {
    "id": "auge",
    "word": "Auge",
    "article": "das",
    "plural": "Augen",
    "translation": "eye",
    "category": "body"
  },
  {
    "id": "ohr",
    "word": "Ohr",
    "article": "das",
    "plural": "Ohren",
    "translation": "ear",
    "category": "body"
  },
  {
    "id": "bein",
    "word": "Bein",
    "article": "das",
    "plural": "Beine",
    "translation": "leg",
    "category": "body"
  },
  {
    "id": "haar",
    "word": "Haar",
    "article": "das",
    "plural": "Haare",
    "translation": "hair",
    "category": "body"
  },
  {
    "id": "gesicht",
    "word": "Gesicht",
    "article": "das",
    "plural": "Gesichter",
    "translation": "face",
    "category": "body"
  },
  {
    "id": "herz",
    "word": "Herz",
    "article": "das",
    "plural": "Herzen",
    "translation": "heart",
    "category": "body"
  },
  {
    "id": "krankenhaus",
    "word": "Krankenhaus",
    "article": "das",
    "plural": "Krankenhäuser",
    "translation": "hospital",
    "category": "body"
  },
  {
    "id": "medikament",
    "word": "Medikament",
    "article": "das",
    "plural": "Medikamente",
    "translation": "medication / pill",
    "category": "body"
  },
  {
    "id": "park",
    "word": "Park",
    "article": "der",
    "plural": "Parks",
    "translation": "park",
    "category": "city"
  },
  {
    "id": "markt",
    "word": "Markt",
    "article": "der",
    "plural": "Märkte",
    "translation": "market",
    "category": "city"
  },
  {
    "id": "supermarkt",
    "word": "Supermarkt",
    "article": "der",
    "plural": "Supermärkte",
    "translation": "supermarket",
    "category": "city"
  },
  {
    "id": "platz",
    "word": "Platz",
    "article": "der",
    "plural": "Plätze",
    "translation": "square / place / seat",
    "category": "city"
  },
  {
    "id": "laden",
    "word": "Laden",
    "article": "der",
    "plural": "Läden",
    "translation": "shop / store",
    "category": "city"
  },
  {
    "id": "eingang",
    "word": "Eingang",
    "article": "der",
    "plural": "Eingänge",
    "translation": "entrance",
    "category": "city"
  },
  {
    "id": "ausgang",
    "word": "Ausgang",
    "article": "der",
    "plural": "Ausgänge",
    "translation": "exit",
    "category": "city"
  },
  {
    "id": "stadt",
    "word": "Stadt",
    "article": "die",
    "plural": "Städte",
    "translation": "city / town",
    "category": "city"
  },
  {
    "id": "strasse",
    "word": "Straße",
    "article": "die",
    "plural": "Straßen",
    "translation": "street / road",
    "category": "city"
  },
  {
    "id": "bank",
    "word": "Bank",
    "article": "die",
    "plural": "Banken",
    "translation": "bank (money)",
    "category": "city"
  },
  {
    "id": "post",
    "word": "Post",
    "article": "die",
    "plural": "",
    "translation": "post office / mail",
    "category": "city"
  },
  {
    "id": "kirche",
    "word": "Kirche",
    "article": "die",
    "plural": "Kirchen",
    "translation": "church",
    "category": "city"
  },
  {
    "id": "baeckerei",
    "word": "Bäckerei",
    "article": "die",
    "plural": "Bäckereien",
    "translation": "bakery",
    "category": "city"
  },
  {
    "id": "bibliothek",
    "word": "Bibliothek",
    "article": "die",
    "plural": "Bibliotheken",
    "translation": "library",
    "category": "city"
  },
  {
    "id": "hotel",
    "word": "Hotel",
    "article": "das",
    "plural": "Hotels",
    "translation": "hotel",
    "category": "city"
  },
  {
    "id": "restaurant",
    "word": "Restaurant",
    "article": "das",
    "plural": "Restaurants",
    "translation": "restaurant",
    "category": "city"
  },
  {
    "id": "cafe",
    "word": "Café",
    "article": "das",
    "plural": "Cafés",
    "translation": "cafe / coffee shop",
    "category": "city"
  },
  {
    "id": "kino",
    "word": "Kino",
    "article": "das",
    "plural": "Kinos",
    "translation": "cinema / movie theater",
    "category": "city"
  },
  {
    "id": "museum",
    "word": "Museum",
    "article": "das",
    "plural": "Museen",
    "translation": "museum",
    "category": "city"
  },
  {
    "id": "theater",
    "word": "Theater",
    "article": "das",
    "plural": "Theater",
    "translation": "theater",
    "category": "city"
  },
  {
    "id": "geschaeft",
    "word": "Geschäft",
    "article": "das",
    "plural": "Geschäfte",
    "translation": "shop / business",
    "category": "city"
  },
  {
    "id": "zentrum",
    "word": "Zentrum",
    "article": "das",
    "plural": "Zentren",
    "translation": "center / downtown",
    "category": "city"
  },
  {
    "id": "berg",
    "word": "Berg",
    "article": "der",
    "plural": "Berge",
    "translation": "mountain",
    "category": "nature"
  },
  {
    "id": "baum",
    "word": "Baum",
    "article": "der",
    "plural": "Bäume",
    "translation": "tree",
    "category": "nature"
  },
  {
    "id": "stein",
    "word": "Stein",
    "article": "der",
    "plural": "Steine",
    "translation": "stone / rock",
    "category": "nature"
  },
  {
    "id": "see",
    "word": "See",
    "article": "der",
    "plural": "Seen",
    "translation": "lake",
    "category": "nature"
  },
  {
    "id": "fluss",
    "word": "Fluss",
    "article": "der",
    "plural": "Flüsse",
    "translation": "river",
    "category": "nature"
  },
  {
    "id": "wald",
    "word": "Wald",
    "article": "der",
    "plural": "Wälder",
    "translation": "forest / woods",
    "category": "nature"
  },
  {
    "id": "himmel",
    "word": "Himmel",
    "article": "der",
    "plural": "",
    "translation": "sky / heaven",
    "category": "nature"
  },
  {
    "id": "mond",
    "word": "Mond",
    "article": "der",
    "plural": "Monde",
    "translation": "moon",
    "category": "nature"
  },
  {
    "id": "regen",
    "word": "Regen",
    "article": "der",
    "plural": "",
    "translation": "rain",
    "category": "nature"
  },
  {
    "id": "schnee",
    "word": "Schnee",
    "article": "der",
    "plural": "",
    "translation": "snow",
    "category": "nature"
  },
  {
    "id": "wind",
    "word": "Wind",
    "article": "der",
    "plural": "Winde",
    "translation": "wind",
    "category": "nature"
  },
  {
    "id": "hund",
    "word": "Hund",
    "article": "der",
    "plural": "Hunde",
    "translation": "dog",
    "category": "nature"
  },
  {
    "id": "vogel",
    "word": "Vogel",
    "article": "der",
    "plural": "Vögel",
    "translation": "bird",
    "category": "nature"
  },
  {
    "id": "sonne",
    "word": "Sonne",
    "article": "die",
    "plural": "Sonnen",
    "translation": "sun",
    "category": "nature"
  },
  {
    "id": "pflanze",
    "word": "Pflanze",
    "article": "die",
    "plural": "Pflanzen",
    "translation": "plant",
    "category": "nature"
  },
  {
    "id": "blume",
    "word": "Blume",
    "article": "die",
    "plural": "Blumen",
    "translation": "flower",
    "category": "nature"
  },
  {
    "id": "wiese",
    "word": "Wiese",
    "article": "die",
    "plural": "Wiesen",
    "translation": "meadow / lawn",
    "category": "nature"
  },
  {
    "id": "wolke",
    "word": "Wolke",
    "article": "die",
    "plural": "Wolken",
    "translation": "cloud",
    "category": "nature"
  },
  {
    "id": "luft",
    "word": "Luft",
    "article": "die",
    "plural": "",
    "translation": "air",
    "category": "nature"
  },
  {
    "id": "katze",
    "word": "Katze",
    "article": "die",
    "plural": "Katzen",
    "translation": "cat",
    "category": "nature"
  },
  {
    "id": "kuh",
    "word": "Kuh",
    "article": "die",
    "plural": "Kühe",
    "translation": "cow",
    "category": "nature"
  },
  {
    "id": "welt",
    "word": "Welt",
    "article": "die",
    "plural": "Welten",
    "translation": "world",
    "category": "nature"
  },
  {
    "id": "blatt",
    "word": "Blatt",
    "article": "das",
    "plural": "Blätter",
    "translation": "leaf / sheet",
    "category": "nature"
  },
  {
    "id": "meer",
    "word": "Meer",
    "article": "das",
    "plural": "Meere",
    "translation": "sea / ocean",
    "category": "nature"
  },
  {
    "id": "wetter",
    "word": "Wetter",
    "article": "das",
    "plural": "",
    "translation": "weather",
    "category": "nature"
  },
  {
    "id": "tier",
    "word": "Tier",
    "article": "das",
    "plural": "Tiere",
    "translation": "animal",
    "category": "nature"
  },
  {
    "id": "gras",
    "word": "Gras",
    "article": "das",
    "plural": "Gräser",
    "translation": "grass",
    "category": "nature"
  },
  {
    "id": "pferd",
    "word": "Pferd",
    "article": "das",
    "plural": "Pferde",
    "translation": "horse",
    "category": "nature"
  },
  {
    "id": "feuer",
    "word": "Feuer",
    "article": "das",
    "plural": "Feuer",
    "translation": "fire",
    "category": "nature"
  },
  {
    "id": "tag",
    "word": "Tag",
    "article": "der",
    "plural": "Tage",
    "translation": "day",
    "category": "time"
  },
  {
    "id": "monat",
    "word": "Monat",
    "article": "der",
    "plural": "Monate",
    "translation": "month",
    "category": "time"
  },
  {
    "id": "morgen",
    "word": "Morgen",
    "article": "der",
    "plural": "Morgen",
    "translation": "morning",
    "category": "time"
  },
  {
    "id": "abend",
    "word": "Abend",
    "article": "der",
    "plural": "Abende",
    "translation": "evening",
    "category": "time"
  },
  {
    "id": "mittag",
    "word": "Mittag",
    "article": "der",
    "plural": "Mittage",
    "translation": "midday / noon",
    "category": "time"
  },
  {
    "id": "sommer",
    "word": "Sommer",
    "article": "der",
    "plural": "Sommer",
    "translation": "summer",
    "category": "time"
  },
  {
    "id": "winter",
    "word": "Winter",
    "article": "der",
    "plural": "Winter",
    "translation": "winter",
    "category": "time"
  },
  {
    "id": "fruehling",
    "word": "Frühling",
    "article": "der",
    "plural": "Frühlinge",
    "translation": "spring (season)",
    "category": "time"
  },
  {
    "id": "herbst",
    "word": "Herbst",
    "article": "der",
    "plural": "Herbste",
    "translation": "autumn / fall",
    "category": "time"
  },
  {
    "id": "moment",
    "word": "Moment",
    "article": "der",
    "plural": "Momente",
    "translation": "moment",
    "category": "time"
  },
  {
    "id": "woche",
    "word": "Woche",
    "article": "die",
    "plural": "Wochen",
    "translation": "week",
    "category": "time"
  },
  {
    "id": "stunde",
    "word": "Stunde",
    "article": "die",
    "plural": "Stunden",
    "translation": "hour",
    "category": "time"
  },
  {
    "id": "minute",
    "word": "Minute",
    "article": "die",
    "plural": "Minuten",
    "translation": "minute",
    "category": "time"
  },
  {
    "id": "sekunde",
    "word": "Sekunde",
    "article": "die",
    "plural": "Sekunden",
    "translation": "second (time)",
    "category": "time"
  },
  {
    "id": "nacht",
    "word": "Nacht",
    "article": "die",
    "plural": "Nächte",
    "translation": "night",
    "category": "time"
  },
  {
    "id": "zeit",
    "word": "Zeit",
    "article": "die",
    "plural": "Zeiten",
    "translation": "time",
    "category": "time"
  },
  {
    "id": "jahreszeit",
    "word": "Jahreszeit",
    "article": "die",
    "plural": "Jahreszeiten",
    "translation": "season",
    "category": "time"
  },
  {
    "id": "jahr",
    "word": "Jahr",
    "article": "das",
    "plural": "Jahre",
    "translation": "year",
    "category": "time"
  },
  {
    "id": "datum",
    "word": "Datum",
    "article": "das",
    "plural": "Daten",
    "translation": "date (calendar)",
    "category": "time"
  },
  {
    "id": "wochenende",
    "word": "Wochenende",
    "article": "das",
    "plural": "Wochenenden",
    "translation": "weekend",
    "category": "time"
  },
  {
    "id": "computer",
    "word": "Computer",
    "article": "der",
    "plural": "Computer",
    "translation": "computer",
    "category": "technology"
  },
  {
    "id": "bildschirm",
    "word": "Bildschirm",
    "article": "der",
    "plural": "Bildschirme",
    "translation": "screen / monitor",
    "category": "technology"
  },
  {
    "id": "drucker",
    "word": "Drucker",
    "article": "der",
    "plural": "Drucker",
    "translation": "printer",
    "category": "technology"
  },
  {
    "id": "fernseher",
    "word": "Fernseher",
    "article": "der",
    "plural": "Fernseher",
    "translation": "television set",
    "category": "technology"
  },
  {
    "id": "laptop",
    "word": "Laptop",
    "article": "der",
    "plural": "Laptops",
    "translation": "laptop",
    "category": "technology"
  },
  {
    "id": "tastatur",
    "word": "Tastatur",
    "article": "die",
    "plural": "Tastaturen",
    "translation": "keyboard",
    "category": "technology"
  },
  {
    "id": "maus",
    "word": "Maus",
    "article": "die",
    "plural": "Mäuse",
    "translation": "mouse (computer/animal)",
    "category": "technology"
  },
  {
    "id": "kamera",
    "word": "Kamera",
    "article": "die",
    "plural": "Kameras",
    "translation": "camera",
    "category": "technology"
  },
  {
    "id": "nachricht",
    "word": "Nachricht",
    "article": "die",
    "plural": "Nachrichten",
    "translation": "message / news",
    "category": "technology"
  },
  {
    "id": "email",
    "word": "E-Mail",
    "article": "die",
    "plural": "E-Mails",
    "translation": "e-mail",
    "category": "technology"
  },
  {
    "id": "webseite",
    "word": "Webseite",
    "article": "die",
    "plural": "Webseiten",
    "translation": "website / webpage",
    "category": "technology"
  },
  {
    "id": "handy",
    "word": "Handy",
    "article": "das",
    "plural": "Handys",
    "translation": "mobile phone",
    "category": "technology"
  },
  {
    "id": "internet",
    "word": "Internet",
    "article": "das",
    "plural": "",
    "translation": "internet",
    "category": "technology"
  },
  {
    "id": "programm",
    "word": "Programm",
    "article": "das",
    "plural": "Programme",
    "translation": "program / software",
    "category": "technology"
  },
  {
    "id": "netzwerk",
    "word": "Netzwerk",
    "article": "das",
    "plural": "Netzwerke",
    "translation": "network",
    "category": "technology"
  },
  {
    "id": "radio",
    "word": "Radio",
    "article": "das",
    "plural": "Radios",
    "translation": "radio",
    "category": "technology"
  },
  {
    "id": "tablet",
    "word": "Tablet",
    "article": "das",
    "plural": "Tablets",
    "translation": "tablet computer",
    "category": "technology"
  },
  {
    "id": "passwort",
    "word": "Passwort",
    "article": "das",
    "plural": "Passwörter",
    "translation": "password",
    "category": "technology"
  }
];

function mergeVocabularyExtension(baseWords, extensionWords) {
  const seen = new Set(baseWords.map(w => w.id));
  extensionWords.forEach(word => {
    if (!seen.has(word.id)) {
      baseWords.push(word);
      seen.add(word.id);
    }
  });
  return baseWords;
}

async function loadExtendedVocabulary() {
  try {
    const res = await fetch('words.json');
    if (!res.ok) return null;
    const fetched = await res.json();
    return Array.isArray(fetched) ? fetched : null;
  } catch {
    return null;
  }
}

/* ============================================================
   CONSTANTS
   ============================================================ */
const LS_KEY_PROGRESS = 'artikel_trainer_progress';
const LS_KEY_SETTINGS = 'artikel_trainer_settings';
const LS_KEY_STREAK   = 'artikel_trainer_streak';

const LEVELS = ['new', 'learning', 'weak', 'review', 'strong', 'mastered'];

// SRS intervals in minutes per level
const SRS_INTERVALS = {
  new:      0,
  learning: 10,
  weak:     20,
  review:   120,
  strong:   1440,     // 1 day
  mastered: 10080     // 7 days
};

const MODES = [
  { id: 'article',      name: 'Article Mode',       icon: '🏷️',  desc: 'See noun → choose DER / DIE / DAS' },
  { id: 'article_word', name: 'Article + Word',      icon: '🔤',  desc: 'See translation → produce article + noun' },
  { id: 'plural',       name: 'Plural Mode',         icon: '🔢',  desc: 'See singular → type the plural' },
  { id: 'weak',         name: 'Weak Words',          icon: '⚠️',  desc: 'Focus on mistakes & low accuracy' },
  { id: 'mixed',        name: 'Mixed Mode',          icon: '🎲',  desc: 'Random mix of all question types' },
  { id: 'review',       name: 'Review Mode',         icon: '📅',  desc: 'Words currently due for review' },
];

/* ============================================================
   STATE
   ============================================================ */
let vocabulary  = DEFAULT_VOCABULARY.slice();       // raw words.json array
let progress    = {};       // { wordId: progressObj }
let settings    = { theme: 'light', activeMode: 'article', practiceCategory: 'all', audioEnabled: true, autoPronounce: true, speechRate: 0.9 };
let streakData  = { date: '', count: 0 };

let sessionStats = { correct: 0, wrong: 0, total: 0 };
let currentCard  = null;    // { word, mode, answered }
let lastWordId   = null;    // avoid immediate repeats
let selectedArticle = null; // for article+word mode pill selection

/* ============================================================
   AUDIO / GERMAN PRONUNCIATION
   ============================================================ */
let speechUnlocked = false;

function unlockAudioContext() {
  if (speechUnlocked) return;
  if ('speechSynthesis' in window) {
    try {
      window.speechSynthesis.resume();
      // Prime voices
      window.speechSynthesis.getVoices();
    } catch(e) {}
  }
  speechUnlocked = true;
}

document.addEventListener('click', unlockAudioContext, { once: false });
document.addEventListener('keydown', unlockAudioContext, { once: false });
document.addEventListener('touchstart', unlockAudioContext, { once: false });

function getGermanVoice() {
  if (!('speechSynthesis' in window)) return null;
  const voices = window.speechSynthesis.getVoices();
  if (!voices || voices.length === 0) return null;
  
  // 1. Direct de-DE match
  let voice = voices.find(v => v.lang === 'de-DE' || v.lang === 'de_DE');
  if (voice) return voice;

  // 2. Any German dialect (de-AT, de-CH, etc.)
  voice = voices.find(v => v.lang.toLowerCase().startsWith('de'));
  if (voice) return voice;

  // 3. Name contains German or Deutsch
  voice = voices.find(v => /german|deutsch/i.test(v.name));
  return voice || null;
}

function speakGerman(text) {
  if (!settings.audioEnabled || !text) return;
  const cleanText = text.trim();
  if (!cleanText) return;

  if (!('speechSynthesis' in window)) {
    console.warn('Speech synthesis not supported in this browser');
    return;
  }

  try {
    window.speechSynthesis.cancel();
    window.speechSynthesis.resume();

    const utterance = new SpeechSynthesisUtterance(cleanText);
    utterance.lang = 'de-DE';
    utterance.rate = Number(settings.speechRate) || 0.9;
    utterance.pitch = 1.0;
    utterance.volume = 1.0;

    const germanVoice = getGermanVoice();
    if (germanVoice) {
      utterance.voice = germanVoice;
    }

    utterance.onstart = () => {
      document.querySelectorAll('.card-audio-btn').forEach(btn => btn.classList.add('speaking'));
    };

    utterance.onend = utterance.onerror = () => {
      document.querySelectorAll('.card-audio-btn').forEach(btn => btn.classList.remove('speaking'));
    };

    window.speechSynthesis.speak(utterance);
  } catch(err) {
    console.warn('Speech synthesis execution error:', err);
    document.querySelectorAll('.card-audio-btn').forEach(btn => btn.classList.remove('speaking'));
  }
}

function speakCurrentCard(e) {
  if (e && e.stopPropagation) e.stopPropagation();
  if (!currentCard || !currentCard.word) return;
  const { word, mode } = currentCard;
  if (mode === 'plural') {
    speakGerman(word.plural ? `die ${word.plural}` : word.word);
  } else {
    speakGerman(`${word.article} ${word.word}`);
  }
}

/* ============================================================
   STRING NORMALIZATION / LENIENT GERMAN MATCHING
   ============================================================ */
function normalizeGerman(str) {
  return str
    .trim()
    .toLowerCase()
    .replace(/ä/g, 'ae')
    .replace(/ö/g, 'oe')
    .replace(/ü/g, 'ue')
    .replace(/ß/g, 'ss')
    .replace(/[\s\-_]+/g, '');
}

function matchGermanWord(userInput, expectedWord) {
  if (!userInput || !expectedWord) return false;
  const u = userInput.trim().toLowerCase();
  const e = expectedWord.trim().toLowerCase();
  if (u === e) return true;
  return normalizeGerman(u) === normalizeGerman(e);
}

/* ============================================================
   PERSISTENCE HELPERS
   ============================================================ */
function loadLS(key, fallback) {
  try {
    const raw = localStorage.getItem(key);
    return raw ? JSON.parse(raw) : fallback;
  } catch { return fallback; }
}

function saveLS(key, val) {
  try { localStorage.setItem(key, JSON.stringify(val)); }
  catch (e) { console.warn('localStorage write failed', e); }
}

/* ============================================================
   PROGRESS HELPERS
   ============================================================ */
function freshProgress(id) {
  return {
    id,
    attempts: 0,
    correct: 0,
    incorrect: 0,
    accuracy: 0,
    streak: 0,
    level: 'new',
    lastReviewed: null,
    nextReview: null,
    archived: false,
  };
}

function mergeProgress() {
  vocabulary.forEach(w => {
    if (!progress[w.id]) {
      progress[w.id] = freshProgress(w.id);
    }
  });
  saveLS(LS_KEY_PROGRESS, progress);
}

function updateProgress(id, correct) {
  const p = progress[id];
  if (!p) return;

  p.attempts++;
  if (correct) {
    p.correct++;
    p.streak++;
  } else {
    p.incorrect++;
    p.streak = 0;
  }
  p.accuracy = Math.round((p.correct / p.attempts) * 100);
  p.lastReviewed = Date.now();

  // Level transition
  if (correct) {
    if (p.level === 'new')      p.level = 'learning';
    else if (p.level === 'learning' && p.streak >= 2) p.level = 'review';
    else if (p.level === 'weak' && p.streak >= 3)     p.level = 'review';
    else if (p.level === 'review' && p.streak >= 3)   p.level = 'strong';
    else if (p.level === 'strong' && p.streak >= 5)   p.level = 'mastered';
  } else {
    if (p.level === 'mastered') p.level = 'strong';
    else if (p.level === 'strong')  p.level = 'review';
    else if (p.level === 'review')  p.level = 'weak';
    else if (p.level === 'learning') p.level = 'weak';
    if (p.level === 'new') p.level = 'weak';
  }

  // Set next review time
  const intervalMs = (SRS_INTERVALS[p.level] || 0) * 60 * 1000;
  p.nextReview = Date.now() + intervalMs;

  saveLS(LS_KEY_PROGRESS, progress);
}

/* ============================================================
   WORD SELECTION (weighted SRS)
   ============================================================ */
function wordWeight(word) {
  const p = progress[word.id];
  if (!p || p.archived) return 0;

  const now = Date.now();
  const isDue = !p.nextReview || p.nextReview <= now;

  let w = 1;
  if (p.level === 'new')      w = 12;
  if (p.level === 'learning') w = 8;
  if (p.level === 'weak')     w = 15;
  if (p.level === 'review')   w = isDue ? 10 : 3;
  if (p.level === 'strong')   w = isDue ? 5  : 1;
  if (p.level === 'mastered') w = isDue ? 3  : 0.3;

  // Accuracy penalty
  if (p.attempts > 0 && p.accuracy < 60) w *= 1.8;

  // Avoid picking last word immediately
  if (word.id === lastWordId) w *= 0.01;

  return w;
}

function pickEligibleWords(mode) {
  const activeVocab = vocabulary.filter(w => {
    if (!progress[w.id]) return false;
    if (progress[w.id].archived) return false;
    if (settings.practiceCategory !== 'all' && w.category !== settings.practiceCategory) return false;
    return true;
  });

  if (mode === 'weak') {
    return activeVocab.filter(w => {
      const p = progress[w.id];
      return p.level === 'weak' || (p.attempts > 0 && p.accuracy < 60);
    });
  }
  if (mode === 'review') {
    const now = Date.now();
    return activeVocab.filter(w => {
      const p = progress[w.id];
      return p.nextReview && p.nextReview <= now;
    });
  }
  return activeVocab;
}

function weightedRandom(words) {
  const weights = words.map(wordWeight);
  const total   = weights.reduce((s, w) => s + w, 0);
  if (total === 0) return words[Math.floor(Math.random() * words.length)];
  let r = Math.random() * total;
  for (let i = 0; i < words.length; i++) {
    r -= weights[i];
    if (r <= 0) return words[i];
  }
  return words[words.length - 1];
}

function pickNextCard(forceMode) {
  const mode = forceMode || settings.activeMode;

  // Determine actual question mode for mixed/weak/review
  let qMode = mode;
  if (mode === 'mixed' || mode === 'weak' || mode === 'review') {
    const pool = ['article', 'article_word', 'plural'];
    qMode = pool[Math.floor(Math.random() * pool.length)];
  }

  const eligible = pickEligibleWords(mode);
  if (eligible.length === 0) return null;

  // Filter out words with no plural for plural mode
  let pool = eligible;
  if (qMode === 'plural') {
    pool = eligible.filter(w => w.plural && w.plural.trim() !== '');
    if (pool.length === 0) {
      pool = eligible;
      qMode = 'article'; // Fallback if no plurals
    }
  }

  const word = weightedRandom(pool);
  return { word, mode: qMode, answered: false };
}

/* ============================================================
   UI HELPERS
   ============================================================ */
function $(sel, ctx = document) { return ctx.querySelector(sel); }
function $$(sel, ctx = document) { return [...ctx.querySelectorAll(sel)]; }

function showView(id) {
  $$('.view').forEach(v => v.classList.remove('active'));
  const el = document.getElementById(id);
  if (el) el.classList.add('active');
  $$('.nav-btn, .mobile-nav-btn').forEach(b => {
    b.classList.toggle('active', b.dataset.view === id);
  });
  // Toggle mobile practice mode body class for true full-screen immersion
  document.body.classList.toggle('practice-fullscreen', id === 'view-practice');
}

function toast(msg, type = 'info') {
  const container = document.getElementById('toast-container');
  if (!container) return;
  const el = document.createElement('div');
  el.className = `toast ${type}`;
  el.textContent = msg;
  container.appendChild(el);
  setTimeout(() => el.remove(), 3200);
}

function articleBadge(article) {
  return `<span class="article-badge badge-${article}">${article.toUpperCase()}</span>`;
}

function levelBadge(level) {
  return `<span class="level-badge level-${level}">${level}</span>`;
}

/* ============================================================
   STREAK
   ============================================================ */
function checkStreak() {
  const today = new Date().toDateString();
  if (streakData.date === today) return;
  const yesterday = new Date(Date.now() - 86400000).toDateString();
  if (streakData.date === yesterday) {
    streakData.count++;
  } else {
    streakData.count = 1;
  }
  streakData.date = today;
  saveLS(LS_KEY_STREAK, streakData);
}

/* ============================================================
   DASHBOARD
   ============================================================ */
const CAT_ICONS = {
  home: '🛋️',
  school: '📚',
  food: '🍎',
  transport: '🚗',
  people: '👥',
  nature: '🌲',
  technology: '💻',
  body: '🫀',
  clothing: '👕',
  city: '🏙️',
  time: '⏰',
  work: '💼',
  hobbies: '🎨',
  shopping: '🛒',
  health: '🏥'
};

function practiceCategory(cat) {
  settings.practiceCategory = cat;
  saveLS(LS_KEY_SETTINGS, settings);
  startMode(settings.activeMode || 'article');
}

function renderDashboard() {
  const total    = vocabulary.length;
  const active   = vocabulary.filter(w => progress[w.id] && !progress[w.id].archived);
  const mastered = active.filter(w => progress[w.id].level === 'mastered').length;
  const weak     = active.filter(w => progress[w.id].level === 'weak').length;
  const now      = Date.now();
  const due      = active.filter(w => {
    const p = progress[w.id];
    return p.nextReview && p.nextReview <= now;
  }).length;

  const totalAttempts = Object.values(progress).reduce((s, p) => s + (p.attempts || 0), 0);
  const totalCorrect  = Object.values(progress).reduce((s, p) => s + (p.correct  || 0), 0);
  const overallAcc    = totalAttempts ? Math.round((totalCorrect / totalAttempts) * 100) : 0;

  const elTotal = document.getElementById('stat-total');
  const elDue = document.getElementById('stat-due');
  const elMastered = document.getElementById('stat-mastered');
  const elWeak = document.getElementById('stat-weak');
  const elAcc = document.getElementById('stat-accuracy');
  const elStreak = document.getElementById('stat-streak');

  if (elTotal) elTotal.textContent = total;
  if (elDue) elDue.textContent = due;
  if (elMastered) elMastered.textContent = mastered;
  if (elWeak) elWeak.textContent = weak;
  if (elAcc) elAcc.textContent = overallAcc + '%';
  if (elStreak) elStreak.textContent = streakData.count;

  // Categories
  const cats = {};
  vocabulary.forEach(w => {
    if (!cats[w.category]) cats[w.category] = { total: 0, mastered: 0 };
    cats[w.category].total++;
    if (progress[w.id] && progress[w.id].level === 'mastered') cats[w.category].mastered++;
  });

  const cgrid = document.getElementById('category-grid');
  if (cgrid) {
    cgrid.innerHTML = '';
    Object.entries(cats).forEach(([cat, data]) => {
      const pct = data.total ? Math.round((data.mastered / data.total) * 100) : 0;
      const icon = CAT_ICONS[cat] || '📁';
      const card = document.createElement('div');
      card.className = 'category-card';
      card.innerHTML = `
        <div class="category-top-row">
          <div class="category-title-wrap">
            <span class="category-icon">${icon}</span>
            <span class="category-name">${cat}</span>
          </div>
          <span class="category-pill-action">Practice →</span>
        </div>
        <div class="progress-bar-wrap">
          <div class="progress-bar-fill" style="width:${pct}%"></div>
        </div>
        <div class="category-meta">
          <span>${data.mastered} / ${data.total} mastered</span>
          <span>${pct}%</span>
        </div>`;
      card.addEventListener('click', () => practiceCategory(cat));
      cgrid.appendChild(card);
    });
  }

  // Also refresh mode card badges
  renderModeCards();
}

/* ============================================================
   PRACTICE VIEW
   ============================================================ */
function startMode(modeId) {
  settings.activeMode = modeId;
  saveLS(LS_KEY_SETTINGS, settings);
  sessionStats = { correct: 0, wrong: 0, total: 0 };
  selectedArticle = null;
  showView('view-practice');
  updateModeLabel();
  loadNextCard();
}

function updateModeLabel() {
  const mode = MODES.find(m => m.id === settings.activeMode);
  const el = document.getElementById('mode-label');
  if (el) el.textContent = mode ? mode.name : '';
}

function updateSessionStats() {
  const elC = document.getElementById('session-correct');
  const elW = document.getElementById('session-wrong');
  const elT = document.getElementById('session-total');
  if (elC) elC.textContent = sessionStats.correct;
  if (elW) elW.textContent = sessionStats.wrong;
  if (elT) elT.textContent = sessionStats.total;
}

function loadNextCard() {
  currentCard = pickNextCard();
  selectedArticle = null;

  const card = document.getElementById('flash-card');
  if (card) {
    card.classList.remove('correct-flash', 'wrong-flash', 'card-animate');
    void card.offsetWidth; // reflow
    card.classList.add('card-animate');
  }

  const fb = document.getElementById('feedback-overlay');
  if (fb) fb.className = 'feedback-overlay';

  const nextBtn = document.getElementById('next-btn');
  if (nextBtn) nextBtn.classList.remove('visible');

  if (!currentCard) {
    renderNoWords();
    return;
  }

  renderCard(currentCard);
  updateSessionStats();
  updateWordMeta();
}

function renderNoWords() {
  const card = document.getElementById('flash-card');
  const mode = settings.activeMode;
  let title = 'No words to practice';
  let desc = 'No words match your current filters.';
  let showSwitchBtn = false;

  if (mode === 'weak') {
    title = '🌟 Great Job!';
    desc = 'You have no weak words right now. Words appear here when you make mistakes during practice.';
    showSwitchBtn = true;
  } else if (mode === 'review') {
    title = '🎉 All Caught Up!';
    desc = 'No words are currently due for review according to your spaced repetition schedule.';
    showSwitchBtn = true;
  } else if (settings.practiceCategory !== 'all') {
    title = 'Category Complete';
    desc = `No active words found in the "${settings.practiceCategory}" category.`;
  }

  if (card) {
    card.innerHTML = `
      <div class="empty-state">
        <div class="empty-state-icon">${mode === 'weak' ? '🌟' : (mode === 'review' ? '🎉' : '📚')}</div>
        <div style="font-size:1.3rem;font-weight:800;margin-bottom:0.5rem;color:var(--text);">${title}</div>
        <div class="empty-state-text" style="max-width:380px;margin:0 auto 1.5rem;">${desc}</div>
        <div style="display:flex;gap:0.75rem;justify-content:center;flex-wrap:wrap;">
          ${showSwitchBtn ? '<button class="btn btn-primary" onclick="startMode(\'article\')">Practice Article Mode</button>' : ''}
          <button class="btn btn-secondary" onclick="showView('view-dashboard')">Back to Dashboard</button>
        </div>
      </div>`;
  }
  const answerArea = document.getElementById('answer-area');
  if (answerArea) answerArea.innerHTML = '';
}

function renderCard(c) {
  const { word, mode } = c;
  const card = document.getElementById('flash-card');
  if (!card) return;

  let hint = '', question = '', sub = '';

  if (mode === 'article') {
    hint     = 'Choose the article';
    question = word.word;
    sub      = `"${word.translation}"`;
  } else if (mode === 'article_word') {
    hint     = 'Article + German noun';
    question = word.translation;
    sub      = 'Choose or type article + German noun';
  } else if (mode === 'plural') {
    hint     = 'What is the plural?';
    question = `${word.article} ${word.word}`;
    sub      = `"${word.translation}"`;
  }

  card.innerHTML = `
    <div style="display:flex;align-items:center;justify-content:space-between;width:100%;padding:0 0.5rem;">
      <span class="card-category-badge">${word.category}</span>
      <button class="card-audio-btn" onclick="speakCurrentCard(event)" title="Listen in German (P)" aria-label="Pronounce German word">🔊</button>
    </div>
    <div class="card-mode-hint">${hint}</div>
    <div class="card-question">${question}</div>
    ${sub ? `<div class="card-sub">${sub}</div>` : ''}
    <div class="feedback-overlay" id="feedback-overlay"></div>`;

  renderAnswerArea(mode);
}

function renderAnswerArea(mode) {
  const area = document.getElementById('answer-area');
  if (!area) return;

  if (mode === 'article') {
    area.innerHTML = `
      <div class="answer-buttons">
        <button class="article-btn btn-der" data-article="der" onclick="submitArticle('der')">
          <span class="key-hint">1</span>DER
        </button>
        <button class="article-btn btn-die" data-article="die" onclick="submitArticle('die')">
          <span class="key-hint">2</span>DIE
        </button>
        <button class="article-btn btn-das" data-article="das" onclick="submitArticle('das')">
          <span class="key-hint">3</span>DAS
        </button>
      </div>
      <button class="next-btn" id="next-btn" onclick="loadNextCard()">Next →</button>`;

  } else if (mode === 'article_word') {
    area.innerHTML = `
      <div class="article-select-row" id="article-pills" style="margin-bottom:0.75rem;">
        <button class="article-pill" data-a="der" onclick="selectArticlePill('der')">DER</button>
        <button class="article-pill" data-a="die" onclick="selectArticlePill('die')">DIE</button>
        <button class="article-pill" data-a="das" onclick="selectArticlePill('das')">DAS</button>
      </div>
      <div class="text-input-wrap">
        <input class="answer-input" id="word-input" type="text" placeholder="German noun or 'der Tisch'..." autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false" />
        <button class="submit-btn" onclick="submitArticleWord()">Check Answer ↵</button>
      </div>
      <button class="next-btn" id="next-btn" onclick="loadNextCard()">Next →</button>`;

    setTimeout(() => {
      const inp = document.getElementById('word-input');
      if (inp) {
        inp.addEventListener('keydown', e => {
          if (e.key === 'Enter') {
            e.preventDefault();
            if (!currentCard.answered) {
              submitArticleWord();
            } else {
              loadNextCard();
            }
          }
        });
        inp.focus();
      }
    }, 50);

  } else if (mode === 'plural') {
    area.innerHTML = `
      <div class="text-input-wrap">
        <input class="answer-input" id="plural-input" type="text" placeholder="Plural form (e.g. Tische or die Tische)..." autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false" />
        <button class="submit-btn" onclick="submitPlural()">Check Answer ↵</button>
      </div>
      <button class="next-btn" id="next-btn" onclick="loadNextCard()">Next →</button>`;

    setTimeout(() => {
      const inp = document.getElementById('plural-input');
      if (inp) {
        inp.addEventListener('keydown', e => {
          if (e.key === 'Enter') {
            e.preventDefault();
            if (!currentCard.answered) {
              submitPlural();
            } else {
              loadNextCard();
            }
          }
        });
        inp.focus();
      }
    }, 50);
  }
}

function selectArticlePill(art) {
  selectedArticle = art;
  $$('.article-pill').forEach(p => {
    p.className = 'article-pill';
    if (p.dataset.a === art) p.classList.add(`selected-${art}`);
  });
}

function submitArticle(chosen) {
  if (!currentCard || currentCard.answered) return;
  currentCard.answered = true;

  const { word } = currentCard;
  const correct  = chosen === word.article;

  // Style buttons
  $$('.article-btn').forEach(btn => {
    btn.disabled = true;
    if (btn.dataset.article === word.article) btn.classList.add('reveal-correct');
  });
  const chosenBtn = $(`.article-btn[data-article="${chosen}"]`);
  if (chosenBtn) chosenBtn.classList.add(correct ? 'selected-correct' : 'selected-wrong');

  showFeedback(correct, word);
  recordAnswer(correct);
}

function submitPlural() {
  if (!currentCard || currentCard.answered) return;
  const inp = document.getElementById('plural-input');
  if (!inp) return;

  let userVal = inp.value.trim();
  if (!userVal) {
    toast('Please enter the plural form', 'info');
    return;
  }

  // Remove leading "die " if user typed "die Tische"
  const match = userVal.match(/^die\s+(.+)$/i);
  if (match) {
    userVal = match[1].trim();
  }

  const expected = currentCard.word.plural.trim();
  currentCard.answered = true;
  const correct = matchGermanWord(userVal, expected);

  inp.disabled = true;
  inp.classList.add(correct ? 'input-correct' : 'input-wrong');
  const checkBtn = document.querySelector('.submit-btn');
  if (checkBtn) checkBtn.disabled = true;

  showFeedback(correct, currentCard.word);
  recordAnswer(correct);
}

function submitArticleWord() {
  if (!currentCard || currentCard.answered) return;
  const inp = document.getElementById('word-input');
  if (!inp) return;

  let rawVal = inp.value.trim();
  if (!rawVal && !selectedArticle) {
    toast('Please enter the German word and select or type its article', 'info');
    return;
  }

  // Check if user typed the article in the box, e.g. "der Tisch", "das buch", "die Lampe"
  let typedArticle = null;
  let typedNoun = rawVal;
  const match = rawVal.match(/^(der|die|das)\s+(.+)$/i);
  if (match) {
    typedArticle = match[1].toLowerCase();
    typedNoun = match[2].trim();
    selectArticlePill(typedArticle);
  }

  const finalArticle = typedArticle || selectedArticle;
  const expWord = currentCard.word.word;
  const expArt = currentCard.word.article;

  if (!finalArticle) {
    toast('Please select an article (DER, DIE, or DAS)', 'error');
    return;
  }

  const wordOk    = matchGermanWord(typedNoun, expWord);
  const articleOk = finalArticle === expArt;
  const correct   = wordOk && articleOk;

  currentCard.answered = true;
  inp.disabled = true;
  inp.classList.add(correct ? 'input-correct' : 'input-wrong');
  const checkBtn = document.querySelector('.submit-btn');
  if (checkBtn) checkBtn.disabled = true;

  // Reveal correct article pill
  $$('.article-pill').forEach(p => {
    p.style.pointerEvents = 'none';
    if (p.dataset.a === expArt) {
      p.className = 'article-pill selected-' + expArt;
    }
  });

  showFeedback(correct, currentCard.word, { articleOk, wordOk, finalArticle, typedNoun });
  recordAnswer(correct);
}

function showFeedback(correct, word, extra = {}) {
  if (settings.autoPronounce && settings.audioEnabled) {
    if (currentCard.mode === 'plural') {
      speakGerman(word.plural ? `die ${word.plural}` : word.word);
    } else {
      speakGerman(`${word.article} ${word.word}`);
    }
  }

  const card = document.getElementById('flash-card');
  if (!card) return;

  card.classList.remove('correct-flash', 'wrong-flash');
  void card.offsetWidth; // Force reflow
  card.classList.add(correct ? 'correct-flash' : 'wrong-flash');

  let resultDetail = '';
  if (!correct) {
    if (currentCard.mode === 'article') {
      resultDetail = `Correct article: <strong>${word.article.toUpperCase()}</strong>`;
    } else if (currentCard.mode === 'article_word') {
      if (!extra.articleOk && !extra.wordOk) {
        resultDetail = `Correct: <strong>${word.article.toUpperCase()} ${word.word}</strong>`;
      } else if (!extra.articleOk) {
        resultDetail = `Correct article: <strong>${word.article.toUpperCase()}</strong> (you chose ${extra.finalArticle ? extra.finalArticle.toUpperCase() : 'none'})`;
      } else {
        resultDetail = `Correct noun: <strong>${word.word}</strong>`;
      }
    } else if (currentCard.mode === 'plural') {
      resultDetail = `Correct plural: <strong>die ${word.plural}</strong>`;
    }
  }

  // Update card content to continuously show full German word and answer summary
  card.innerHTML = `
    <div class="card-answered-wrapper">
      <div class="result-banner ${correct ? 'result-correct' : 'result-wrong'}">
        <div style="font-size:1.05rem;letter-spacing:0.3px;">${correct ? '✅ Richtig!' : '❌ Falsch!'}</div>
        ${resultDetail ? `<div class="result-detail">${resultDetail}</div>` : ''}
      </div>

      <div class="answered-word-display">
        <div class="answered-main-row">
          <span class="article-badge badge-${word.article}">${word.article.toUpperCase()}</span>
          <span class="answered-word">${word.word}</span>
          <button class="card-audio-btn" onclick="speakGerman('${word.article} ${word.word}')" title="Listen (P)" aria-label="Listen">🔊</button>
        </div>

        ${word.plural ? `
        <div class="answered-meta-line">
          <span class="meta-label">Plural:</span>
          <strong style="color:var(--die);font-weight:700;">die ${word.plural}</strong>
          <button class="card-audio-btn" style="width:26px;height:26px;font-size:0.75rem;vertical-align:middle;margin-left:0.25rem;" onclick="speakGerman('die ${word.plural}')" title="Listen plural">🔊</button>
        </div>` : ''}

        <div class="answered-meta-line">
          <span class="meta-label">Meaning:</span>
          <em>"${word.translation}"</em>
        </div>
      </div>

      <span class="card-category-badge">${word.category}</span>
    </div>`;

  // Reveal next button
  const nextBtn = document.getElementById('next-btn');
  if (nextBtn) {
    nextBtn.classList.add('visible');
  }
}

function recordAnswer(correct) {
  if (!currentCard) return;
  sessionStats.total++;
  if (correct) sessionStats.correct++; else sessionStats.wrong++;
  updateSessionStats();
  updateProgress(currentCard.word.id, correct);
  lastWordId = currentCard.word.id;
  checkStreak();
  renderDashboard();
}

function updateWordMeta() {
  if (!currentCard) return;
  const p = progress[currentCard.word.id];
  if (!p) return;

  const metaRow = document.getElementById('word-meta-row');
  if (!metaRow) return;

  metaRow.innerHTML = `
    <span>${levelBadge(p.level)}</span>
    <div class="mini-accuracy-bar">
      <div class="mini-accuracy-fill" style="width:${p.accuracy || 0}%"></div>
    </div>
    <span>${p.accuracy || 0}% accuracy &nbsp;|&nbsp; streak ${p.streak}</span>`;
}

/* ============================================================
   VOCABULARY VIEW
   ============================================================ */
let vocabFilter = { search: '', article: 'all', category: 'all', status: 'all' };

function renderVocabView() {
  const cats = [...new Set(vocabulary.map(w => w.category))].sort();
  const catSel = document.getElementById('filter-category');
  if (catSel) {
    catSel.innerHTML = '<option value="all">All categories</option>' +
      cats.map(c => `<option value="${c}">${c}</option>`).join('');
  }
  renderVocabTable();
}

function renderVocabTable() {
  const search   = vocabFilter.search.toLowerCase();
  const article  = vocabFilter.article;
  const category = vocabFilter.category;
  const status   = vocabFilter.status;

  let words = vocabulary.filter(w => {
    const p = progress[w.id] || freshProgress(w.id);
    if (search && !w.word.toLowerCase().includes(search) && !w.translation.toLowerCase().includes(search)) return false;
    if (article !== 'all' && w.article !== article) return false;
    if (category !== 'all' && w.category !== category) return false;
    if (status === 'archived' && !p.archived) return false;
    if (status === 'weak'     && p.level !== 'weak') return false;
    if (status === 'mastered' && p.level !== 'mastered') return false;
    if (status === 'due') {
      const due = p.nextReview && p.nextReview <= Date.now();
      if (!due) return false;
    }
    if (status === 'active' && p.archived) return false;
    return true;
  });

  const countEl = document.getElementById('vocab-count');
  if (countEl) countEl.textContent = `${words.length} word${words.length !== 1 ? 's' : ''}`;

  const tbody = document.getElementById('vocab-tbody');
  if (!tbody) return;
  tbody.innerHTML = '';

  if (words.length === 0) {
    tbody.innerHTML = `<tr><td colspan="8" style="text-align:center;padding:2rem;color:var(--text-muted)">No words found</td></tr>`;
    return;
  }

  words.forEach(w => {
    const p = progress[w.id] || freshProgress(w.id);
    const tr = document.createElement('tr');
    if (p.archived) tr.classList.add('archived-row');
    tr.innerHTML = `
      <td>${articleBadge(w.article)}</td>
      <td><strong>${w.word}</strong></td>
      <td style="color:var(--text-muted)">${w.plural || '—'}</td>
      <td>${w.translation}</td>
      <td style="text-transform:capitalize;font-size:.8rem;color:var(--text-muted)">${w.category}</td>
      <td>${levelBadge(p.level)}</td>
      <td style="font-size:.8rem;color:var(--text-muted)">${p.accuracy}% (${p.attempts})</td>
      <td>
        <div class="row-actions">
          <button class="row-btn" title="Listen" onclick="speakGerman('${w.article} ${w.word}')">🔊</button>
          <button class="row-btn" title="Word details" onclick="openWordDetail('${w.id}')">📊</button>
          <button class="row-btn" title="${p.archived ? 'Unarchive' : 'Archive'}" onclick="toggleArchive('${w.id}')">${p.archived ? '📤' : '📦'}</button>
          <button class="row-btn danger" title="Reset progress" onclick="resetWordProgress('${w.id}')">🔄</button>
        </div>
      </td>`;
    tbody.appendChild(tr);
  });
}

function openWordDetail(id) {
  const word = vocabulary.find(w => w.id === id);
  const p    = progress[id] || freshProgress(id);
  if (!word) return;

  const nextReviewStr = p.nextReview
    ? new Date(p.nextReview).toLocaleString()
    : 'Not scheduled';
  const lastStr = p.lastReviewed
    ? new Date(p.lastReviewed).toLocaleString()
    : 'Never';

  openModal('word-detail-modal');
  const titleEl = document.getElementById('detail-modal-title');
  const bodyEl  = document.getElementById('detail-modal-body');

  if (titleEl) {
    titleEl.innerHTML = `
      ${word.article} ${word.word}
      <button class="card-audio-btn" style="width:30px;height:30px;font-size:0.9rem;vertical-align:middle;margin-left:0.5rem;" onclick="speakGerman('${word.article} ${word.word}')" title="Listen">🔊</button>
    `;
  }

  if (bodyEl) {
    bodyEl.innerHTML = `
      <div class="word-detail-grid">
        <div class="detail-item"><div class="detail-key">Translation</div><div class="detail-val">${word.translation}</div></div>
        <div class="detail-item"><div class="detail-key">Plural</div><div class="detail-val">${word.plural || '—'} ${word.plural ? `<button class="card-audio-btn" style="width:24px;height:24px;font-size:0.75rem;vertical-align:middle;margin-left:0.35rem;" onclick="speakGerman('die ${word.plural}')" title="Listen">🔊</button>` : ''}</div></div>
        <div class="detail-item"><div class="detail-key">Category</div><div class="detail-val" style="text-transform:capitalize">${word.category}</div></div>
        <div class="detail-item"><div class="detail-key">Level</div><div class="detail-val">${levelBadge(p.level)}</div></div>
        <div class="detail-item"><div class="detail-key">Attempts</div><div class="detail-val">${p.attempts}</div></div>
        <div class="detail-item"><div class="detail-key">Accuracy</div><div class="detail-val">${p.accuracy}%</div></div>
        <div class="detail-item"><div class="detail-key">Streak</div><div class="detail-val">${p.streak}</div></div>
        <div class="detail-item"><div class="detail-key">Last reviewed</div><div class="detail-val" style="font-size:.82rem">${lastStr}</div></div>
        <div class="detail-item"><div class="detail-key">Next review</div><div class="detail-val" style="font-size:.82rem">${nextReviewStr}</div></div>
        <div class="detail-item"><div class="detail-key">Archived</div><div class="detail-val">${p.archived ? 'Yes' : 'No'}</div></div>
      </div>`;
  }
}

function toggleArchive(id) {
  if (!progress[id]) progress[id] = freshProgress(id);
  progress[id].archived = !progress[id].archived;
  saveLS(LS_KEY_PROGRESS, progress);
  renderVocabTable();
  toast(progress[id].archived ? 'Word archived' : 'Word unarchived', 'info');
}

function resetWordProgress(id) {
  progress[id] = freshProgress(id);
  saveLS(LS_KEY_PROGRESS, progress);
  renderVocabTable();
  toast('Progress reset for word', 'info');
}

/* ============================================================
   MODAL
   ============================================================ */
function openModal(id) {
  const el = document.getElementById(id);
  if (el) el.classList.add('open');
}
function closeModal(id) {
  const el = document.getElementById(id);
  if (el) el.classList.remove('open');
}
function closeAllModals() {
  $$('.modal-backdrop').forEach(m => m.classList.remove('open'));
}

/* ============================================================
   SETTINGS VIEW
   ============================================================ */
function renderSettings() {
  const cats = [...new Set(vocabulary.map(w => w.category))].sort();
  const sel  = document.getElementById('setting-category');
  if (sel) {
    sel.innerHTML = '<option value="all">All categories</option>' +
      cats.map(c => `<option value="${c}">${c}</option>`).join('');
    sel.value = settings.practiceCategory || 'all';
  }

  const audioToggle = document.getElementById('setting-audio-enabled');
  if (audioToggle) audioToggle.checked = settings.audioEnabled !== false;

  const autoPronounce = document.getElementById('setting-auto-pronounce');
  if (autoPronounce) autoPronounce.checked = settings.autoPronounce !== false;

  const speechRate = document.getElementById('setting-speech-rate');
  const speedLabel = document.getElementById('speed-label');
  if (speechRate) {
    speechRate.value = settings.speechRate || 0.9;
    if (speedLabel) speedLabel.textContent = (settings.speechRate || 0.9) + 'x';
  }
}

/* ============================================================
   EXPORT / IMPORT
   ============================================================ */
function exportProgress() {
  const data = {
    exportedAt: new Date().toISOString(),
    version: 1,
    progress,
    settings,
    streakData,
  };
  const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
  const url  = URL.createObjectURL(blob);
  const a    = document.createElement('a');
  a.href     = url;
  a.download = `artikel-trainer-backup-${new Date().toISOString().slice(0,10)}.json`;
  a.click();
  URL.revokeObjectURL(url);
  toast('Progress exported!', 'success');
}

function importProgress(file) {
  if (!file) return;
  const reader = new FileReader();
  reader.onload = e => {
    try {
      const data = JSON.parse(e.target.result);
      if (!data.progress) throw new Error('Invalid backup file');
      progress   = data.progress;
      if (data.settings)   settings   = { ...settings,   ...data.settings };
      if (data.streakData) streakData = data.streakData;
      saveLS(LS_KEY_PROGRESS, progress);
      saveLS(LS_KEY_SETTINGS, settings);
      saveLS(LS_KEY_STREAK,   streakData);
      mergeProgress();
      renderDashboard();
      renderVocabView();
      toast('Progress imported successfully!', 'success');
    } catch(err) {
      toast('Import failed: ' + err.message, 'error');
    }
  };
  reader.readAsText(file);
}

/* ============================================================
   KEYBOARD SHORTCUTS
   ============================================================ */
document.addEventListener('keydown', e => {
  const tag = document.activeElement ? document.activeElement.tagName : '';
  const isInput = tag === 'INPUT' || tag === 'TEXTAREA';

  const practiceActive = document.getElementById('view-practice') && document.getElementById('view-practice').classList.contains('active');
  if (!practiceActive) return;

  // Audio pronunciation with 'P' (works even in input)
  if ((e.key === 'p' || e.key === 'P') && (e.ctrlKey || !isInput)) {
    e.preventDefault();
    speakCurrentCard();
    return;
  }

  // Next card with Space when not typing
  if (!isInput && currentCard && currentCard.answered) {
    if (e.key === ' ' || e.key === 'Enter') {
      e.preventDefault();
      loadNextCard();
      return;
    }
  }

  // Article mode numbers 1, 2, 3
  if (!isInput && currentCard && !currentCard.answered) {
    if (currentCard.mode === 'article') {
      if (e.key === '1') { e.preventDefault(); submitArticle('der'); }
      if (e.key === '2') { e.preventDefault(); submitArticle('die'); }
      if (e.key === '3') { e.preventDefault(); submitArticle('das'); }
    } else if (currentCard.mode === 'article_word') {
      if (e.key === '1') { e.preventDefault(); selectArticlePill('der'); }
      if (e.key === '2') { e.preventDefault(); selectArticlePill('die'); }
      if (e.key === '3') { e.preventDefault(); selectArticlePill('das'); }
    }
  }
});

/* ============================================================
   BOOT
   ============================================================ */
async function boot() {
  const saved = loadLS(LS_KEY_SETTINGS, {});
  settings    = { theme: 'light', activeMode: 'article', practiceCategory: 'all', audioEnabled: true, autoPronounce: true, speechRate: 0.9, ...saved };
  streakData  = loadLS(LS_KEY_STREAK, { date: '', count: 0 });
  progress    = loadLS(LS_KEY_PROGRESS, {});

  applyTheme(settings.theme);

  const fetchedVocabulary = await loadExtendedVocabulary();
  if (fetchedVocabulary && fetchedVocabulary.length > 0) {
    vocabulary = fetchedVocabulary;
  } else {
    vocabulary = DEFAULT_VOCABULARY.slice();
    console.info('Using embedded vocabulary dataset (serve via HTTP for the full word list)');
  }

  mergeProgress();

  renderDashboard();
  renderModeCards();
  renderVocabView();
  renderSettings();

  showView('view-dashboard');
}

/* ============================================================
   THEME
   ============================================================ */
function applyTheme(theme) {
  document.documentElement.dataset.theme = theme;
  settings.theme = theme;
  saveLS(LS_KEY_SETTINGS, settings);
  const btn = document.getElementById('theme-toggle');
  if (btn) btn.textContent = theme === 'dark' ? '☀️' : '🌙';
}

function toggleTheme() {
  applyTheme(settings.theme === 'dark' ? 'light' : 'dark');
}

/* ============================================================
   MODE CARDS
   ============================================================ */
function renderModeCards() {
  const grid = document.getElementById('mode-cards-grid');
  if (!grid) return;
  grid.innerHTML = '';

  const now = Date.now();
  const activeVocab = vocabulary.filter(w => progress[w.id] && !progress[w.id].archived);
  const weakCount = activeVocab.filter(w => progress[w.id].level === 'weak' || (progress[w.id].attempts > 0 && progress[w.id].accuracy < 60)).length;
  const dueCount = activeVocab.filter(w => progress[w.id].nextReview && progress[w.id].nextReview <= now).length;
  const pluralCount = activeVocab.filter(w => w.plural && w.plural.trim() !== '').length;

  MODES.forEach(m => {
    let badgeText = '';
    let badgeClass = '';
    if (m.id === 'article' || m.id === 'article_word') {
      badgeText = `${activeVocab.length} words`;
    } else if (m.id === 'plural') {
      badgeText = `${pluralCount} nouns`;
    } else if (m.id === 'weak') {
      badgeText = weakCount > 0 ? `${weakCount} weak` : '0 weak';
      badgeClass = weakCount > 0 ? 'badge-alert' : '';
    } else if (m.id === 'review') {
      badgeText = dueCount > 0 ? `${dueCount} due` : '0 due';
      badgeClass = dueCount > 0 ? 'badge-due' : '';
    } else if (m.id === 'mixed') {
      badgeText = 'Randomized';
    }

    const card = document.createElement('div');
    card.className = `mode-card ${settings.activeMode === m.id ? 'active-mode' : ''}`;
    card.innerHTML = `
      <div class="mode-card-header">
        <div class="mode-icon-box">${m.icon}</div>
        ${badgeText ? `<span class="mode-badge ${badgeClass}">${badgeText}</span>` : ''}
      </div>
      <div class="mode-name">${m.name}</div>
      <div class="mode-desc">${m.desc}</div>
      <div class="mode-action-cue">Start →</div>`;
    card.addEventListener('click', () => startMode(m.id));
    grid.appendChild(card);
  });
}

/* ============================================================
   GLOBAL EXPORTS
   ============================================================ */
window.submitArticle     = submitArticle;
window.submitPlural      = submitPlural;
window.submitArticleWord = submitArticleWord;
window.selectArticlePill = selectArticlePill;
window.loadNextCard      = loadNextCard;
window.openWordDetail    = openWordDetail;
window.toggleArchive     = toggleArchive;
window.resetWordProgress = resetWordProgress;
window.showView          = showView;
window.closeModal        = closeModal;
window.closeAllModals    = closeAllModals;
window.toggleTheme       = toggleTheme;
window.startMode         = startMode;
window.exportProgress    = exportProgress;
window.practiceCategory  = practiceCategory;
window.speakGerman       = speakGerman;
window.speakCurrentCard  = speakCurrentCard;

/* ============================================================
   DOM READY
   ============================================================ */
document.addEventListener('DOMContentLoaded', () => {
  boot();

  $$('.nav-btn, .mobile-nav-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const view = btn.dataset.view;
      if (view === 'view-practice' && (!currentCard || !document.getElementById('view-practice').classList.contains('active'))) {
        startMode(settings.activeMode || 'article');
        return;
      }
      showView(view);
    });
  });

  const themeBtn = document.getElementById('theme-toggle');
  if (themeBtn) themeBtn.addEventListener('click', toggleTheme);

  const searchInp = document.getElementById('vocab-search');
  if (searchInp) {
    searchInp.addEventListener('input', e => {
      vocabFilter.search = e.target.value;
      renderVocabTable();
    });
  }

  const filterArt = document.getElementById('filter-article');
  if (filterArt) {
    filterArt.addEventListener('change', e => {
      vocabFilter.article = e.target.value;
      renderVocabTable();
    });
  }

  const filterCat = document.getElementById('filter-category');
  if (filterCat) {
    filterCat.addEventListener('change', e => {
      vocabFilter.category = e.target.value;
      renderVocabTable();
    });
  }

  const filterStat = document.getElementById('filter-status');
  if (filterStat) {
    filterStat.addEventListener('change', e => {
      vocabFilter.status = e.target.value;
      renderVocabTable();
    });
  }

  const setCat = document.getElementById('setting-category');
  if (setCat) {
    setCat.addEventListener('change', e => {
      settings.practiceCategory = e.target.value;
      saveLS(LS_KEY_SETTINGS, settings);
    });
  }

  const audioCheck = document.getElementById('setting-audio-enabled');
  if (audioCheck) {
    audioCheck.addEventListener('change', e => {
      settings.audioEnabled = e.target.checked;
      saveLS(LS_KEY_SETTINGS, settings);
      toast(settings.audioEnabled ? 'Audio enabled' : 'Audio muted', 'info');
    });
  }

  const autoPronCheck = document.getElementById('setting-auto-pronounce');
  if (autoPronCheck) {
    autoPronCheck.addEventListener('change', e => {
      settings.autoPronounce = e.target.checked;
      saveLS(LS_KEY_SETTINGS, settings);
    });
  }

  const rateSlider = document.getElementById('setting-speech-rate');
  const speedLabel = document.getElementById('speed-label');
  if (rateSlider) {
    rateSlider.addEventListener('input', e => {
      settings.speechRate = parseFloat(e.target.value);
      if (speedLabel) speedLabel.textContent = settings.speechRate.toFixed(2) + 'x';
      saveLS(LS_KEY_SETTINGS, settings);
    });
    rateSlider.addEventListener('change', () => {
      speakGerman('Guten Tag!');
    });
  }

  const btnExp = document.getElementById('btn-export');
  if (btnExp) btnExp.addEventListener('click', exportProgress);

  const btnImp = document.getElementById('btn-import');
  const impFile = document.getElementById('import-file');
  if (btnImp && impFile) {
    btnImp.addEventListener('click', () => impFile.click());
    impFile.addEventListener('change', e => {
      importProgress(e.target.files[0]);
      e.target.value = '';
    });
  }

  const btnReset = document.getElementById('btn-reset-all');
  if (btnReset) {
    btnReset.addEventListener('click', () => openModal('confirm-reset-modal'));
  }

  const confReset = document.getElementById('confirm-reset-btn');
  if (confReset) {
    confReset.addEventListener('click', () => {
      progress = {};
      vocabulary.forEach(w => { progress[w.id] = freshProgress(w.id); });
      saveLS(LS_KEY_PROGRESS, progress);
      streakData = { date: '', count: 0 };
      saveLS(LS_KEY_STREAK, streakData);
      closeAllModals();
      renderDashboard();
      renderVocabTable();
      toast('All progress reset', 'info');
    });
  }

  $$('.modal-backdrop').forEach(bd => {
    bd.addEventListener('click', e => {
      if (e.target === bd) closeAllModals();
    });
  });

  const btnStart = document.getElementById('btn-start-practice');
  if (btnStart) {
    btnStart.addEventListener('click', () => startMode(settings.activeMode));
  }

  const btnBack = document.getElementById('btn-back-to-dash');
  if (btnBack) {
    btnBack.addEventListener('click', () => showView('view-dashboard'));
  }
});
