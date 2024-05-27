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

const spin = () => {
    const symbols = [];
    for (const [symbol, count] of Object.entries(SYMBOL_COUNT)) {
        for (let i=0; i < count; i++) {
            symbols.push(symbol);
        };
    };
    
    const reels = [];
    for (let i = 0; i < COLUMNS; i++) {
        reels.push([]);
        const reel_symbols = [...symbols];
        for (let j = 0; j < ROWS; j++) {
            const random_index = Math.floor(Math.random() * reel_symbols.length);
            const selected_symbol = reel_symbols[random_index];
            reels[i].push(selected_symbol);
            reel_symbols.splice(random_index, 1)
        };
    };

    return reels;
};

const transpose = (reels) => {
    const rows = [];

    for (let i = 0; i < ROWS; i++) {
        rows.push([]);
        for (let j = 0; j < COLUMNS; j++) {
            rows[i].push(reels[j][i]);
        };
    };

    return rows;
};

const printRows = (rows) => {
    for (const row of rows) {
        let row_string = "";
        for (const [i, symbol] of row.entries()) {
            row_string += symbol;
            if (i != row.length - 1) {
                row_string += " | ";
            };
        };
        console.log(row_string);
    };
};


const get_winnings= (rows, bet, lines) => {
    let winning = 0;

    for (let row = 0; row < lines; row++) {
        const symbols = rows[row];
        let allSame = true;

        for (const symbol of symbols) {
            if (symbol != symbols[0]) {
                allSame = false;
                break;
            };
        };

        if (allSame) {
            winning += bet * SYMBOL_VALUES[symbols[0]]
        };
    };

    return winning;
};


const game = () => {
    let balance = deposit();

    while (true) {
        console.log("You have a balance of $" + balance);
        const number_of_lines = get_no_of_lines_to_bet();
        const bet = get_bet(balance, number_of_lines);
        balance -= bet * number_of_lines;
        const reels = spin();
        const rows = transpose(reels);
        printRows(rows);
        const winnings = get_winnings(rows, bet, number_of_lines)
        balance += winnings;
        console.log("You won $" + winnings.toString())

        if (balance <= 0) {
            console.log("You ran out of money!");
            break;
        };

        const play_again = prompt("Do you want to play again (y/n)? ");

        if (play_again != "y") break;
    };
};

game();