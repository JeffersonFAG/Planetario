interface IMass {
  massValue: number;
  unit: string;
}

export interface Planet {
  id: string;
  englishName: string;
  mass: IMass;
  image: string;
  vol: { volValue: number; volExponent: number };
}
