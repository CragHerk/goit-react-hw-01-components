// funkcja do generowania losowego koloru w formacie hex
export default function getRandomColor() {
  let color = 'rgb(';
  for (let i = 0; i < 3; i++) {
    color += Math.floor(Math.random() * 256) + ',';
  }
  color = color.slice(0, -1); // usuwa ostatni przecinek
  color += ')';
  if (color === 'rgb(255,255,255)') {
    // sprawdza, czy kolor jest biały
    return getRandomColor(); // jeśli tak, to wywołuje funkcję ponownie
  }
  return color;
}
