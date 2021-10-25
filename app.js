// https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png

const container = document.querySelector("#container");
const img = document.createElement("img");
img.src =
  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png";
container.appendChild(img);

for (let i = 1; i < 50; i++) {
  img.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${i}.png`;
  container.appendChild(img);
}
