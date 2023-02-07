import { getRecipients, sendLetter } from "./dataAccess.js"


export const penPalRecipient = () => {
    const recipients = getRecipients()

    let html = ''
    html += `<select class="recipient" id="recipient">
    <option value=''>Choose</option>
    ${
        recipients.map(
            recipient => {
                return `<option value="${recipient.id}">${recipient.name}</option>
                `
            }
        ).join('')
    }
    </select>\n`
  html +=   `<br><button class="button" id="sendLetter">Send Letter</button></br>`
    return html
}

const mainContainer = document.querySelector('#container')

mainContainer.addEventListener('click', clickEvent => {
    if (clickEvent.target.id === 'sendLetter') {
        const authorId = document.querySelector("#authors").value

        const letter = document.querySelector("#letter").value
        const recipientId = document.querySelector("#recipient").value
        const topicId =  document.querySelector("input[name='topic']:checked").value

        const dataToSendToAPI = {
            id: 0,
            letter: letter,
            authorId: authorId,
            recipientId: recipientId,
            topicId: topicId,
            date: Date.now()
        }
        sendLetter(dataToSendToAPI)
    }
})