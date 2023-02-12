const labels = document.querySelectorAll('.form-control label');

labels.forEach(label => {
    label.innerHTML = label.innerText
        .split('')
        .map((letter, idx) => `<span style="transition-delay:${idx * 50}ms">${letter}</span>`) //faz com que o idx que começa em zero, depois um, dois, três e assim por diante
        // vai multiplicar por cinquenta, então o primeira será zero, o segundo cinquenta e assim por diante.
        .join('')
})