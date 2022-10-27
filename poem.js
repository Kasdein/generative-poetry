// this is a function to return a random element from an array
function randomElementInArray(inputArray) {
    let randomIndex = Math.floor(Math.random() * inputArray.length)
    return inputArray[randomIndex]
}

let openingLine = "Walking along the dewy meadows "
let pronouns = ["I ", "We ", "She ", "He ", "They ", "It ",]
let verbs = ["fell ", "hummed ", "explored ", "hopped ", "treaded ", "observed "]
let adverbs = ["violently ", "joyfully ", "inquisitively ", "clumsily ", "carefully ", "calmly "]
let support = ["around ", "through ", "back to ", "under ", "above ", "at "]
let endOfLine = ["a cow ", "the fields ", "the nearby woods ", "a field of wheat ", "the sky ", "the clouds "]
let connecter = ["But ", "Whilst ", "And ", "Just as ", "Should ", "Merely as "]

let randomPronoun = randomElementInArray(pronouns)
let randomVerb = randomElementInArray(verbs)
let randomAdverb = randomElementInArray(adverbs)
let randomSupport = randomElementInArray(support)
let randomEndOfLine = randomElementInArray(endOfLine)
let randomConnecter = randomElementInArray(connecter)

let firstLine = randomPronoun + randomVerb + randomAdverb + randomSupport + randomEndOfLine

document.getElementById("para").innerHTML = openingLine

document.getElementById("paratwo").innerHTML = firstLine

let longPoem = ""

for (let i = 0; i < 10; i++) {
    let randomPronoun = randomElementInArray(pronouns)
    let randomVerb = randomElementInArray(verbs)
    let randomAdverb = randomElementInArray(adverbs)
    let randomSupport = randomElementInArray(support)
    let randomEndOfLine = randomElementInArray(endOfLine)
    let randomConnecter = randomElementInArray(connecter)
    longPoem += randomConnecter + randomPronoun + randomVerb + randomAdverb + randomSupport + randomEndOfLine
    longPoem += "<br>"
}

document.getElementById("parathree").innerHTML = longPoem