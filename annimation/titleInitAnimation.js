import { N } from "../utils/namhai"
const DURATION = 700
const TDURATION = 500
export default class TitleInitAnimation {
    constructor() {
        this.tl = new N.TL
        this.titleLines = N.getAll('h1 > div')


        for (const line of Object.values(this.titleLines)) {
            let letters = N.getAll('span span', line)
            for (const index of Object.keys(letters)) {
                this.tl.from({
                    el: letters[index],
                    p: {
                        y: [100, 0]
                    },
                    delay: index * DURATION / letters.length,
                    d: TDURATION,
                    e: 'o4'
                })
            }

        }


        this.tl.play()
    }
}