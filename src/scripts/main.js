import { fetchAuthors, getAuthors, fetchLetter, fetchTopics, fetchRecipients, getRecipients, fetchSentLetters} from "./dataAccess.js"
import { penPal } from "./penpal.js"
import { chooseAuthorName, letterBox  } from "./Authors.js"
import { getTopics } from "./dataAccess.js"

const mainContainer = document.querySelector("#container")

const render = () => {

    fetchAuthors()
    .then(() => fetchLetter())
    .then(() => fetchTopics())
    .then(() => fetchRecipients())
    .then(() => fetchLetter())
    .then(() => fetchSentLetters())
    .then(
        () => {
            mainContainer.innerHTML = penPal()
            testing()
        }
    )
}
mainContainer.addEventListener(
    'stateChanged',
    customEvent => {
        render()
    }
)

render()



const testing = () => {
    //alert("hello, world")
    const authors = getRecipients()
    //debugger
    console.log(authors)
}