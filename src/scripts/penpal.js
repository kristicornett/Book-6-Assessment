import { getAuthors } from "./dataAccess.js"
import { chooseAuthorName, letterBox } from "./Authors.js"
import { topics } from "./topics.js"
import { penPalRecipient } from "./penPalRecipient.js"
import { Letter } from "./sentLetters.js"

export const penPal = () => {
    return `
    <h1 class="title">Pen Pal Society</h1>
    <section class="authorList">
        ${chooseAuthorName()}
    </section>

    <section class="letterBox">
        <h2 class="letter_title">Letter</h2>
           ${letterBox()} 
    </section>

    <section class="topics">
        <h2 class="topics_title">Topics</h2>
            ${topics()}
    </section>

    <section class"recipient">
        <h2 class="recipient_title">Recipient</h2>
            ${penPalRecipient()}
    </section>

    <section class="sentLetters">
        <h2 class="sent_letter_title">Sent Letters</h2>
            ${Letter()}
    `
}