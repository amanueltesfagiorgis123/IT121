<script>
    function translateToPigLatin() {
      // Get user input
      const text = document.getElementById('inputText').value;
      
      // Split the input text into words
      const words = text.split(' ');

      // Array to store the translated words
      let pigLatinWords = [];

      // Loop through each word and apply Pig Latin rules
      words.forEach(word => {
        let pigLatinWord = '';
        const vowels = ['a', 'e', 'i', 'o', 'u'];

        // Convert to lowercase to handle case sensitivity
        const lowerWord = word.toLowerCase();

        // Check if the word starts with a vowel
        if (vowels.includes(lowerWord[0])) {
          pigLatinWord = lowerWord + 'way';
        } else {
          // For consonant-starting words, find the first vowel
          let firstVowelIndex = 0;
          for (let i = 0; i < lowerWord.length; i++) {
            if (vowels.includes(lowerWord[i])) {
              firstVowelIndex = i;
              break;
            }
          }
          // Move consonants before the first vowel to the end, and add 'ay'
          pigLatinWord = lowerWord.slice(firstVowelIndex) + lowerWord.slice(0, firstVowelIndex) + 'ay';
        }

        // Add the Pig Latin word to the array
        pigLatinWords.push(pigLatinWord);
      });

      // Join the Pig Latin words back into a sentence
      const translatedText = pigLatinWords.join(' ');

      // Display the result
      document.getElementById('outputText').innerText = translatedText;
    }
  </script>
