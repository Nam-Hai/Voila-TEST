import fakeLoaderAnimation from './annimation/fakeLoaderAnimation'
import InitAnimation from './annimation/InitAnimation'
import TitleInitAnimation from './annimation/titleInitAnimation'
import './style.scss'
import { N } from './utils/namhai'

N.TopReload()
await new Promise(s => {
    new fakeLoaderAnimation(s)
})

new TitleInitAnimation()

new InitAnimation()