// Define suits and card values (Ace = 14, Jack = 11, etc.)
const suits = ['Hearts', 'Diamonds', 'Clubs', 'Spades'];
const values = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14]; // 11=Jack, 12=Queen, 13=King, 14=Ace

// Card object constructor
function Card(value, suit) {
    this.value = value;
    this.suit = suit;
}

// Function to generate the full deck of 52 unique cards
function createDeck() {
    const deck = [];
    for (let suit of suits) {
        for (let value of values) {
            deck.push(new Card(value, suit));
        }
    }
    return deck;
}

// Convert card value to name if it's a face card
function getCardName(card) {
    if (card.value === 11) return 'Jack of ' + card.suit;
    if (card.value === 12) return 'Queen of ' + card.suit;
    if (card.value === 13) return 'King of ' + card.suit;
    if (card.value === 14) return 'Ace of ' + card.suit;
    return card.value + ' of ' + card.suit;
}

// Function to randomly select 5 cards from the deck
function drawCards() {
    const deck = createDeck();
    const hand = [];

    // Shuffle the deck and pick the first 5 cards
    while (hand.length < 5) {
        const randomIndex = Math.floor(Math.random() * deck.length);
        const selectedCard = deck.splice(randomIndex, 1)[0];
        hand.push(selectedCard);
    }

    displayHand(hand);
}

// Function to display the cards on the page
function displayHand(hand) {
    const cardContainer = document.getElementById('cardContainer');
    cardContainer.innerHTML = ''; // Clear the previous hand

    hand.forEach(card => {
        const cardDiv = document.createElement('div');
        cardDiv.classList.add('card');
        cardDiv.innerText = getCardName(card);
        cardContainer.appendChild(cardDiv);
    });
}
