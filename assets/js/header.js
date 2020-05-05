function hideCategories(self) {
	if (!self.classList.contains('categories_absolute') &&
		!self.classList.contains('categories__list') &&
		!self.classList.contains('categories__item') &&
		!self.classList.contains('js-toggleCategories')) {
		this.isOpenCategories = !this.isOpenCategories;
	}
}

function hidePersonalList(self) {
	if (!self.classList.contains('personal-list') &&
		!self.classList.contains('personal-list__item') &&
		!self.classList.contains('js-toggleList')) {
		this.isOpenPersonalList = !this.isOpenPersonalList;
	}
}

export {hideCategories, hidePersonalList};
