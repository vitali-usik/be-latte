'use strict';

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

const template = document.getElementById('menu-item').content;
const menuItemElement = template.querySelector('.menu-section');

const fragment = document.createDocumentFragment();
// const menuItem = menuItemElement.cloneNode();

menu.forEach((item) => {
  const menuItem = menuItemElement.cloneNode(true);
  const heading = menuItem.querySelector('.menu-picture');
  heading.textContent = item.title;
  fragment.appendChild(menuItem);
});

const menuListElement = document.getElementById('menuListId');
menuListElement.appendChild(fragment);

// console.log('fragment', fragment);
//
// console.log(`menu`, menu);
