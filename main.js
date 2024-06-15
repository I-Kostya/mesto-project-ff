(()=>{"use strict";var e={baseUrl:"https://nomoreparties.co/v1/wff-cohort-16",headers:{authorization:"a1552f18-51de-4c4e-9dd8-c1e16f497c8d","Content-Type":"application/json"}},t="/cards",n="/cards/likes",r="/users/me",o="/users/me/avatar";function c(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))}function u(t,n,r){return fetch("".concat(e.baseUrl).concat(t),{method:n,headers:e.headers,body:JSON.stringify(r)}).then(c)}function a(e){e.classList.add("popup_is-opened"),e.addEventListener("click",s),document.addEventListener("keydown",l)}function i(e){e.classList.remove("popup_is-opened"),document.removeEventListener("keydown",l)}function l(e){if("Escape"===e.key){var t=document.querySelector(".popup_is-opened");t&&i(t)}}function s(e){e.target===e.currentTarget&&i(e.currentTarget)}var d=document.querySelector(".popup_type_delete-card"),p=null,f=null;function m(e,t,n,r){var o=t.querySelector(".card").cloneNode(!0),c=o.querySelector(".card__delete-button"),u=o.querySelector(".card__image"),a=o.querySelector(".card__like-counter"),i=o.querySelector(".card__like-button");return o.querySelector(".card__title").textContent=e.name,u.src=e.link,u.alt=e.name,r===e.owner._id?c.addEventListener("click",(function(){n.deleteCard(o,e._id)})):c.remove(),a.textContent=e.likes.length,e.likes.some((function(e){return e._id===r}))&&i.classList.add("card__like-button_is-active"),i.addEventListener("click",(function(t){return n.likeCard(t,e._id,a)})),u.addEventListener("click",(function(){n.showPicture(e)})),o}function _(e,t,n){var r=e.querySelector(".".concat(t.id,"-error"));t.classList.remove(n.inputErrorClass),r.classList.remove(n.errorClass),r.textContent=""}var v=function(e,t){e.disabled=!0,e.classList.add(t.inactiveButtonClass)};function y(e,t,n){!function(e){return e.some((function(e){return!e.validity.valid}))}(e)?(t.disabled=!1,t.classList.remove(n.inactiveButtonClass)):v(t,n)}function S(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var b=document.querySelector("#card-template").content,h=document.querySelector(".places__list"),E=document.querySelector(".popup_type_edit"),q=document.querySelector(".popup_type_new-card"),g=document.querySelector(".popup_type_image"),C=document.querySelector(".popup_type_edit-avatar"),L=g.querySelector(".popup__image"),k=g.querySelector(".popup__caption"),A=document.querySelector(".profile__edit-button"),x=document.querySelector(".profile__add-button"),w=document.querySelectorAll(".popup__close"),T=document.forms["edit-profile"],j=document.forms["new-place"],P=document.forms["edit-avatar"],B=document.forms["delete-card"],D=document.querySelector(".profile__title"),O=document.querySelector(".profile__description"),I=document.querySelector(".profile__image"),M=document.querySelector(".popup__input_type_card-name"),U=document.querySelector(".popup__input_type_url"),G=document.querySelector(".popup__input_type_avatar-url"),H={deleteCard:function(e,t){p=e,f=t,a(d)},showPicture:function(e){L.src=e.link,L.alt=e.name,k.textContent=e.name,a(g)},likeCard:function(e,t,r){(function(e,t){return t?function(e){return u("".concat(n,"/").concat(e),"DELETE")}(e):function(e){return u("".concat(n,"/").concat(e),"PUT")}(e)})(t,e.target.classList.contains("card__like-button_is-active")).then((function(t){e.target.classList.toggle("card__like-button_is-active"),r.textContent=t.likes.length})).catch((function(e){return console.log(e)}))}},N={formSelector:".popup__form",inputSelector:".popup__input",submitButtonSelector:".popup__button",inactiveButtonClass:"popup__button_disabled",inputErrorClass:"popup__input_type_error",errorClass:"popup__error_visible"};function V(e){var t=document.querySelector(".popup_is-opened");t&&(t.querySelector(".popup__button").textContent=e?"Сохранение...":"Сохранить")}document.querySelectorAll(".popup").forEach((function(e){e.classList.add("popup_is-animated")})),w.forEach((function(e){var t=e.closest(".popup");e.addEventListener("click",(function(){return i(t)}))})),I.addEventListener("click",(function(){a(C)})),A.addEventListener("click",(function(){T.name.value=D.textContent,T.description.value=O.textContent,function(e,t){var n=Array.from(e.querySelectorAll(t.inputSelector)),r=e.querySelector(t.submitButtonSelector);n.forEach((function(n){_(e,n,t)})),v(r,t)}(E,N),a(E)})),x.addEventListener("click",(function(){a(q)})),T.addEventListener("submit",(function(e){e.preventDefault();var t=T.name.value,n=T.description.value;V(!0),function(e,t){return u(r,"PATCH",{name:e,about:t})}(t,n).then((function(e){D.textContent=e.name,O.textContent=e.about})).catch((function(e){console.log(e)})).finally((function(){V(!1),i(E)}))})),j.addEventListener("submit",(function(e){e.preventDefault();var n,r=M.value,o=U.value;V(!0),(n={name:r,link:o},u(t,"POST",{name:n.name,link:n.link})).then((function(e){var t=m(e,b,H,e.owner._id);h.prepend(t),j.reset()})).catch((function(e){console.log(e)})).finally((function(){V(!1),i(q)}))})),P.addEventListener("submit",(function(e){var t;e.preventDefault(),V(!0),(t=G.value,u(o,"PATCH",{avatar:t})).then((function(e){I.style.backgroundImage="url(".concat(e.avatar,")"),P.reset()})).catch((function(e){console.log(e)})).finally((function(){V(!1),i(C)}))})),B.addEventListener("submit",(function(){var e;p&&f&&(e=f,u("".concat(t,"/").concat(e),"DELETE")).then((function(){p.remove(),i(d)})).catch((function(e){console.log(e)}))})),function(e){Array.from(document.querySelectorAll(e.formSelector)).forEach((function(t){t.addEventListener("submit",(function(e){e.preventDefault()})),function(e,t){var n=Array.from(e.querySelectorAll(t.inputSelector)),r=e.querySelector(t.submitButtonSelector);y(n,r,t),e.addEventListener("reset",(function(){v(r,t)})),n.forEach((function(o){o.addEventListener("input",(function(){!function(e,t,n){t.validity.patternMismatch?t.setCustomValidity(t.dataset.errorMessage):t.setCustomValidity(""),t.validity.valid?_(e,t,n):function(e,t,n,r){var o=e.querySelector(".".concat(t.id,"-error"));t.classList.add(r.inputErrorClass),o.classList.add(r.errorClass),o.textContent=n}(e,t,t.validationMessage,n)}(e,o,t),y(n,r,t)}))}))}(t,e)}))}(N),Promise.all([u(r,"GET"),u(t,"GET")]).then((function(e){var t,n,r=(n=2,function(e){if(Array.isArray(e))return e}(t=e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,c,u,a=[],i=!0,l=!1;try{if(c=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;i=!1}else for(;!(i=(r=c.call(n)).done)&&(a.push(r.value),a.length!==t);i=!0);}catch(e){l=!0,o=e}finally{try{if(!i&&null!=n.return&&(u=n.return(),Object(u)!==u))return}finally{if(l)throw o}}return a}}(t,n)||function(e,t){if(e){if("string"==typeof e)return S(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?S(e,t):void 0}}(t,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),o=r[0],c=r[1];!function(e){D.textContent=e.name,O.textContent=e.about,I.style.backgroundImage="url(".concat(e.avatar,")")}(o),function(e,t){e.forEach((function(e){var n=m(e,b,H,t);h.append(n)}))}(c,o._id)})).catch((function(e){return console.log(e)}))})();