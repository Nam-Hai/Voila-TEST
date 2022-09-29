import { N } from "../utils/namhai";

const duration = 600
const OFFSET = 300
export default class GalleryInitAnimation {
    constructor(s) {
        this.tl = new N.TL

        let galleryContainers = N.getAll('.gallery__image__container'),
            galleryImages = N.getAll('.gallery__image__container img')


        this.tl.from({
            d: duration,
            e: 'io3',
            update: t => {
                galleryContainers[0].style.height = N.Lerp(16, 20, t.progE) + 'rem'
                // galleryContainers[0].style.width = N.Lerp(30, 100, t.progE) + '%'
                N.O(galleryImages[0], t.prog)
                galleryImages[0].style.transform = `translate(-50%,-50%) scale(${N.Lerp(1.3, 1, t.progE)})`
            },
            // delay: 
            d: 700,
            cb: _ => {
                N.O(galleryImages[0], 0)
            }
        })
        this.tl.from({
            d: duration,
            e: 'io3',
            update: t => {
                galleryContainers[1].style.height = N.Lerp(16, 20, t.progE) + 'rem'
                // galleryContainers[0].style.width = N.Lerp(30, 100, t.progE) + '%'
                N.O(galleryImages[1], t.prog)
                galleryImages[1].style.transform = `translate(-50%,-50%) scale(${N.Lerp(1.3, 1, t.progE)})`
            },
            // delay: 
            d: 660,
            delay: 430,
            cb: _ => {
                N.O(galleryImages[1], 0)
            }
        })
        this.tl.from({
            d: duration,
            e: 'io3',
            update: t => {
                galleryContainers[2].style.height = N.Lerp(16, 20, t.progE) + 'rem'
                // galleryContainers[0].style.width = N.Lerp(30, 100, t.progE) + '%'
                N.O(galleryImages[2], t.prog)
                galleryImages[2].style.transform = `translate(-50%,-50%) scale(${N.Lerp(1.3, 1, t.progE)})`
            },
            // delay: 
            d: 660,
            delay: 800,
            cb: _ => {
                N.O(galleryImages[2], 0)
            }
        })

        let hero = N.get('.hero__cover')
        // let heroImg = N.get('img', hero)
        let heroImg = N.get('.hero', hero)
        let size = { height: hero.clientHeight, width: hero.clientWidth }
        console.log(size);
        heroImg.style.height = size.height + 'px'
        heroImg.style.width = size.width + 'px'
        hero.style.width = '30%'
        hero.style.height = '20%'

        new N.Delay(_ => { N.O(hero, 1) }, 1300).run()
        this.tl.from({
            el: heroImg,
            // d: 900,
            d: 2000,
            delay: 1166,
            e: 'o6',
            update: t => {
                N.O(hero, 1)
                hero.style.height = N.Lerp(20, 100, t.progE) + '%'
                hero.style.width = N.Lerp(30, 100, t.progE) + '%'
                heroImg.style.transform = `translate(-50%,-50%) scale(${N.Lerp(1.5, 1, t.progE)})`
            },
            cb: _ => {
                heroImg.style.height = '100%'
                heroImg.style.width = '100%'

                N.get('.gallery').remove()
            }
        })

        this.tl.play()

        new N.Delay(s, 1700).run()
    }



}