'use strict';

/* global google */
/* eslint-disable no-unused-vars */

function myMap() {
  const uluru = { lat: 45.648690, lng: 25.771404 };
  const map = new google.maps.Map(document.getElementById('map'), {
    zoom: 15,
    center: uluru,
  });
  const marker = new google.maps.Marker({
    position: uluru,
    map,
  });
}
