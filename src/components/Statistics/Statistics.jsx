import React from 'react';

function Statistics(props) {
  const { title, stats } = props;

  // funkcja do generowania losowego koloru w formacie hex
  function getRandomColor() {
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

  return (
    <section className="statistics">
      {title && <h2 className="title">{title}</h2>}
      <ul className="stat-list">
        {stats.map(stat => (
          <li
            className="item"
            key={stat.id}
            style={{ backgroundColor: getRandomColor() }}
          >
            <span className="label">{stat.label}</span>
            <span className="percentage">{stat.percentage}%</span>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Statistics;
