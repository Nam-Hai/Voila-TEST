import InitAnimation from './annimation/InitAnimation'
import TitleInitAnimation from './annimation/titleInitAnimation'
import './style.scss'
import { N } from './utils/namhai'
import Page from './Page/main.html?raw'
import GalleryInitAnimation from './annimation/GalleryInit'
async function app() {
    N.TopReload()

    const app = N.get('#app')
    app.innerHTML = Page

    await new Promise(s => {
        new GalleryInitAnimation(s)

    })
    // await new Promise(s => {
    new TitleInitAnimation()
    // })

    new InitAnimation()
}
app()