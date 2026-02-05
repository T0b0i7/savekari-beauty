// Product images imports
import bukyImg from "@/assets/products/buky-pommade.jpeg";
import morkaclofImg from "@/assets/products/morkaclof-palm-cream.jpeg";
import laurothynImg from "@/assets/products/laurothyn.jpeg";
import pureKariteImg from "@/assets/products/pure-beurre-karite.jpeg";
import shamsImg from "@/assets/products/shams-creme-corps.jpeg";
import bergamoteImg from "@/assets/products/creme-bergamote-menthe.jpeg";

export interface Product {
  id: string;
  name: string;
  shortName: string;
  image: string;
  shortDescription: string;
  fullDescription: string;
  benefits: string[];
  usage?: string;
  weight?: string;
  category: "cheveux" | "corps" | "multi";
}

export const products: Product[] = [
  {
    id: "buky-pommade",
    name: "BUKY - Pommade capillaire au beurre de karité",
    shortName: "BUKY",
    image: bukyImg,
    shortDescription: "Concentré nourrissant pour cheveux à base de pur beurre de karité.",
    fullDescription: "Formulée à base de pur beurre de karité, enrichi en huiles végétales et plantes naturelles, cette pommade capillaire est riche en minéraux et vitamines essentielles.",
    benefits: [
      "Lutte efficacement contre les pellicules, l'alopécie et la calvitie",
      "Hydrate profondément le cuir chevelu",
      "Stimule la repousse de cheveux plus forts, plus épais et plus touffus"
    ],
    usage: "Appliquer sur le cuir chevelu et masser délicatement.",
    weight: "250g",
    category: "cheveux"
  },
  {
    id: "morkaclof-palm-cream",
    name: "Morkaclof Palm Cream",
    shortName: "Morkaclof",
    image: morkaclofImg,
    shortDescription: "Traitement capillaire profond pour réveiller et assainir le cuir chevelu.",
    fullDescription: "Morkaclof Palm Cream est un traitement capillaire profond conçu pour réveiller et assainir le cuir chevelu.",
    benefits: [
      "Active la circulation sanguine",
      "Nettoie, assainit et stabilise le cuir chevelu",
      "Élimine les pellicules et calme les démangeaisons",
      "Empêche la chute des cheveux causée par des infections invisibles",
      "Favorise une pousse durable"
    ],
    usage: "Appliquer généreusement et masser le cuir chevelu.",
    weight: "250g",
    category: "cheveux"
  },
  {
    id: "laurothyn",
    name: "LauRothy'n",
    shortName: "LauRothy'n",
    image: laurothynImg,
    shortDescription: "Pommade capillaire aux propriétés antifongiques et antibactériennes.",
    fullDescription: "LauRothy'n est une pommade capillaire aux propriétés antifongiques et antibactériennes, spécialement formulée pour nourrir les follicules et préserver la santé des cheveux.",
    benefits: [
      "Nourrit la racine et ralentit la chute prématurée des cheveux",
      "Réduit fortement la chute capillaire",
      "Protège contre la casse et le vieillissement du cheveu",
      "Riche en vitamines A, B, C et E",
      "Calme les problèmes tels que pellicules, alopécie et calvitie"
    ],
    usage: "Appliquer régulièrement sur le cuir chevelu.",
    category: "cheveux"
  },
  {
    id: "pure-beurre-karite",
    name: "Pure Beurre de Karité - Savèkari",
    shortName: "Pure Karité",
    image: pureKariteImg,
    shortDescription: "Beurre de karité 100% pur et authentique, issu du meilleur karité béninois.",
    fullDescription: "Le Pure Beurre de Karité Savèkari est un beurre de karité pur et authentique, issu du meilleur karité béninois. Pure Shea Butter - 100% naturel.",
    benefits: [
      "Hydrate intensément la peau et les cheveux",
      "Nourrit et répare les peaux sèches ou abîmées",
      "Protège le cuir chevelu et renforce la fibre capillaire",
      "Redonne souplesse, douceur et éclat",
      "Riche en vitamines et acides gras essentiels"
    ],
    usage: "Peut être utilisé pur ou comme base pour des soins capillaires et corporels.",
    category: "multi"
  },
  {
    id: "shams-creme-corps",
    name: "SHAM'S - Crème du Corps",
    shortName: "SHAM'S",
    image: shamsImg,
    shortDescription: "Crème revitalisante au beurre de karité, avocat et carotte.",
    fullDescription: "La crème du corps SHAM'S est un soin nourrissant formulé à base de beurre de karité, enrichi en avocat et carotte, reconnus pour leurs propriétés hydratantes et réparatrices. Revitalisante, adoucissante & réparatrice.",
    benefits: [
      "Nourrit intensément la peau sèche et fatiguée",
      "Adoucit et assouplit la peau",
      "Aide à réparer et revitaliser l'épiderme",
      "Redonne éclat, douceur et confort",
      "Texture pénètre facilement, sans effet gras"
    ],
    usage: "Appliquer sur le corps après la douche.",
    weight: "200g",
    category: "corps"
  },
  {
    id: "creme-bergamote-menthe",
    name: "Crème du Corps - Bergamote & Menthe Poivrée",
    shortName: "Bergamote-Menthe",
    image: bergamoteImg,
    shortDescription: "Crème du corps revitalisante au beurre de karité et notes fraîches.",
    fullDescription: "Crème du corps au beurre de karité avec bergamote et menthe poivrée. Revitalisante, adoucissante & réparatrice. Made in Bénin.",
    benefits: [
      "Effet fraîcheur grâce à la menthe poivrée",
      "Parfum délicat de bergamote",
      "Hydrate et nourrit la peau",
      "Revitalise et adoucit l'épiderme",
      "Laisse la peau douce et protégée"
    ],
    usage: "Appliquer sur le corps pour une sensation de fraîcheur.",
    weight: "200g",
    category: "corps"
  }
];
