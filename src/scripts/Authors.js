import { getAuthors } from "./dataAccess.js";

export const chooseAuthorName = () => {
    const authors = getAuthors()

    let html = ''
    html += `<select class="authors" id="authors">
    <option value=''>Choose</option>
    ${
        authors.map(
            author => {
                return `<option value="${author.id}">${author.name}</option>
                `
            }
        ).join('')
    }
    </select>`
    return html
}



// letter box

export const letterBox = () => {
    let html = `
    <textarea class="letter_content" id="letter" name="letter"
              rows="15" cols="100">
    
    </textarea>
    
    `
    return html
}