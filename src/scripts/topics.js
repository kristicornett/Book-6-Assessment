
import { getTopics } from "./dataAccess.js"


export const topics = () => {
    let topics = getTopics()
    let html = ''

    let topicArray = topics.map(topics => {
        return `
            <input class="radio" type="radio" name="topic" value="${topics.id}"> ${topics.name}</input>`
            
    })

    html += topicArray.join('')
    html += '<ul>'
    return html
}










