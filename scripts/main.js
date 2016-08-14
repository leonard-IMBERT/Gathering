const Renderer = require('./rendering/lib.js');
const Entity = require('./game/entity.js');

const panel = document.getElementById('panel');

let pop = [];

document.onreadystatechange = () => {
  if(document.readyState == 'complete') {
    const renderer = new Renderer(panel, 200, 200);
    for(let ii = 0; ii < 10; ii++) pop.push(new Entity(Math.random() * 200, Math.random() * 200));
    renderer.reset();
    renderer.drawPopulation(pop);

    window.rend = renderer;
  }
}
