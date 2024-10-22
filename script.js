const quotes = [
    "\"국가는 곧 나다!\"",
    "\"군주의 권력은 절대적이다.\"",
    "\"베르사유는 프랑스의 상징이다.\"",
    "\"모든 것은 나의 통제 하에 있다.\""
];

document.getElementById("new-quote").addEventListener("click", function() {
    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    document.getElementById("quote").innerHTML = `<p>${randomQuote}</p>`;
});
