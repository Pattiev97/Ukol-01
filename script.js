const jmeno = prompt("Zadej své křestní jméno bez diakritiky:").trim().toLowerCase()
const prijmeni = prompt("Zade jsvé příjmení bez diakritiky:").trim().toLowerCase()

document.body.innerHTML += `Tvá e-mailová adresa je ${prijmeni.slice(0, 5)}${jmeno.slice(0, 3)}@fit.cvut.cz
`

document.title = "Vyhlídalová - Úkol 1"