'use strict';

var menuTemplate = document.getElementById('menu-template').content;
var menuItemElement = menuTemplate.querySelector('.menu-section');
var menuListElement = document.getElementById('menu-list-id');
console.log(menuListElement);
var positionTemplate = document.getElementById('position-template').content;
var positionElement = positionTemplate.querySelector('.position');
var assortmentElement = document.getElementById('assortment-id');
console.log(assortmentElement);

var menu = [
  {
    title: 'coffee',
    priseList: [
      {
        name: 'Latte',
        cost: '$3.00'
      },
      {
        name: 'Mocha',
        cost: '$3.25'
      },
      {
        name: 'Expresso',
        cost: '$3.75'
      },
      {
        name: 'Capuccino',
        cost: '$3.00'
      }
    ]
  },
  {
    title: 'tea',
    priseList: [
      {
        name: 'Iced tea',
        cost: '$2.75'
      },
      {
        name: 'Cold brew',
        cost: '$3.25'
      },
      {
        name: 'Jasmine green',
        cost: '$3.75'
      },
      {
        name: 'Peppermint Herbal',
        cost: '$3.00'
      }
    ]
  },
  {
    title: 'desert',
    priseList: [
      {
        name: 'Tiramisu',
        cost: '$3.00'
      },
      {
        name: 'Cheese cake',
        cost: '$3.25'
      },
      {
        name: 'Black forest',
        cost: '$3.75'
      },
      {
        name: 'Brownie',
        cost: '$3.00'
      }
    ]
  }
];

for (var i = 0; i < menu.length; i++) {
  var currentItem = menuItemElement.cloneNode(true);
  console.log( menu[i] );
  currentItem.querySelector('.menu-picture').textContent = menu[i].title;

  for (var j = 0; j < menu[i].priseList.length; j++) {
    var currentPosition = positionElement.cloneNode(true);
    console.log(currentPosition);
    currentPosition.querySelector('.name').textContent = menu[i].priseList[j].name;
    currentPosition.querySelector('.prise').textContent = menu[i].priseList[j].cost;
    assortmentElement.appendChild(currentPosition);
  }

  /*while (currentItem.querySelector('.menu-picture').classList.length > 0) {
  currentItem.getElementById('menu-section-title').classList.remove(currentItem.getElementById('menu-section-title').classList[0]);
  }
  currentItem.getElementById('menu-section-title').classList.add('menu-picture');
  currentItem.getElementById('menu-section-title').classList.add(menu[i].title + 'menu-picture');*/




  menuListElement.appendChild(currentItem);
}
