export interface Planet {
  id: string;
  englishName: string;
  mass: { massValue: number; unit: string };
  image: string; // Asegúrate de que la API te brinde esta información
  // Agrega más propiedades según la API que estés utilizando
}
