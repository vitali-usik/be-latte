'use strict';

var menuTemplate = document.getElementById('menu-template').content;
var menuItemElement = menuTemplate.querySelector('.menu-section');
var menuListElement = document.getElementById('menu-list-id');
console.log(menuItemElement);

var menu = [
  {
    title: 'Coffee',
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
    title: 'Tea',
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
    title: 'Desert',
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


  menuListElement.appendChild(currentItem);
}
