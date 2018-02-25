

$(function() {

    var t = {
      "Home": {
        ro: "Acasa"
      },
      "About us": {
        ro: "Despre noi"
      },
      "Language": {
        ro: "Idioma"
      },
      "Step": {
        ro: "Passo"
      },
      subtitle_key: {
        en: "translate.js is a jQuery plugin to translate text in the client side.",
        ro: "translate.js é um plugin JQuery para traduzir texto client side."
      },
      "Usage: translate entire page": {
        ro: "Uso: traduzir uma página inteira"
      },
      "Usage: translate a string": {
        ro: "Uso: traduzir uma string"
      },
      step1: {
        en: "include JQuery and translate.js in your page",
        ro: "incluir JQuery e translate.js na página"
      },
      step2: {
        en: "every text you want translated include the <code>trn</code> class",
        ro: "incluir a classe <code>trn</code> no texto a traduzir"
      },
      step3: {
        en: "create your dictionary",
        ro: "criar o dicionário"
      },
      step4: {
        en: "initialize the plugin and translate the entire page body",
        ro: "iniciar o plugin e traduzir o body da página"
      },
      step5: {
        en: "change to another language",
        ro: "mudar para outro idioma"
      },
      step6: {
        en: "try it",
        ro: "experimentar"
      },
      "translate to English": {
        ro: "traduzir para Inglês"
      },
      "translate to Portuguese": {
        ro: "traduzir para Português"
      },
      string_translate_key: {
        en: "After you initialize the component you can translate a string",
        ro: "Depois do componente iniciado, pode-se traduzir uma string"
      },
     
    };
    var _t = $('body').translate({lang: "en", t: t});
    var str = _t.g("translate");
    console.log(str);
  
  
    $(".lang_selector").click(function(ev) {
      var lang = $(this).attr("data-value");
      _t.lang(lang);
  
      console.log(lang);
      ev.preventDefault();
    });
  
  
  
  });
  
  
  
      
      
  
  