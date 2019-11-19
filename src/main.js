import $ from "jquery";
import "./styles.css";
import { getRandomName } from './getRandomName.js';
import { Child } from './child.js';

function setDisplay(child) {
  $('div.grid-container').append(`
    <div class="grid-item" id="${child.name}">
    <h3 class='name'></h3>
    <p>Age: <span class='age'></span></p>
    <p>Hunger: <span class='hunger'></span></p>
    <p>Hygiene: <span class='hygiene'></span></p>
    <button type="button">Feed</button>
    <button type="button">Clean</button>
    </div>`);

    $(`div#${child.name} h3.name`).text(child.name);

    setInterval( () => {
      $(`div#${child.name} span.age`).text(child.age);
      $(`div#${child.name} span.hunger`).text(child.hunger);
      $(`div#${child.name} span.hygiene`).text(child.hygiene);
    }, 500)
  }

  $(document).ready(() => {
    const usedNames = {};

    setInterval( () => {
      const newName = getRandomName();

      if (!(newName in usedNames)) usedNames[newName] = 0;

      usedNames[newName] += 1;

      const childName = `${newName} ${usedNames[newName]}`;
      console.log(childName);
      const child = new Child(childName);
      setDisplay(child);
    }, 1000);

  });
