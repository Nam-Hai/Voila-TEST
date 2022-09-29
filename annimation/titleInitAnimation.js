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
                        // width: dLetter.scrollWidth,
                        width: letters[index].clientWidth
                    }

                N.T(letters[index], x, 0, 'px')
                x += size.width - 0.03 * 220
                letters[index].style.width = `${3 * size.width}px`
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
            d: TDURATION,
            e: 'o2',
        })
        this.tl.from({
            el: N.get('.line-1'),
            p: {
                rotateX: [-40, 0]
            },
            d: TDURATION + 500,
            e: 'o5',
        })
        this.tl.from({
            el: N.get('.line-2'),
            p: {
                rotateX: [-40, 0]
            },
            d: 500,
            delay: 100,
            e: 'o3',
        })



        this.tl.from({
            el: line2[0],
            p: {
                y: [100, 0]
            },
            d: TDURATION,
            e: 'o4',
            delay: 100
        })
        this.tl.from({
            el: Object.values(line2).slice(1),
            p: {
                y: [100, 0],
                x: [80, 0, 'px']
            },
            d: 1000,
            e: 'o6',
            delay: 200
        })

        // for (const i of Object.keys(line2)) {

        // this.tl.from({
        //     el: line2[i],
        //     p: {
        //         y: [100, 0]
        //     },
        //     d: TDURATION,
        //     e: EASE,
        //     delay: TDELAY + 100 + OFFSET + i * DELAY / line2.length
        //     // delay: OFFSET + 100 + i * DELAY / line2.length
        // })
        // }

        // this.tl.from({
        //     el: this.wrapper,
        //     p: {
        //         y: [120, 0, 'px']
        //     },
        //     d: 1000,
        //     e: 'io2',
        //     delay: TDELAY
        // })


        this.tl.from({
            delay: TDURATION,
            // delay: TDURATION,
            update: _ => { },
            cb: _ => s()
        })
        this.tl.play()
    }
}