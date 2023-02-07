import { getSavedLetters, saveLetter, sendLetter, fetchLetter, getLetter, getTopics } from "./dataAccess.js"

export const Letter = () => {
const letters = getLetter()
const topics = getTopics()
let html = ''
html += `<section class="letter_content" id="letter">
${letters.map(
    letter => {
        let topicFinder = topics.find(topic => {return topic.id == letter.topicId})
        return `
        <div class="letter_box">
            <div class="letter_body">
                ${letter.letter}
            </div>
            <div class="letter_topic">
                <span class="letter_topic_name">
                ${topicFinder.name}
                </div>
            </div>
        </div>`
        
    }
).join('')
}


</section>`
return html

}


