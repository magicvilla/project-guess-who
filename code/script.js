// All the DOM selectors stored as short variables
const board = document.getElementById('board')
const questions = document.getElementById('questions')
const restartButton = document.getElementById('restart')
const findOut = document.getElementById('filter') //find out button
const winOrLose =document.getElementById('winOrLose')
const playAgain = document.getElementById('playAgain')
const winOrLoseText = document.getElementById('winOrLoseText')

// Array with all the characters, as objects
const CHARACTERS = [
  {
    name: 'Jabala',
    img: 'images/jabala.svg',
    hairColor: 'hidden',
    eyeColor: 'hidden',
    glasses: true,
    hat: true,
    smoker: false,
  },
  {
    name: 'Jack',
    img: 'images/jack.svg',
    hairColor: 'hidden',
    eyeColor: 'blue',
    glasses: false,
    hat: true,
    smoker: false,
  },
  {
    name: 'Jacques',
    img: 'images/jacques.svg',
    hairColor: 'grey',
    eyeColor: 'blue',
    glasses: false,
    hat: true,
    smoker: true,
  },
  {
    name: 'Jai',
    img: 'images/jai.svg',
    hairColor: 'black',
    eyeColor: 'brown',
    glasses: false,
    hat: false,
    smoker: false,
  },
  {
    name: 'Jake',
    img: 'images/jake.svg',
    hairColor: 'yellow',
    eyeColor: 'green',
    glasses: true,
    hat: false,
    smoker: false,
  },
  {
    name: 'James',
    img: 'images/james.svg',
    hairColor: 'brown',
    eyeColor: 'green',
    glasses: true,
    hat: false,
    smoker: false,
  },
  {
    name: 'Jana',
    img: 'images/jana.svg',
    hairColor: 'black',
    eyeColor: 'hidden',
    glasses: true,
    hat: false,
    smoker: false,
  },
  {
    name: 'Jane',
    img: 'images/jane.svg',
    hairColor: 'yellow',
    eyeColor: 'hidden',
    glasses: true,
    hat: false,
    smoker: false,
  },
  {
    name: 'Jaqueline',
    img: 'images/jaqueline.svg',
    hairColor: 'orange',
    eyeColor: 'green',
    glasses: true,
    hat: false,
    smoker: false,
  },

  {
    name: 'Jazebelle',
    img: 'images/jazebelle.svg',
    hairColor: 'purple',
    eyeColor: 'hidden',
    glasses: true,
    hat: false,
    smoker: true,
  },
  {
    name: 'Jean',
    img: 'images/jean.svg',
    hairColor: 'brown',
    eyeColor: 'blue',
    glasses: true,
    hat: true,
    smoker: true,
  },
  {
    name: 'Jeane',
    img: 'images/jeane.svg',
    hairColor: 'brown',
    eyeColor: 'green',
    glasses: true,
    hat: false,
    smoker: false,
  },
  {
    name: 'Jed',
    img: 'images/jed.svg',
    hairColor: 'orange',
    eyeColor: 'green',
    glasses: true,
    hat: true,
    smoker: true,
  },
  {
    name: 'Jenni',
    img: 'images/jenni.svg',
    hairColor: 'white',
    eyeColor: 'hidden',
    glasses: false,
    hat: true,
    smoker: false,
  },
  {
    name: 'Jeri',
    img: 'images/jeri.svg',
    hairColor: 'orange',
    eyeColor: 'green',
    glasses: true,
    hat: false,
    smoker: false,
  },
  {
    name: 'Jerry',
    img: 'images/jerry.svg',
    hairColor: 'hidden',
    eyeColor: 'blue',
    glasses: false,
    hat: true,
    smoker: false,
  },
  {
    name: 'Jess',
    img: 'images/jess.svg',
    hairColor: 'black',
    eyeColor: 'blue',
    glasses: true,
    hat: false,
    smoker: false,
  },
  {
    name: 'Jocelyn',
    img: 'images/jocelyn.svg',
    hairColor: 'black',
    eyeColor: 'brown',
    glasses: true,
    hat: false,
    smoker: false,
  },
  {
    name: 'Jon',
    img: 'images/jon.svg',
    hairColor: 'brown',
    eyeColor: 'green',
    glasses: true,
    hat: false,
    smoker: false,
  },
  {
    name: 'Jordan',
    img: 'images/jordan.svg',
    hairColor: 'yellow',
    eyeColor: 'hidden',
    glasses: true,
    hat: true,
    smoker: false,
  },
  {
    name: 'Josephine',
    img: 'images/josephine.svg',
    hairColor: 'grey',
    eyeColor: 'brown',
    glasses: false,
    hat: false,
    smoker: false,
  },
  {
    name: 'Josh',
    img: 'images/josh.svg',
    hairColor: 'yellow',
    eyeColor: 'green',
    glasses: false,
    hat: false,
    smoker: false,
  },
  {
    name: 'Jude',
    img: 'images/jude.svg',
    hairColor: 'black',
    eyeColor: 'green',
    glasses: false,
    hat: false,
    smoker: false,
  },
  {
    name: 'Julie',
    img: 'images/julie.svg',
    hairColor: 'black',
    eyeColor: 'brown',
    glasses: true,
    hat: true,
    smoker: false,
  },
]

// Global variables
let secret, currentQuestion, charactersInPlay


// Draw the game board
const generateBoard = () => {
  board.innerHTML = ''
  charactersInPlay.forEach((person) => {
    board.innerHTML += `
      <div class="card">
        <p>${person.name}</p>
        <img src=${person.img} alt=${person.name}>
        <div class="guess">
          <span>Guess on ${person.name}?</span>
          <button class="filled-button small" onclick="guess('${person.name}')">Guess</button>
        </div>
      </div>
    `
  })
}

// Randomly select a person from the characters array and set as the value of the variable called secret
const setSecret = () => {
  secret = charactersInPlay[Math.floor(Math.random() * charactersInPlay.length)]
}

// This function to start (and restart) the game
const start = () => {
  winOrLose.style.display = 'none'
  board.style.display = 'flex'
  // Here we're setting charactersInPlay array to be all the characters to start with
  charactersInPlay = CHARACTERS
  //shows, generates the gameboard
  generateBoard() 
  //sets the secret person
  setSecret()
  console.log(`Secret person ${secret.name}`)
  // What else should happen when we start the game?
}

// setting the currentQuestion object when you select something in the dropdown
const selectQuestion = () => {
  const category = questions.options[questions.selectedIndex].parentNode.label
  // This variable stores what option group (category) the question belongs to.
  // We also need a variable that stores the actual value of the question we've selected.
  //console.log(category) //hair color, eye color, accessories, other
   const value = questions.options[questions.selectedIndex].value
  //console.log(value)// brown, blue, glasses, smoker

  if (category === 'hair color') {
    currentQuestion = {
      attribute: 'hairColor',
      value: value,
      // 👆 add the value from the input here
      category: category,
    }
  } else if (category === 'eye color') {
    // Set this up your self
    currentQuestion = {
      attribute: 'eyeColor',
      value: value,
      // 👆 add the value from the input here
      category: category,
    }
  } else if (category === 'accessories') {
    currentQuestion = {
      attribute: value,
      // 👆 this is the property of the booleans such as smoke, glasses and hat. add the value from the input here
      value: true, // we're asking if this person wears a hat for exaple, so always true in the question.
      category: category,
    }
  } else if (category === 'other') {
    // Set this up your self (should be same structure as above)
    currentQuestion = {
      attribute: value,
      value: true,
      category: category,
    }
  }
}

// This function should be invoked when you click on 'Find Out'.
const checkQuestion = () => {
  //console.log(secret)
  //console.log(secret[currentQuestion.attribute]) //prints out the attribute of secret person (eg. brown hair, glasses: true, brown eyes)
  
  // *Compare the currentQuestion with the secret person.
  //console.log(currentQuestion.value) // prints out the value of the current question (eg. purple hair, glasses: false, blue eyes)
  // *See if we should keep or remove people based on that
  //* Then invoke filterCharacters
  if (secret[currentQuestion.attribute] === currentQuestion.value) { //if they are the same 
    filterCharacters(true)
  } else {
    filterCharacters(false)
  }  
}

// It'll filter the characters array and redraw the game board.
const filterCharacters = (keep) => {
  group = currentQuestion.category
  console.log(keep) //false or true
  console.log(group)// eg. haircolor, accessories
  console.log(currentQuestion.category) // same as group
  //console.log(secret[currentQuestion.attribute]) //the attribute of secrret person eg. orange hair, blue eyes
  //console.log(currentQuestion.value) // same but for the selected  - this one for below? 
  // Show the correct alert message for different categories
  if (group === 'accessories') {
    if (keep) {
      alert(
        `Yes, the person wears ${currentQuestion.attribute}! Keep all that wears ${currentQuestion.attribute}`
      )
    } else {
      alert(
        `No, the person doesn't wear ${currentQuestion.attribute}! Remove all that wears ${currentQuestion.attribute}`
      )
    }
  } else if (group === 'eye color') {
    if (keep) {
      alert(
        `Yes the person has ${currentQuestion.value} eyes! Keep all with eyes ${currentQuestion.value}`
      )
    } else {
      alert (
        `No the person has not ${currentQuestion.value} eyes! Remove all with eyes ${currentQuestion.value}`
      )
    }
  } else if (group === 'other') {
    if (keep) { //attribute to show glasses, smoker etc
      alert(
        `Yes, the person is a ${currentQuestion.attribute}! Keep all persons who are a ${currentQuestion.attribute}`
      )
    } else {
      alert (
        `No, the person is not a  ${currentQuestion.attribute}! Remove all the persons who are a ${currentQuestion.attribute}`
      )
    }
    // Similar to the one above
  } else {
    if (keep) { //works and shows haircolor 
      alert (
        `Yes, the person has ${currentQuestion.value} hair! Keep all with hair ${currentQuestion.value} `
      )
      // alert popup that says something like: "Yes, the person has yellow hair! Keep all persons with yellow hair"
    } else {
      alert (
        `No, the person doesn't have ${currentQuestion.value} hair! Remove all with hair ${currentQuestion.value} `
      )
      // alert popup that says something like: "NO, the person doesnt have yellow hair! Remove all persons with yellow hair"
    }
  }

  if (keep) { // om ja att person har ex blont hår - filtrera bort de som inte har blont eller om Nej- false 
    charactersInPlay = charactersInPlay.filter((person) => person[currentQuestion.attribute] === currentQuestion.value) // filtera bort dom som inte har samma
  } else {
    charactersInPlay = charactersInPlay.filter((person) => person[currentQuestion.attribute] !== currentQuestion.value) //om inte innehåller filtrera bort
  }
  // filter to keep or remove based on the keep variable.

  // Invoke a function to redraw the board with the remaining people.
  generateBoard()
}

// when clicking guess, the player first have to confirm that they want to make a guess.
const guess = (suspect) => {
  const guessConfirmation =  confirm(`Are you sure you want to guess on ${suspect} ?`)
  if (guessConfirmation){
    console.log(suspect)
    checkMyGuess(suspect)
  }
  // store the interaction from the player in a variable.
  // remember the confirm() ?
  // If the player wants to guess, invoke the checkMyGuess function.
}

// If you confirm, this function is invoked
const checkMyGuess = (suspect) => {
  if (suspect === secret.name){
    //the H1 in the html
    winOrLoseText.innerHTML = `
    Congratulations! You guessed ${suspect} and that is the correct person!
    `
  } else {
    winOrLoseText.innerHTML = `
    Oh no... you guessed on ${suspect} and you couldn't be more wrong. 
    Have you even played this game before? Seems like you need more practise. 
    `
  }

  winOrLose.style.display = 'flex' //shows the winOrLose 
  board.style.display = 'none' //takes away the board
  // 1. Check if the suspect is the same as the secret person's name
  // 2. Set a Message to show in the win or lose section accordingly
  // 3. Show the win or lose section
  // 4. Hide the game board
}

// Invokes the start function when website is loaded
start()

// All the event listeners
restartButton.addEventListener('click', start)
playAgain.addEventListener('click', start)
questions.addEventListener('change', selectQuestion)
findOut.addEventListener('click', checkQuestion)