import Toggler from "../components/Toggler.js";

export class CategorySelector {
    constructor($parent, categoryList, categories = []) {
        this.$parent = $parent;
        this.$target = null;
        this.categoryList = categoryList;
        this.defaultCategory = (categories[0].name || '전체');
    }

    init() {
        this.render();
        this.setTarget();
        this.setEvents();
    }

    render() {
        this.$parent.innerHTML = this.createHTML();
    }

    createHTML() {
        return /* html */ `
            <div class="search__category">
                <div class="search__category--contents">
                    <span class="search__category--title">${this.defaultCategory}</span>
                    <img src="resources/image/ic_bottom.png" alt="카테고리 선택">
                </div>
                    ${this.categoryList.createHTML()}
                </div>
            </div>
        `
    }

    setTarget() {
        this.$target = !this.$target ? document.querySelector('.search__category') : this.$target;
        this.categoryList.setTarget(document.querySelector('.search__category--list'));
    }

    setEvents() {
        this.setClickEvent();
    }

    setClickEvent() {
        this.$target.addEventListener('click', this.handleClickEvent.bind(this));
    }

    handleClickEvent(event) {
        const target = event.target;

        if (target.className === 'search__category--item') {
            this.selectCategory(target);
            return;
        }

        this.categoryList.toggle();
    }

    selectCategory(target) {
        const titleTag = document.querySelector('.search__category--title');
        titleTag.innerText = target.innerText;
        this.categoryList.toggle();
    }
}

export class CategoryList extends Toggler {
    constructor(categories = []) {
        super();
        this.categories = categories;
    }

    createHTML() {
        return /* html */ `
            <ul class="search__category--list hidden">
            ${this.categories.reduce((text, category) => text += `<li class="search__category--item">${category.name}</li>`, '')}
            </ul>
        `
    }

    setClickEvent(handleFunc) {
        this.$target.addEventListener('click', handleFunc);
    }
}