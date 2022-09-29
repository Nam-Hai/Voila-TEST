import { N } from "../utils/namhai"
const DURATION = 700
const TDELAY = 700
const OFFSET = 300
const TDURATION = 500
const DELAY = 200
const EASE = 'o2'
export default class TitleInitAnimation {
    constructor(s) {
        this.tl = new N.TL
        this.wrapper = N.get('h1')
        this.titleLines = N.getAll('h1 > div')

        for (const lineIndex of Object.keys(this.titleLines)) {
            let letters = N.getAll('div>span', this.titleLines[lineIndex])
            let x = 0
            for (const index of Object.keys(letters)) {
                const dLetter = N.get('span', letters[index]),
                    size = {
                        height: dLetter.clientHeight,
                        width: letters[index].clientWidth
                    }
                N.T(letters[index], x, 0, 'px')
                x += size.width - 0.0333 * 220
                letters[index].style.width = `${3 * size.width}px`
                letters[index].style.height = `${size.height}px`
                dLetter.style.width = `${size.width}px`

                // N.T(dLetter, 0, lineIndex == 0 ? 100 : 100)
            }
        }

        let line1 = N.getAll('span span', this.titleLines[0])
        let line2 = N.getAll('span span', this.titleLines[1])
        this.tl.from({
            el: line1,
            p: {
                y: [100, 0]

            },
            d: 750,
            e: 'o2',
        })
        this.tl.from({
            el: N.get('.line-1'),
            p: {
                rotateX: [-40, 0]
            },
            d: 750,
            e: 'o5',
        })
        // this.tl.from({
        //     el: N.get('.line-2'),
        //     p: {
        //         rotateX: [-40, 0]
        //     },
        //     d: 750,
        //     // delay: 50,
        //     e: 'o3',
        // })
        this.tl.from({
            el: N.get('.line-and__wrapper'),
            p: {
                rotateX: [-40, 0]
            },
            d: 750,
            // delay: 50,
            e: 'o3',
        })



        this.tl.from({
            el: line2[0],
            p: {
                y: [100, 0]
            },
            d: 750,
            e: 'o1',
            // delay: 50
        })
        this.tl.from({
            el: Object.values(line2).slice(1),
            p: {
                y: [100, 0],
            },
            d: 850,
            e: 'o6',
            delay: 350
        })
        let strat = N.get('.line-strategy__wrapper-translate')
        const d = 15
        N.T(strat, d, 0, 'px')
        this.tl.from({
            el: strat,
            p: {
                x: [d, 0, 'px']
            },
            d: 800,
            e: 'o2',
            delay: 450
        })
        this.tl.from({
            el: N.get('.line-strategy__wrapper-rotate'),
            p: {
                rotateX: [-40, 0]
            },
            d: 750,
            delay: 250,
            e: 'o3',
        })

        this.tl.from({
            delay: TDURATION,
            // delay: TDURATION,
            update: _ => { },
            // cb: _ => s()
        })
        this.tl.play()
    }
}