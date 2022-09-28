import { N } from "../utils/namhai"
const DWRAPPER = 1500
const DSPAN = 1000
const EASESPAN = 'io2'
const DELAYOSPAN = 200
const EASET = 'io5'
const DT = 700
export default class fakeLoaderAnimation {
    constructor(end) {
        this.loader = N.get('.fake__loader')
        this.wrapper = N.get('.fake__loader__n__wrapper')
        this.lines = N.getAll('.fake__loader__n', this.wrapper)

        this.tl = new N.TL
        this.lineHeight = this.lines[0].clientHeight
        this.height = window.innerHeight

        this.tl.from({
            delay: DWRAPPER,
            el: this.wrapper,
            d: DT,
            e: EASET,
            p: {
                y: [this.height, (this.height - this.lineHeight) * (1 - 0.27) + this.lineHeight, 'px']
            }
        })
        for (const index of Object.keys(this.lines)) {
            console.log(this.lines[+index]);
            if (index == 3) {
                this.tl.from({
                    el: this.wrapper,
                    p: {
                        o: [1, 0]
                    },
                    d: 500,
                    delay: DWRAPPER * (1 + +index)
                })
                break
            }
            Object.entries(N.getAll('span span', this.lines[index])).forEach(([spanI, span]) => {

                this.tl.from({
                    delay: DWRAPPER * (1 + +index) - DELAYOSPAN + 50 + spanI * 100,
                    el: span,
                    d: DSPAN,
                    e: EASESPAN,
                    p: {
                        y: [0, -100]
                    }
                })
            })

            Object.entries(N.getAll('span span', this.lines[+index + 1])).forEach(([spanI, span]) => {

                this.tl.from({
                    delay: DWRAPPER * (1 + +index) - DELAYOSPAN + spanI * 100,
                    el: span,
                    d: DSPAN,
                    e: EASESPAN,
                    p: {
                        y: [100, 0]
                    }
                })
            })
        }

        this.tl.from({
            delay: DWRAPPER * 2,
            el: this.wrapper,
            d: DT,
            e: EASET,
            p: {
                y: [(this.height - this.lineHeight) * (1 - 0.27) + this.lineHeight, (this.height - this.lineHeight) * (1 - .78) + this.lineHeight, 'px']
            }
        })


        this.tl.from({
            delay: DWRAPPER * 3,
            el: this.wrapper,
            d: DT,
            e: EASET,
            p: {
                y: [(this.height - this.lineHeight) * (1 - .78) + this.lineHeight, this.lineHeight, 'px']
            }
        })

        this.tl.from({
            delay: DWRAPPER * 4,
            el: this.loader,
            d: 1000,
            e: 'io5',
            p: {
                y: [0, -100]
            },
            cb: _ => {
                document.body.classList.remove('overflow')

                this.loader.remove()
                end()
            }
        })
        this.tl.play()
    }

}