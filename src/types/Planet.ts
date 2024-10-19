interface IMass {
  massValue: number;
  unit: string;
}

export interface Planet {
  id: string;
  englishName: string;
  mass: IMass;
  image: string; // Asegúrate de que la API te brinde esta información
  // Agrega más propiedades según la API que estés utilizando
}
