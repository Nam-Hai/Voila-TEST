import { N } from "../utils/namhai";

export default class InitAnimation {
    constructor(link) {
        this.tl = new N.TL()

        this.navAnime()
        this.heroAnime()
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

    heroAnime() {
        let hero = N.get('.hero__cover')
        // let heroImg = N.get('img', hero)
        let heroImg = N.get('.hero', hero)
        this.tl.from({
            el: heroImg,
            d: 1000,
            delay: 200,
            e: 'io5',
            update: t => {
                hero.style.height = N.Lerp(0, 100, t.progE) + '%'
                heroImg.style.transform = `scale(${N.Lerp(1.3, 1, t.progE)})`
            }
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