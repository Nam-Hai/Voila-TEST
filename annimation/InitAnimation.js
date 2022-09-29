import { N } from "../utils/namhai";

export default class InitAnimation {
    constructor(link) {
        this.tl = new N.TL()

        // this.navAnime()
        // this.heroAnime()
        this.switchAnime()
        this.slideButtonAnime()
        this.contentAnime()
        this.play()

    }

    navAnime() {
        let nav = N.get('nav')
        this.tl.from({
            el: nav,
            d: 500,
            p: {
                y: [-80, 0, 'px']
            },
            e: 'o2'
        })
    }
    switchAnime() {
        let hideAnimation = N.getAll('.hero__detail__switch__wrapper .hideAnimation')
        console.log(hideAnimation);
        this.tl.from({
            el: hideAnimation,
            p: {
                scaleX: [1, 0]
            },
            d: 500,
            delay: 500,
            cb: _ => Object.values(hideAnimation).forEach(div => div.remove())
        })
    }

    slideButtonAnime() {
        let button = N.get('.hero__detail__button-scroll__wrapper')
        this.tl.from({
            el: button,
            p: {
                o: [0, 1]
            },
            d: 500,
            delay: 700
        })
    }


    contentAnime() {
        this.tl.from({
            el: N.get('.hero__detail__container'),
            p: {
                o: [0, 1]
            },
            d: 500,
            delay: 500
        })
    }
    play() {
        this.tl.play()
    }


}