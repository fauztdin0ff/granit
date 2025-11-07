/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ([
/* 0 */,
/* 1 */
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "isWebp": () => (/* binding */ isWebp)
/* harmony export */ });
// проверка поддержки webp, добавление класса webp или no-webp
function isWebp() {
   //проверка поддержки webp
   function testWebP(callback) {

      var webP = new Image();
      webP.onload = webP.onerror = function () {
         callback(webP.height == 2);
      };
      webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
   }

   //добавление класса
   testWebP(function (support) {
      if (support == true) {
         document.querySelector('body').classList.add('webp');
      } else {
         document.querySelector('body').classList.add('no-webp');
      }
   });
}


/*------------------------------Burger menu---------------------------*/
document.addEventListener("DOMContentLoaded", function () {
   const menuIcon = document.querySelector(".menu__icon");
   const menuBody = document.querySelector(".menu__body");
   const body = document.querySelector("body");
   const menuBodyClose = document.querySelector(".menu__body-close");

   if (menuIcon && menuBody) {
      // Открытие/закрытие меню по иконке
      menuIcon.addEventListener("click", function () {
         menuIcon.classList.toggle("active");
         menuBody.classList.toggle("active");
         body.classList.toggle("no-scroll");
      });

      // Закрытие меню при клике на ссылку внутри меню
      menuBody.addEventListener("click", function (event) {
         if (event.target.tagName === "A" || event.target.closest("a")) {
            menuIcon.classList.remove("active");
            menuBody.classList.remove("active");
            body.classList.remove("no-scroll");
         }
      });

      // Закрытие меню при клике на кнопку закрытия
      if (menuBodyClose) {
         menuBodyClose.addEventListener("click", function () {
            menuIcon.classList.remove("active");
            menuBody.classList.remove("active");
            body.classList.remove("no-scroll");
         });
      }

      // Закрытие меню при клике вне области меню
      document.addEventListener("click", function (event) {
         if (!menuBody.contains(event.target) && !menuIcon.contains(event.target)) {
            menuIcon.classList.remove("active");
            menuBody.classList.remove("active");
            body.classList.remove("no-scroll");
         }
      });
   }
});


/***/ })
/******/ 	]);
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
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_functions_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);


_modules_functions_js__WEBPACK_IMPORTED_MODULE_0__.isWebp();


/*------------------------------
Popups
---------------------------*/
document.addEventListener("DOMContentLoaded", function () {
   const openButtons = document.querySelectorAll('.open-popup');

   if (openButtons && openButtons.length > 0) {
      openButtons.forEach(button => {
         if (!button) return;

         button.addEventListener('click', function () {
            const popupId = this.dataset.popup;
            if (!popupId) return;

            const popup = document.getElementById(popupId);
            if (popup) {
               popup.classList.add('show');
               document.body.style.overflow = 'hidden';
            }
         });
      });
   }

   document.addEventListener('click', function (e) {
      const openPopup = document.querySelector('.popup.show');

      if (!openPopup) return;

      const isCloseBtn = e.target.closest('.popup__close');
      const isInsideBody = e.target.closest('.popup__body');
      const isPopupArea = e.target.closest('.popup');

      if (isCloseBtn || (!isInsideBody && isPopupArea)) {
         openPopup.classList.remove('show');
         document.body.style.overflow = '';
      }
   });
});


/*------------------------------
Phone mask
---------------------------*/
window.addEventListener("DOMContentLoaded", function () {
   [].forEach.call(document.querySelectorAll('input.tel-mask'), function (input) {
      var keyCode;
      function mask(event) {
         event.keyCode && (keyCode = event.keyCode);
         var pos = this.selectionStart;
         if (pos < 3) event.preventDefault();
         var matrix = "+7 (___) ___ __ __",
            i = 0,
            def = matrix.replace(/\D/g, ""),
            val = this.value.replace(/\D/g, ""),
            new_value = matrix.replace(/[_\d]/g, function (a) {
               return i < val.length ? val.charAt(i++) : a
            });
         i = new_value.indexOf("_");
         if (i != -1) {
            i < 5 && (i = 3);
            new_value = new_value.slice(0, i)
         }
         var reg = matrix.substr(0, this.value.length).replace(/_+/g,
            function (a) {
               return "\\d{1," + a.length + "}"
            }).replace(/[+()]/g, "\\$&");
         reg = new RegExp("^" + reg + "$");
         if (!reg.test(this.value) || this.value.length < 5 || keyCode > 47 && keyCode < 58) {
            this.value = new_value;
         }
         if (event.type == "blur" && this.value.length < 5) {
            this.value = "";
         }
      }

      input.addEventListener("input", mask, false);
      input.addEventListener("focus", mask, false);
      input.addEventListener("blur", mask, false);
      input.addEventListener("keydown", mask, false);
   });
});


/*---------------------------------------------------------------------------
Cart
---------------------------------------------------------------------------*/
document.addEventListener('DOMContentLoaded', () => {
   const addButtons = document.querySelectorAll('.add-cart');
   const cartPopup = document.querySelector('#cart-popup');
   const cartProductsContainer = cartPopup.querySelector('.cart-popup__products');
   const totalButtons = document.querySelectorAll('.button-total');
   const resetButton = cartPopup.querySelector('.button-reset');
   const totalSumEl = cartPopup.querySelector('.cart-popup__total-summ');

   // ==================== Добавление товара ====================
   addButtons.forEach(btn => {
      btn.addEventListener('click', () => {
         const row = btn.closest('tr');
         const name = row.querySelector('td:nth-child(1)').textContent.trim();
         const priceText = row.querySelector('td:nth-child(4)').textContent.trim();
         const price = parseInt(priceText.replace(/\D/g, ''));

         // Проверка, не добавлен ли уже
         const existingProduct = [...cartProductsContainer.querySelectorAll('.cart-popup__product')]
            .find(p => p.querySelector('.cart-popup__product-name').textContent === name);
         if (existingProduct) return;

         // Создание товара
         const product = document.createElement('div');
         product.classList.add('cart-popup__product');
         product.innerHTML = `
            <div class="cart-popup__product-info">
               <p class="cart-popup__product-name">${name}</p>
               <p class="cart-popup__product-price">${price.toLocaleString('ru-RU')} ₽</p>
            </div>
            <div class="cart-popup__buttons">
               <div class="cart-popup__product-quantity quantity">
                  <div class="quantity__minus">-</div>
                  <input class="quantity__value" value="1" disabled>
                  <div class="quantity__plus">+</div>
               </div>
               <button type="button" class="cart-popup__product-remove" aria-label="Удалить товар">
                  <img src="img/icons/remove.svg" width="16" height="16" alt="remove">
               </button>
            </div>
         `;

         cartProductsContainer.appendChild(product);
         cartPopup.classList.remove('empty');

         // Переключение кнопок в таблице
         btn.style.display = 'none';
         row.querySelector('.added-cart').style.display = 'inline-block';

         updateCartTotal();
         updateTotalButtons();
         setupQuantity(product);
         setupRemove(product);

         showNoty('Товар добавлен в корзину');
      });
   });

   // ==================== Обновление общей суммы ====================
   function updateCartTotal() {
      const products = cartProductsContainer.querySelectorAll('.cart-popup__product');
      let total = 0;
      products.forEach(prod => {
         const price = parseInt(prod.querySelector('.cart-popup__product-price').textContent.replace(/\D/g, ''));
         const qty = parseInt(prod.querySelector('.quantity__value').value);
         total += price * qty;
      });
      totalSumEl.textContent = `${total.toLocaleString('ru-RU')} ₽`;
   }

   // ==================== Обновление всех кнопок перехода ====================
   function updateTotalButtons() {
      const count = cartProductsContainer.querySelectorAll('.cart-popup__product').length;
      totalButtons.forEach(btn => {
         const val = btn.querySelector('.button-total-val');
         if (val) val.textContent = count;
         btn.classList.toggle('active', count > 0);
         btn.disabled = count === 0;
      });
   }

   // ==================== Управление количеством ====================
   function setupQuantity(product) {
      const minus = product.querySelector('.quantity__minus');
      const plus = product.querySelector('.quantity__plus');
      const value = product.querySelector('.quantity__value');

      plus.addEventListener('click', () => {
         value.value = parseInt(value.value) + 1;
         updateCartTotal();
      });

      minus.addEventListener('click', () => {
         let val = parseInt(value.value);
         if (val > 1) value.value = val - 1;
         updateCartTotal();
      });
   }

   // ==================== Удаление товара ====================
   function setupRemove(product) {
      const removeBtn = product.querySelector('.cart-popup__product-remove');
      removeBtn.addEventListener('click', () => {
         const name = product.querySelector('.cart-popup__product-name').textContent;
         product.remove();

         document.querySelectorAll('tr').forEach(row => {
            const rowName = row.querySelector('td:first-child')?.textContent?.trim();
            if (rowName === name) {
               row.querySelector('.add-cart').style.display = 'inline-block';
               row.querySelector('.added-cart').style.display = 'none';
            }
         });

         updateCartTotal();
         updateTotalButtons();
         if (!cartProductsContainer.children.length) cartPopup.classList.add('empty');
      });
   }

   // ==================== Очистка корзины ====================
   resetButton.addEventListener('click', e => {
      e.preventDefault();
      cartProductsContainer.innerHTML = '';
      cartPopup.classList.add('empty');
      updateCartTotal();
      updateTotalButtons();
      document.querySelectorAll('.added-cart').forEach(btn => btn.style.display = 'none');
      document.querySelectorAll('.add-cart').forEach(btn => btn.style.display = 'inline-block');
   });

   // ==================== Уведомление (noty) ====================
   function showNoty(message) {
      const noty = document.createElement('div');
      noty.className = 'noty';
      noty.innerHTML = `
         <img src="img/icons/check-circle.svg" width="20" height="20" alt="circle">
         <span>${message}</span>
      `;
      document.body.appendChild(noty);

      setTimeout(() => noty.classList.add('show'), 10);

      setTimeout(() => {
         noty.classList.remove('show');
         setTimeout(() => noty.remove(), 300);
      }, 3000);
   }
});

})();

/******/ })()
;