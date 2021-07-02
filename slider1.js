let slider1 = {
    imgesURLs: [],
    currentImageIndex: 0,
    showPrewBtn: null, //document.querySelector('.show-prew-btn'),
    showNextBtn: null, //document.querySelector('.show-next-btn'),
    slideImage: null, //document.querySelector('.slide-img'),
    start: function(elClass){
        let that = this;
        let clas = '.' + elClass;
        let el = document.querySelector(clas);
        this.showPrewBtn = el.querySelector('.show-prew-btn'); 
        this.showNextBtn = el.querySelector('.show-next-btn'); 
        this.slideImage = el.querySelector('.slide-img'); 
        this.showPrewBtn.onclick = function(event) {that.showPrewImg(event)};
        this.showNextBtn.onclick = function(event) {that.showNextImg(event)};
        this.imgesURLs.push('https://cdnimg.rg.ru/img/content/178/22/40/kotik_d_850.jpg');
        this.imgesURLs.push('https://i.pinimg.com/originals/f4/d2/96/f4d2961b652880be432fb9580891ed62.png');
        this.imgesURLs.push('https://ichef.bbci.co.uk/news/640/cpsprodpb/14A82/production/_116301648_gettyimages-1071204136.jpg');
        this.imgesURLs.push('https://static.ngs.ru/news/2020/99/preview/8290b39b6601efa615afd4bbd93d82320a039883_720_405_c.png');
        this.slideImage.src = this.imgesURLs[this.currentImageIndex];
        this.showPrewBtn.disabled = true;
    },
    showPrewImg: function(event){
        this.currentImageIndex--;
        this.showNextBtn.disabled = false;
        this.slideImage.src = this.imgesURLs[this.currentImageIndex];
        if(this.currentImageIndex == 0) {this.showPrewBtn.disabled = true;}
    },
    showNextImg: function(event){
        this.currentImageIndex++;
        this.showPrewBtn.disabled = false;
        this.slideImage.src = this.imgesURLs[this.currentImageIndex];
        if(this.currentImageIndex == (this.imgesURLs.length - 1)) {this.showNextBtn.disabled = true;}
    }

}