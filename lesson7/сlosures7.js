function userCard(kee) {

    let key = 1;
    if (kee >= 1 && kee <= 3) {
        key = kee;
    } else {
        return console.error('Лимит количества карт исчерпан. У вас уже есьб 3 карты.');
    }
    let cardInfo = {balance: 100, transactionLimit: 100, historylogs: [], key: key};
    let userWorker = {
        getCardOptions: function () {
            return cardInfo;
        },
        putCredits: function (credits) {
            cardInfo.balance += credits;
            cardInfo.historylogs.push({
                operationType: 'Resived credits',
                credits: credits,
                operationTime: new Date().toLocaleString()
            })
        },
        takeCredits: function (credits) {
            if (credits <= cardInfo.balance && credits <= cardInfo.transactionLimit) {
                cardInfo.balance -= credits;
                cardInfo.historylogs.push({
                    operationType: 'Withdrawal of credits',
                    credits: credits,
                    operationTime: new Date().toLocaleString()
                })
            } else {
                console.error('Недоствточно денег на счету, или недоствточен лимит на перевод.');
            }
        },
        setTransactionlimit: function (limit) {
            cardInfo.transactionLimit = limit;
            cardInfo.historylogs.push({
                operationType: 'Transaction limit change',
                credits: limit,
                operationTime: new Date().toLocaleString()
            })
        },
        transferCredits: function (credits, card) {
            if (credits <= cardInfo.balance && credits <= cardInfo.transactionLimit) {

                card.putCredits(credits * 0.995);
            } else {
                console.error('Недоствточно денег на счету, или недоствточен лимит на перевод.');
            }
            userWorker.takeCredits(credits);
        }

    }
    return userWorker;
}

class UserAccount {
    constructor(name) {
        this.name = name;
        this.cards = [];
        this.key = 1;
    }

    addCard() {
        this.cards.push(userCard(this.key));
        this.key++;
    }

    getCardByCay(key) {
        if (key >= 1 && key <= 3) {
            for (const item of this.cards) {
                if (item.getCardOptions().key === key) {
                    return item;
                }
            }
        }
    }
}

user = new UserAccount('Bob');
user.addCard();
user.addCard();

// console.log(user);
let card1 = user.getCardByCay(1);
let card2 = user.getCardByCay(2);

card1.putCredits(500);
card1.setTransactionlimit(800);
card1.transferCredits(300, card2);

card2.takeCredits(50);


console.log(card1.getCardOptions());
console.log(card2.getCardOptions());
