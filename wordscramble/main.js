// Function to scramble the word
function scrambleWord() {
    // Get the original word
    var originalWord = document.getElementById("originalWord").value;
  
    // Convert the word to lowercase
    originalWord = originalWord.toLowerCase();
  
    // Check if the word contains only letters
    if (/^[a-zA-Z]+$/.test(originalWord)) {
      // Create an array to store the vowels
      var vowels = [];
  
      // Create an array to store the consonants
      var consonants = [];
  
      // Separate vowels and consonants
      for (var i = 0; i < originalWord.length; i++) {
        var letter = originalWord[i];
        if (isVowel(letter)) {
          vowels.push(letter);
        } else {
          consonants.push(letter);
        }
      }
  
      // Shuffle the vowels
      shuffleArray(vowels);
  
      // Combine the shuffled vowels with an empty array for consonants
      var shuffledWord = vowels.concat([]);
  
      // Display the scrambled word
      document.getElementById("scrambledWord").textContent = shuffledWord.join("");
    } else {
      // Display an error message if the word contains non-letter characters
      document.getElementById("scrambledWord").textContent = "Invalid word!";
    }
  }
  
  // Function to check if a letter is a vowel
  function isVowel(letter) {
    return ["a", "e", "i", "o", "u"].includes(letter);
  }
  
  // Function to shuffle an array using Fisher-Yates algorithm
  function shuffleArray(array) {
    var currentIndex = array.length;
    var temporaryValue, randomIndex;
  
    // While there remain elements to shuffle
    while (currentIndex !== 0) {
      // Pick a remaining element
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
  
      // Swap it with the current element
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
  
    return array;
  }
  