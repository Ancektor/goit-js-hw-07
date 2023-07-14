import { galleryItems } from './gallery-items.js';
// Change code below this line
const galleryTemplate = galleryItems
	.map(item =>
	    `<li class="gallery__item"><a class="gallery__link" href="${item.original}"><img src="${item.preview}" alt="${item.description}" class="gallery__image" data-source="${item.original}" width="480" /></a></li>`,
	)
	.join("");

const galleryElem = document.querySelector(".gallery");

galleryElem.insertAdjacentHTML("beforeend", galleryTemplate);
galleryElem.addEventListener("click", onItemClick);

let instance = null;

function onItemClick(e) {
	e.preventDefault();
	createLightBox(e);
	instance.show();
}

function createLightBox(e) {
	instance = basicLightbox.create(`<img src="${e.target.dataset.source}" width="800" />`, {
	onShow: () => {
		document.addEventListener("keydown", onEscapeClick);
	},
	onClose: () => {
		document.removeEventListener("keydown", onEscapeClick);
	},
});
}

function onEscapeClick(e) {
	if (e.code !== "Escape") {
	return;
	}
	instance.close();
}
