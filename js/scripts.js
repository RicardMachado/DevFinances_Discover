const Modal = {
    open() {
        var modalOpen = document.querySelector(".modal-overlay");
        modalOpen.classList.add("active");
    },
    close() {
        var modalClose = document.querySelector(".modal-overlay");
        modalClose.classList.remove("active");
    }
}

const transaction = [
    {
        id: 1,
        description: 'Luz',
        amount: -50000,
        date: '23/01/2021'
    },
    {
        id: 2,
        description: 'Criação de Web Site',
        amount: 500000,
        date: '23/01/2021'
    },
    {
        id: 3,
        description: 'Internet',
        amount: -20000,
        date: '23/01/2021'
    },
]


const Transaction = {
    incomes() {
        // Somas as entradas
    },

    expenses() {
        // somas as Saídas
    },

    total() {
        // entradas - Saídas
    }
}

const DOM = {
    addTransaction(transaction, index) {
        const tr = document.createElement('tr')
        tr.innerHTML = DOM.innerHTMLTransaction(transaction)
    },

    innerHTMLTransaction(transaction) {
        const html = `
            <td class="description">${transaction.description}</td>
            <td class="expense">${transaction.amount}</td>
            <td class="date">${transaction.date}</td>
            <td>
                <img src="./assets/minus.svg" alt="Remover Transação">
            </td>
        `
        return html
    }
}

DOM.addTransaction(transaction[1])