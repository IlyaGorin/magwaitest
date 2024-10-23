/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/components/cards-section/cards-section.js":
/*!*******************************************************!*\
  !*** ./src/components/cards-section/cards-section.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ fetchCardsData)\n/* harmony export */ });\nvar cardTemplate = document.querySelector('.card-template');\nvar cardsContainer = document.querySelector('.cards-section__cards-list');\nvar totalLoaded = 0;\nvar LIMIT = 5;\nvar MAX_POSTS = 30;\nfunction createCard(data) {\n  var card = cardTemplate.content.cloneNode(true);\n  card.querySelector('.card__title').textContent = data.title;\n  card.querySelector('.card__desc').textContent = data.description;\n  card.querySelector('.card__text').textContent = data.text;\n  card.querySelector('.card__info').innerHTML = \"Posted by <b>\".concat(data.author, \"</b>, on \").concat(data.date);\n  return card;\n}\nfunction loadCards() {\n  if (totalLoaded >= MAX_POSTS) {\n    document.querySelector('.cards-section__load-button button').disabled = true;\n    alert('Все карточки загружены');\n    return;\n  }\n  fetch(\"https://jsonplaceholder.typicode.com/posts?_start=\".concat(totalLoaded, \"&_limit=\").concat(LIMIT)).then(function (response) {\n    return response.json();\n  }).then(function (posts) {\n    posts.forEach(function (post) {\n      var cardData = {\n        title: post.title,\n        description: 'How to increase your productivity with a Music',\n        text: post.body,\n        author: 'Eugenia',\n        date: 'July 24, 2019'\n      };\n      var card = createCard(cardData);\n      cardsContainer.appendChild(card);\n    });\n    totalLoaded += posts.length;\n  })[\"catch\"](function (error) {\n    return console.error('Ошибка загрузки:', error);\n  });\n}\nfunction fetchCardsData() {\n  document.querySelector('.cards-section__load-button button').addEventListener('click', loadCards);\n  loadCards();\n}\n\n//# sourceURL=webpack://magvaytest/./src/components/cards-section/cards-section.js?");

/***/ }),

/***/ "./src/components/header/header.js":
/*!*****************************************!*\
  !*** ./src/components/header/header.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initializeNavigation)\n/* harmony export */ });\nvar burgerBtn = document.querySelector('.burger-button');\nvar navigation = document.querySelector('.navigation');\nvar navigationWrapper = document.querySelector('.navigation__wrapper');\nvar navigationBtnsElement = document.querySelector('.navigation-btns');\nvar pageHeader = document.querySelector('.page-header__wrapper');\nfunction initializeNavigation() {\n  function moveNavigationBtns() {\n    var mediaQuery = window.matchMedia('(min-width: 768px) and (max-width: 1400px)');\n    if (mediaQuery.matches) {\n      pageHeader.appendChild(navigationBtnsElement);\n    } else {\n      navigationWrapper.appendChild(navigationBtnsElement);\n    }\n  }\n  moveNavigationBtns();\n  window.addEventListener('resize', moveNavigationBtns);\n  burgerBtn.addEventListener('click', function () {\n    navigation.classList.toggle('open');\n    burgerBtn.classList.toggle('open');\n    document.body.classList.toggle('no-scroll');\n  });\n}\n\n//# sourceURL=webpack://magvaytest/./src/components/header/header.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _scss_layout_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scss/layout.scss */ \"./src/scss/layout.scss\");\n/* harmony import */ var _index_pug__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.pug */ \"./src/index.pug\");\n/* harmony import */ var _index_pug__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_index_pug__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_header_header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/header/header */ \"./src/components/header/header.js\");\n/* harmony import */ var _components_cards_section_cards_section__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/cards-section/cards-section */ \"./src/components/cards-section/cards-section.js\");\n\n\n\n\ndocument.addEventListener('DOMContentLoaded', function () {\n  (0,_components_header_header__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n  (0,_components_cards_section_cards_section__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\n});\n\n//# sourceURL=webpack://magvaytest/./src/index.js?");

/***/ }),

/***/ "./src/scss/layout.scss":
/*!******************************!*\
  !*** ./src/scss/layout.scss ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://magvaytest/./src/scss/layout.scss?");

/***/ }),

/***/ "./src/components/burger-button/burger-button.pug":
/*!********************************************************!*\
  !*** ./src/components/burger-button/burger-button.pug ***!
  \********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var pug = __webpack_require__(/*! !../../../node_modules/pug-runtime/index.js */ \"./node_modules/pug-runtime/index.js\");\n\nfunction template(locals) {var pug_html = \"\", pug_mixins = {}, pug_interp;pug_html = pug_html + \"\\u003Cbutton class=\\\"burger-button\\\" type=\\\"button\\\"\\u003E\\u003Cspan\\u003E\\u003C\\u002Fspan\\u003E\\u003C\\u002Fbutton\\u003E\";;return pug_html;};\nmodule.exports = template;\n\n//# sourceURL=webpack://magvaytest/./src/components/burger-button/burger-button.pug?");

/***/ }),

/***/ "./src/index.pug":
/*!***********************!*\
  !*** ./src/index.pug ***!
  \***********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var pug = __webpack_require__(/*! !../node_modules/pug-runtime/index.js */ \"./node_modules/pug-runtime/index.js\");\n\nfunction template(locals) {var pug_html = \"\", pug_mixins = {}, pug_interp;pug_mixins[\"primary-button\"] = pug_interp = function(text, className){\nvar block = (this && this.block), attributes = (this && this.attributes) || {};\npug_html = pug_html + \"\\u003Cbutton\" + (pug.attr(\"class\", pug.classes([`primary-button primary-button--${className}`], [true]), false, true)) + \"\\u003E \\u003Cspan\\u003E\" + (pug.escape(null == (pug_interp = text) ? \"\" : pug_interp)) + \"\\u003C\\u002Fbutton\\u003E\";\n};\npug_mixins[\"title\"] = pug_interp = function(text, headingLevel, className='' ){\nvar block = (this && this.block), attributes = (this && this.attributes) || {};\npug_html = pug_html + \"\\u003C\" + (headingLevel) + (pug.attr(\"class\", pug.classes([`${className} title title--${headingLevel}`], [true]), false, true)) + \"\\u003E\" + (null == (pug_interp = text) ? \"\" : pug_interp) + \"\\u003C\\u002F\" + (headingLevel) + \"\\u003E\";\n};\npug_mixins[\"card-button\"] = pug_interp = function(text, className){\nvar block = (this && this.block), attributes = (this && this.attributes) || {};\npug_html = pug_html + \"\\u003Ca\" + (pug.attr(\"class\", pug.classes([`card-button ${className}`], [true]), false, true)+\" href=\\\"#\\\"\") + \"\\u003E \\u003Cspan\\u003E\" + (pug.escape(null == (pug_interp = text) ? \"\" : pug_interp)) + \"\\u003C\\u002Fa\\u003E\";\n};\npug_html = pug_html + (\"\\u003C!DOCTYPE html\\u003E\\u003Chtml lang=\\\"ru\\\"\\u003E\\u003Chead\\u003E\\u003Ctitle\\u003EПолет Илона Маска и DOGIE COIN\\u003C\\u002Ftitle\\u003E\\u003Cmeta charset=\\\"UTF-8\\\"\\u003E\\u003Cmeta name=\\\"viewport\\\" content=\\\"width=device-width, initial-scale=1.0\\\"\\u003E\\u003Cmeta name=\\\"description\\\" content=\\\"Описаниестраницы\\\"\\u003E\\u003Cmeta name=\\\"keywords\\\" content=\\\"ключевые, слова, для, страницы\\\"\\u003E\\u003Clink rel=\\\"preconnect\\\" href=\\\"https:\\u002F\\u002Ffonts.googleapis.com\\\"\\u003E\\u003Clink rel=\\\"preconnect\\\" href=\\\"https:\\u002F\\u002Ffonts.gstatic.com\\\" crossorigin\\u003E\\u003Clink href=\\\"https:\\u002F\\u002Ffonts.googleapis.com\\u002Fcss2?family=Montserrat:ital,wght@0,100..900;1,100..900&amp;display=swap\\\" rel=\\\"stylesheet\\\"\\u003E\\u003Clink href=\\\"https:\\u002F\\u002Ffonts.googleapis.com\\u002Fcss2?family=Mulish:ital,wght@0,200..1000;1,200..1000&amp;display=swap\\\" rel=\\\"stylesheet\\\"\\u003E\\u003C\\u002Fhead\\u003E\\u003Cbody\\u003E\\u003Cheader class=\\\"page-header\\\"\\u003E\\u003Cdiv class=\\\"wrapper page-header__wrapper\\\"\\u003E\" + (null == (pug_interp = (__webpack_require__(/*! ./components/burger-button/burger-button.pug */ \"./src/components/burger-button/burger-button.pug\").call)(this, locals)) ? \"\" : pug_interp));\nconst menuItems = [\n{ title: 'УСЛУГИ', href: '#' },\n{ title: 'АБОНЕМЕНТЫ', href: '#' },\n{ title: 'ПОЧЕМУ МЫ', href: '#' },\n{ title: 'ОБОРУДОВАНИЕ', href: '#' },\n{ title: 'АКЦИИ', href: '#' },\n{ title: 'FAQ', href: '#' },\n{ title: 'КОНТАКТЫ', href: '#' }\n]\npug_html = pug_html + \"\\u003Cdiv class=\\\"page-header__navigation navigation\\\"\\u003E\\u003Cdiv class=\\\"navigation__wrapper\\\"\\u003E\\u003Cnav class=\\\"navigation__menu\\\" aria-label=\\\"Основная навигация\\\"\\u003E\\u003Cul class=\\\"navigation__list\\\"\\u003E\";\n// iterate menuItems\n;(function(){\n  var $$obj = menuItems;\n  if ('number' == typeof $$obj.length) {\n      for (var pug_index0 = 0, $$l = $$obj.length; pug_index0 < $$l; pug_index0++) {\n        var item = $$obj[pug_index0];\npug_html = pug_html + \"\\u003Cli\\u003E\\u003Ca\" + (\" class=\\\"navigation__link\\\"\"+pug.attr(\"href\", item.href, true, true)+pug.attr(\"data-text\", item.title, true, true)) + \"\\u003E\" + (pug.escape(null == (pug_interp = item.title) ? \"\" : pug_interp)) + \"\\u003C\\u002Fa\\u003E\\u003C\\u002Fli\\u003E\";\n      }\n  } else {\n    var $$l = 0;\n    for (var pug_index0 in $$obj) {\n      $$l++;\n      var item = $$obj[pug_index0];\npug_html = pug_html + \"\\u003Cli\\u003E\\u003Ca\" + (\" class=\\\"navigation__link\\\"\"+pug.attr(\"href\", item.href, true, true)+pug.attr(\"data-text\", item.title, true, true)) + \"\\u003E\" + (pug.escape(null == (pug_interp = item.title) ? \"\" : pug_interp)) + \"\\u003C\\u002Fa\\u003E\\u003C\\u002Fli\\u003E\";\n    }\n  }\n}).call(this);\n\npug_html = pug_html + \"\\u003C\\u002Ful\\u003E\\u003C\\u002Fnav\\u003E\\u003Cul class=\\\"navigation-btns\\\"\\u003E \\u003Cli\\u003E\\u003Ca class=\\\"navigation-btns__phone-link\\\" href=\\\"tel:+\\\"\\u003E \\u003Cspan\\u003E\\u003C\\u002Fspan\\u003E\\u003C\\u002Fa\\u003E\\u003C\\u002Fli\\u003E\\u003Cli\\u003E\";\npug_mixins[\"primary-button\"]('ОСТАВИТЬ ЗАЯВКУ', 'parallelogram');\npug_html = pug_html + \"\\u003C\\u002Fli\\u003E\\u003C\\u002Ful\\u003E\\u003C\\u002Fdiv\\u003E\\u003C\\u002Fdiv\\u003E\\u003Cdiv class=\\\"page-header__logo\\\"\\u003E\\u003Ca href=\\\"#\\\"\\u003E\\u003Cimg\" + (pug.attr(\"src\", __webpack_require__(/*! @images/logo.svg */ \"./src/images/logo.svg\"), true, true)+\" alt=\\\"Логотип\\\"\") + \"\\u003E\\u003C\\u002Fa\\u003E\\u003C\\u002Fdiv\\u003E\\u003C\\u002Fdiv\\u003E\\u003C\\u002Fheader\\u003E\\u003Cmain\\u003E\\u003Csection class=\\\"hero\\\"\\u003E\\u003Cdiv class=\\\"wrapper hero__wrapper\\\"\\u003E\\u003Cdiv class=\\\"hero__inner\\\"\\u003E\";\npug_mixins[\"title\"]('Полет Илона Маска и&nbsp;DOGIE COIN', 'h1', 'hero__title');\npug_html = pug_html + \"\\u003Cp class=\\\"hero__description\\\"\\u003EВ прошлый четверг все офигели от полета DOGIE COIN на марс.\\u003C\\u002Fp\\u003E\";\npug_mixins[\"primary-button\"]('ОСТАВИТЬ ЗАЯВКУ', 'parallelogram');\npug_html = pug_html + \"\\u003C\\u002Fdiv\\u003E\\u003C\\u002Fdiv\\u003E\\u003C\\u002Fsection\\u003E\\u003Csection class=\\\"cards-section\\\"\\u003E\\u003Cdiv class=\\\"cards-section__inner\\\"\\u003E\";\npug_mixins[\"title\"]('Карточки', 'h2', 'cards-section__title');\npug_html = pug_html + \"\\u003Cdiv class=\\\"cards-section__cards-list\\\"\\u003E\\u003Ctemplate class=\\\"card-template\\\"\\u003E\\u003Carticle class=\\\"card\\\"\\u003E\\u003Cdiv class=\\\"card__img\\\"\\u003E\\u003Cimg\" + (pug.attr(\"src\", __webpack_require__(/*! @images/1.jpg */ \"./src/images/1.jpg\"), true, true)+\" alt=\\\"Картинка карточки\\\"\") + \"\\u003E\\u003C\\u002Fdiv\\u003E\\u003Cdiv class=\\\"card__inner\\\"\\u003E\";\npug_mixins[\"title\"]('bridge', 'h3', 'card__title');\npug_html = pug_html + \"\\u003Cp class=\\\"card__desc\\\"\\u003EHow to increase your productivity with a Music\\u003C\\u002Fp\\u003E\\u003Cp class=\\\"card__text\\\"\\u003ESed ut perspiciatis unde omnis iste natus error sit voluptatem santium doloremque laudantium, totam rem sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium dolo…\\u003C\\u002Fp\\u003E\\u003Cp class=\\\"card__info\\\"\\u003EPosted by \\u003Cb\\u003EEugenia\\u003C\\u002Fb\\u003E, on July  24, 2019\\u003C\\u002Fp\\u003E\";\npug_mixins[\"card-button\"]('Continue reading', 'card__button');\npug_html = pug_html + \"\\u003C\\u002Fdiv\\u003E\\u003C\\u002Farticle\\u003E\\u003C\\u002Ftemplate\\u003E\\u003C\\u002Fdiv\\u003E\\u003Cdiv class=\\\"cards-section__load-button\\\"\\u003E\";\npug_mixins[\"primary-button\"]('ЗАГРУЗИТЬ ЕЩЕ', 'parallelogram');\npug_html = pug_html + \"\\u003C\\u002Fdiv\\u003E\\u003C\\u002Fdiv\\u003E\\u003C\\u002Fsection\\u003E\\u003C\\u002Fmain\\u003E\\u003C\\u002Fbody\\u003E\\u003C\\u002Fhtml\\u003E\";;return pug_html;};\nmodule.exports = template;\n\n//# sourceURL=webpack://magvaytest/./src/index.pug?");

/***/ }),

/***/ "./node_modules/pug-runtime/index.js":
/*!*******************************************!*\
  !*** ./node_modules/pug-runtime/index.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
eval("\n\nvar pug_has_own_property = Object.prototype.hasOwnProperty;\n\n/**\n * Merge two attribute objects giving precedence\n * to values in object `b`. Classes are special-cased\n * allowing for arrays and merging/joining appropriately\n * resulting in a string.\n *\n * @param {Object} a\n * @param {Object} b\n * @return {Object} a\n * @api private\n */\n\nexports.merge = pug_merge;\nfunction pug_merge(a, b) {\n  if (arguments.length === 1) {\n    var attrs = a[0];\n    for (var i = 1; i < a.length; i++) {\n      attrs = pug_merge(attrs, a[i]);\n    }\n    return attrs;\n  }\n\n  for (var key in b) {\n    if (key === 'class') {\n      var valA = a[key] || [];\n      a[key] = (Array.isArray(valA) ? valA : [valA]).concat(b[key] || []);\n    } else if (key === 'style') {\n      var valA = pug_style(a[key]);\n      valA = valA && valA[valA.length - 1] !== ';' ? valA + ';' : valA;\n      var valB = pug_style(b[key]);\n      valB = valB && valB[valB.length - 1] !== ';' ? valB + ';' : valB;\n      a[key] = valA + valB;\n    } else {\n      a[key] = b[key];\n    }\n  }\n\n  return a;\n};\n\n/**\n * Process array, object, or string as a string of classes delimited by a space.\n *\n * If `val` is an array, all members of it and its subarrays are counted as\n * classes. If `escaping` is an array, then whether or not the item in `val` is\n * escaped depends on the corresponding item in `escaping`. If `escaping` is\n * not an array, no escaping is done.\n *\n * If `val` is an object, all the keys whose value is truthy are counted as\n * classes. No escaping is done.\n *\n * If `val` is a string, it is counted as a class. No escaping is done.\n *\n * @param {(Array.<string>|Object.<string, boolean>|string)} val\n * @param {?Array.<string>} escaping\n * @return {String}\n */\nexports.classes = pug_classes;\nfunction pug_classes_array(val, escaping) {\n  var classString = '', className, padding = '', escapeEnabled = Array.isArray(escaping);\n  for (var i = 0; i < val.length; i++) {\n    className = pug_classes(val[i]);\n    if (!className) continue;\n    escapeEnabled && escaping[i] && (className = pug_escape(className));\n    classString = classString + padding + className;\n    padding = ' ';\n  }\n  return classString;\n}\nfunction pug_classes_object(val) {\n  var classString = '', padding = '';\n  for (var key in val) {\n    if (key && val[key] && pug_has_own_property.call(val, key)) {\n      classString = classString + padding + key;\n      padding = ' ';\n    }\n  }\n  return classString;\n}\nfunction pug_classes(val, escaping) {\n  if (Array.isArray(val)) {\n    return pug_classes_array(val, escaping);\n  } else if (val && typeof val === 'object') {\n    return pug_classes_object(val);\n  } else {\n    return val || '';\n  }\n}\n\n/**\n * Convert object or string to a string of CSS styles delimited by a semicolon.\n *\n * @param {(Object.<string, string>|string)} val\n * @return {String}\n */\n\nexports.style = pug_style;\nfunction pug_style(val) {\n  if (!val) return '';\n  if (typeof val === 'object') {\n    var out = '';\n    for (var style in val) {\n      /* istanbul ignore else */\n      if (pug_has_own_property.call(val, style)) {\n        out = out + style + ':' + val[style] + ';';\n      }\n    }\n    return out;\n  } else {\n    return val + '';\n  }\n};\n\n/**\n * Render the given attribute.\n *\n * @param {String} key\n * @param {String} val\n * @param {Boolean} escaped\n * @param {Boolean} terse\n * @return {String}\n */\nexports.attr = pug_attr;\nfunction pug_attr(key, val, escaped, terse) {\n  if (val === false || val == null || !val && (key === 'class' || key === 'style')) {\n    return '';\n  }\n  if (val === true) {\n    return ' ' + (terse ? key : key + '=\"' + key + '\"');\n  }\n  var type = typeof val;\n  if ((type === 'object' || type === 'function') && typeof val.toJSON === 'function') {\n    val = val.toJSON();\n  }\n  if (typeof val !== 'string') {\n    val = JSON.stringify(val);\n    if (!escaped && val.indexOf('\"') !== -1) {\n      return ' ' + key + '=\\'' + val.replace(/'/g, '&#39;') + '\\'';\n    }\n  }\n  if (escaped) val = pug_escape(val);\n  return ' ' + key + '=\"' + val + '\"';\n};\n\n/**\n * Render the given attributes object.\n *\n * @param {Object} obj\n * @param {Object} terse whether to use HTML5 terse boolean attributes\n * @return {String}\n */\nexports.attrs = pug_attrs;\nfunction pug_attrs(obj, terse){\n  var attrs = '';\n\n  for (var key in obj) {\n    if (pug_has_own_property.call(obj, key)) {\n      var val = obj[key];\n\n      if ('class' === key) {\n        val = pug_classes(val);\n        attrs = pug_attr(key, val, false, terse) + attrs;\n        continue;\n      }\n      if ('style' === key) {\n        val = pug_style(val);\n      }\n      attrs += pug_attr(key, val, false, terse);\n    }\n  }\n\n  return attrs;\n};\n\n/**\n * Escape the given string of `html`.\n *\n * @param {String} html\n * @return {String}\n * @api private\n */\n\nvar pug_match_html = /[\"&<>]/;\nexports.escape = pug_escape;\nfunction pug_escape(_html){\n  var html = '' + _html;\n  var regexResult = pug_match_html.exec(html);\n  if (!regexResult) return _html;\n\n  var result = '';\n  var i, lastIndex, escape;\n  for (i = regexResult.index, lastIndex = 0; i < html.length; i++) {\n    switch (html.charCodeAt(i)) {\n      case 34: escape = '&quot;'; break;\n      case 38: escape = '&amp;'; break;\n      case 60: escape = '&lt;'; break;\n      case 62: escape = '&gt;'; break;\n      default: continue;\n    }\n    if (lastIndex !== i) result += html.substring(lastIndex, i);\n    lastIndex = i + 1;\n    result += escape;\n  }\n  if (lastIndex !== i) return result + html.substring(lastIndex, i);\n  else return result;\n};\n\n/**\n * Re-throw the given `err` in context to the\n * the pug in `filename` at the given `lineno`.\n *\n * @param {Error} err\n * @param {String} filename\n * @param {String} lineno\n * @param {String} str original source\n * @api private\n */\n\nexports.rethrow = pug_rethrow;\nfunction pug_rethrow(err, filename, lineno, str){\n  if (!(err instanceof Error)) throw err;\n  if ((typeof window != 'undefined' || !filename) && !str) {\n    err.message += ' on line ' + lineno;\n    throw err;\n  }\n  try {\n    str = str || (__webpack_require__(/*! fs */ \"?8f63\").readFileSync)(filename, 'utf8')\n  } catch (ex) {\n    pug_rethrow(err, null, lineno)\n  }\n  var context = 3\n    , lines = str.split('\\n')\n    , start = Math.max(lineno - context, 0)\n    , end = Math.min(lines.length, lineno + context);\n\n  // Error context\n  var context = lines.slice(start, end).map(function(line, i){\n    var curr = i + start + 1;\n    return (curr == lineno ? '  > ' : '    ')\n      + curr\n      + '| '\n      + line;\n  }).join('\\n');\n\n  // Alter exception message\n  err.path = filename;\n  err.message = (filename || 'Pug') + ':' + lineno\n    + '\\n' + context + '\\n\\n' + err.message;\n  throw err;\n};\n\n\n//# sourceURL=webpack://magvaytest/./node_modules/pug-runtime/index.js?");

/***/ }),

/***/ "./src/images/1.jpg":
/*!**************************!*\
  !*** ./src/images/1.jpg ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"images/1.46855cd4ef0bd9a03b2e.jpg\";\n\n//# sourceURL=webpack://magvaytest/./src/images/1.jpg?");

/***/ }),

/***/ "./src/images/logo.svg":
/*!*****************************!*\
  !*** ./src/images/logo.svg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"images/logo.01747eb8bfeea89d06a7.svg\";\n\n//# sourceURL=webpack://magvaytest/./src/images/logo.svg?");

/***/ }),

/***/ "?8f63":
/*!********************!*\
  !*** fs (ignored) ***!
  \********************/
/***/ (() => {

eval("/* (ignored) */\n\n//# sourceURL=webpack://magvaytest/fs_(ignored)?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		__webpack_require__.p = "/";
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;