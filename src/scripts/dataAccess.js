const applicationState = {
    letters: [],
    authors: [],
    topics: [],
    recipients: [],
    savedLetters: []
}

const mainContainer = document.querySelector('#container')
const API = "http://localhost:8088"

export const fetchTopics = () => {
    return fetch(`${API}/topics`)
    .then(response => response.json())
    .then(
        (data) => {
            applicationState.topics = data
        }
    )
}

export const getTopics = () => {
    return applicationState.topics.map(topic => ({...topic}))
}

export const fetchAuthors = () => {
    return fetch(`${API}/authors`)
        .then(response => response.json())
        .then(
            (data) => {
                applicationState.authors = data
            }
        )
}

export const getAuthors = () => {
    return applicationState.authors.map(author => ({...author}))
}

export const fetchRecipients = () => {
    return fetch(`${API}/recipients`)
    .then(response => response.json())
    .then(
        (data) => {
            applicationState.recipients = data
        }
    )
}

export const getRecipients = () => {
    return applicationState.recipients.map(recipient => ({...recipient}))
}

export const fetchLetter = () => {
    return fetch(`${API}/letters`)
    .then(response => response.json())
    .then(
        (letters) =>
        applicationState.letters = letters
    )
}

export const fetchSentLetters = () => {
    return fetch(`${API}/letters`)
    .then(response => response.json())
    .then(
        (savedLetters) =>
        applicationState.savedLetters = savedLetters
    )
}

export const getSavedLetters = () => {
    return applicationState.savedLetters.map(savedLetter => ({...savedLetter}))
}

export const getLetter = () => {
    return applicationState.letters.map(letter => ({...letter}))
}

export const sendLetter = (userLetter) => {
    const fetchOptions = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(userLetter)
    }
    return fetch(`${API}/letters`, fetchOptions)
    .then(response => response.json())
    .then((responseJson) => {
        mainContainer.dispatchEvent(new CustomEvent('stateChanged'))
    }
    )
}

export const saveLetter = (letterObject) => {
    const fetchOption = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(letterObject)
    }

    return fetch(`${API}/letters`, fetchOption)
    .then(response => response.json())
    .then(() => {
        mainContainer.dispatchEvent(new CustomEvent('stateChanged'))
    })
}

export const deleteLetter = (id) => {
    return fetch(`${API}/letters/${id}`, { method: 'DELETE'})
    .then(
        () => {
            mainContainer.dispatchEvent(new CustomEvent('stateChanged'))
        }
    )
}