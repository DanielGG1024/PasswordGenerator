function sample(collection) {
    const randomIndex = Math.floor(Math.random() * collection.length)
    return collection[randomIndex]
}

function generatePassword(option) {

    // 定義資料
    const lowerCaseLetters = 'abcdefghijklmnopqrstuvwxyz'
    const upperCaseLetters = lowerCaseLetters.toUpperCase()
    const numbers = '1234567890'
    const symbols = '`~!@$%^&*()-_+={}[]|;:"<>,.?/'

    // 判斷使用者輸入的資料
    // 並且收集起來

    let collection = []

    if (option.lowercase === 'on') {
        collection = collection.concat(lowerCaseLetters.split(''))
    }
    if (option.uppercase === 'on') {
        collection = collection.concat(upperCaseLetters.split(''))
    }
    if (option.numbers === 'on') {
        collection = collection.concat(numbers.split(''))
    }
    if (option.symbols === 'on') {
        collection = collection.concat(symbols.split(''))
    }

    // 排除不要的字串

    // let a = option.excludeCharacters.split('')
    // a.forEach(element => {
    //     let index = collection.indexOf(element)
    //     collection.splice(index,1)
    // })

    if (option.excludeCharacters) {
        collection = collection.filter(
            character => !option.excludeCharacters.includes(character))
    }

    // if (option.excludeCharacters) {
    //     collection = collection.filter((charater) => {
    //         if (option.excludeCharacters.includes(charater)) {
    //             return false
    //         }
    //         return true
    //     })
    // }
    // 印出指定長度
    let password = ''
    for (i = 1; i <= option.length; i++) {
        password += sample(collection)
    }

    // 回傳
    return password
}

module.exports = generatePassword