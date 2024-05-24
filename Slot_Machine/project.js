// 1. Deposit some money
// 2. Determine number of lines to bet on
// 3. Collect a bet amount
// 4. Spin the slot machine
// 5. Check if the user won
// 6. Give the user their winnings
// 7. play again

const prompt = require("prompt-sync")();

const ROWS = 3;
const COLUMNS = 3;

const SYMBOL_COUNT = {
    "A": 2,
    "B": 4,
    "C": 6,
    "D": 8
}

const SYMBOL_VALUES = {
    "A": 5,
    "B": 4,
    "C": 3,
    "D": 2
}

const deposit = () => {
    while (true) {
        const deposit_amount = prompt("Enter deposit amount: ");
        const amount_number = parseFloat(deposit_amount)

        if (isNaN(amount_number) || amount_number <= 0) {
            console.log("Invalid deposit amount, try again.");
        } else {
            return amount_number;
        }
    }
};

const get_no_of_lines_to_bet = () => {
    while (true) {
        const lines = prompt("Enter the number of lines to bet on (1-3): ");
        const number_of_lines = parseFloat(lines)

        if (isNaN(number_of_lines) || number_of_lines <= 0 || number_of_lines > 3) {
            console.log("Invalid input, try again.");
        } else {
            return number_of_lines;
        }
    }
};

const get_bet = (balance, lines) => {
    while (true) {
        const bet = prompt("Enter the total bet amount: ");
        const number_bet = parseFloat(bet)

        if (isNaN(number_bet) || number_bet <= 0 || number_bet > balance / lines) {
            console.log("Invalid bet, try again.");
        } else {
            return number_bet;
        }
    }
};

let balance = deposit();
const number_of_lines = get_no_of_lines_to_bet();
const bet = get_bet(balance, number_of_lines);