import React from 'react';
import CarruselFotos from './CarruselFotos';

const SLIDES = [
  'https://santodomingo.cl/wp-content/uploads/2026/03/WhatsApp-Image-2026-02-27-at-16.38.43.jpeg',
  'https://santodomingo.cl/wp-content/uploads/2026/03/rrss-carrusel-caso-humedal-para-VB-02-scaled.png',
  'https://santodomingo.cl/wp-content/uploads/2026/03/WhatsApp-Image-2026-02-27-at-16.40.46.jpeg',
  'https://santodomingo.cl/wp-content/uploads/2026/03/WhatsApp-Image-2026-02-27-at-16.38.47.jpeg',
  'https://santodomingo.cl/wp-content/uploads/2026/03/WhatsApp-Image-2026-02-27-at-16.38.47-2.jpeg',
  'https://santodomingo.cl/wp-content/uploads/2026/03/WhatsApp-Image-2026-02-27-at-16.38.48.jpeg',
];

const CarruselHumedal: React.FC = () => (
  <CarruselFotos
    slides={SLIDES}
    itemW={310}
    itemH={260}
    visible={3}
    intervalo={4000}
    label="Consecuencias de perro en humedal"
  />
);

export default CarruselHumedal;
