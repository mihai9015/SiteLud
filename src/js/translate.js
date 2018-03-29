'use strict';

/* global $ */
$(document).ready(() => {
  let crtLang = 'en';
  const $btn = $('#btn_lang'); // getting button
  const trans = $('body').translate({
    lang: 'en',
    t: window.dict,
  });
  function swapLang() {
    crtLang = (crtLang === 'en') ? 'ro' : 'en'; // change new language
    trans.lang(crtLang); // translate page

    $btn.text(crtLang.toUpperCase()); // change btn value
  }
  $btn.on('click', (ev) => {
    swapLang();
    ev.preventDefault();
  });
});
