'use strict';

var userNumberElement = document.getElementsByClassName ('testimonial-number')[0];

var dropElements = document.getElementsByClassName ('drop');
var firstDropElement = dropElements[0];
var secondDropElement = dropElements[1];
var thirdDropElement = dropElements[2];
var fourthDropElement = dropElements[3];


var testimonialPictureElement = document.getElementsByClassName ('left-testimonial-block')[0];
var testimonialManPhotoElement = document.getElementsByClassName ('human-photo')[0];

function onDropElementClick(evt) {
  for (var i = 0; i < dropElements.length; i++) {
    dropElements[i].classList.add('drop-background');
  }

  if (evt) {
    var targetElementAttrId = evt.target.getAttribute('data-attr-id');
    evt.target.classList.remove('drop-background');

    while (testimonialPictureElement.classList.length > 0) {
      testimonialPictureElement.classList.remove(testimonialPictureElement.classList[0]);
    }

    testimonialPictureElement.classList.add('left-testimonial-block');
    testimonialPictureElement.classList.add('testimonial-picture-' + targetElementAttrId);

    while (testimonialManPhotoElement.classList.length > 0) {
      testimonialManPhotoElement.classList.remove(testimonialManPhotoElement.classList[0]);
    }

    testimonialManPhotoElement.classList.add('human-photo');
    testimonialManPhotoElement.classList.add('human-photo-' + targetElementAttrId);

    userNumberElement.textContent = '.0' + targetElementAttrId;
  } else {
    dropElements[0].classList.remove('drop-background');
    testimonialPictureElement.classList.add('first-testimonial-picture');
  }
}

onDropElementClick();

firstDropElement.addEventListener('click', onDropElementClick);
secondDropElement.addEventListener('click', onDropElementClick);
thirdDropElement.addEventListener('click', onDropElementClick);
fourthDropElement.addEventListener('click', onDropElementClick);
