'use strict';

var menuTemplate = document.getElementById('menu-template').content;
var menuItemElement = menuTemplate.querySelector('.menu-section');

var positionTemplate = document.getElementById('position-template').content;
var positionElement = positionTemplate.querySelector('.position');

var menuListElement = document.getElementById('menu-list-id');

var menu = [
  {
    title: 'coffee',
    imgClass: 'coffee-menu-picture',
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
    imgClass: 'tea-menu-picture',
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
    imgClass: 'desert-menu-picture',
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

  currentItem.querySelector('.menu-picture').textContent = menu[i].title;
  currentItem.querySelector('.menu-picture').classList.add(menu[i].imgClass);

  for (var j = 0; j < menu[i].priseList.length; j++) {
    var currentPosition = positionElement.cloneNode(true);

    currentPosition.querySelector('.name').textContent = menu[i].priseList[j].name;
    currentPosition.querySelector('.prise').textContent = menu[i].priseList[j].cost;
    currentItem.querySelector('#assortment-id').appendChild(currentPosition);
  }

  menuListElement.appendChild(currentItem);
}
