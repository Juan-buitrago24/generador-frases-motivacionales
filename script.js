const quotes = [
    "El único modo de hacer un gran trabajo es amar lo que haces. - Steve Jobs",
    "La mejor manera de predecir el futuro es crearlo. - Abraham Lincoln",
    "No cuentes los días, haz que los días cuenten. - Muhammad Ali",
    "El éxito es la suma de pequeños esfuerzos repetidos día tras día. - Robert Collier",
    "La vida es 10% lo que te sucede y 90% cómo reaccionas ante ello. - Charles R. Swindoll",
    "No es lo que tenemos, sino lo que disfrutamos, lo que hace nuestra abundancia. - Epicurus",
    "Haz hoy lo que otros no quieren, haz mañana lo que otros no pueden. - Jerry Rice"
  ];
  
  const newQuoteButton = document.getElementById('new-quote');
  const quoteBox = document.getElementById('quote');
  
  newQuoteButton.addEventListener('click', () => {
    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    quoteBox.textContent = randomQuote;
  });
  