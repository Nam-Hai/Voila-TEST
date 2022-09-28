import InitAnimation from './annimation/InitAnimation'
import TitleInitAnimation from './annimation/titleInitAnimation'
import './style.scss'
import { N } from './utils/namhai'
async function app() {
    N.TopReload()

    await new Promise(s => {
        new TitleInitAnimation(s)
    })

    new InitAnimation()
}
app()