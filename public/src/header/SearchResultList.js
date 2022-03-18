import Toggler from "../components/Toggler.js";

export default class SearchResultList extends Toggler {
    constructor() {
        super();
        this.listData = null;
        this.isTyping = false;
        this.recentKeywords = ['코코아', '코드스쿼드', '아이스 아메리카노', '딸기우유', '배고프다'];
        this.relatedKeywords = ['아', '아이', '아이폰', '아이폰13', '아이폰 충전기'];
    }

    createHTML() {
        if (this.recentKeywords.length === 0) return '';
        return /* html */ `
            <div class="search__result hidden">
                <strong class="search__result--title">최근 검색어</strong>
                <ul class="search__result--list">
                    ${this.recentKeywords.reduce((text, keyword) => text += `<li class="search__result--item">${keyword}</li>`, '')}
                </ul>
                <div class="search__button">
                    <button class="search__button--remove">전체 삭제</button>
                    <button class="search__button--off">최근검색어끄기</button>
                </div>
            </div>
        `;
    }

    isSearching() {
        return this.isSearching;
    }

    toggleState() {
        const recentTitle = document.querySelector('.search__result--title');
        const recentButtons = document.querySelector('.search__button');
        recentTitle.classList.toggle('hidden');
        recentButtons.classList.toggle('hidden');
        this.isTyping = !this.isTyping;
        setListData();
    }

    setListData() {
        const searchList = document.querySelector('.search__result--list');
        let changedDate = this.isTyping ? this.relatedKeywords : this.recentKeywords;
        searchList.innerHTML = changedDate.reduce((text, keyword) => text += `<li class="search__result--item">${keyword}</li>`, '');
    }
}