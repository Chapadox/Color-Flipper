const colors = ['red', 'green', 'blue', 'black', 'gray', 'purple', 'pink', 'orange', 'turquoise']

function mudarCor() {
    const number = Math.floor(Math.random() * colors.length)
    document.body.style.backgroundColor = colors[number];
}