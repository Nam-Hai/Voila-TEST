import { N } from "../utils/namhai"
const DURATION = 700
const TDELAY = 1500
const OFFSET = 300
const TDURATION = 400
const DELAY = 200
const EASE = 'io2'
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
                letters[index].style.width = `${size.width}px`
                dLetter.style.width = `${size.width}px`

                N.T(dLetter, 0, lineIndex == 0 ? 50 : 100)
            }
        }

        let line1 = N.getAll('span span', this.titleLines[0])
        let line2 = N.getAll('span span', this.titleLines[1])
        for (const i of Object.keys(line1)) {
            // this.tl.from({
            //     el: line1[i],
            //     p: {
            //         y: [100, 50]
            //     },
            //     d: TDURATION,
            //     e: EASE,
            //     delay: i * DELAY / line1.length
            // })

            this.tl.from({
                el: line1[i],
                p: {
                    y: [50, 0]
                },
                d: TDURATION,
                e: EASE,
                // delay: TDELAY + OFFSET + i * DELAY / line1.length
                delay: OFFSET + i * DELAY / line1.length
            })
        }


        for (const i of Object.keys(line2)) {
            this.tl.from({
                el: line2[i],
                p: {
                    y: [100, 0]
                },
                d: TDURATION,
                e: EASE,
                // delay: TDELAY + OFFSET + i * DELAY / line2.length
                delay: OFFSET + i * DELAY / line2.length
            })
        }

        // this.tl.from({
        //     el: this.wrapper,
        //     p: {
        //         y: [220, 0, 'px']
        //     },
        //     d: 1000,
        //     e: 'io4',
        //     delay: TDELAY
        // })


        this.tl.from({
            // delay: DURATION + TDURATION,
            delay: TDURATION,
            update: _ => { },
            cb: _ => s()
        })
        this.tl.play()
    }
}