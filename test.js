let aze = prompt('Deyişmək isdədiyiniz məbləgi qeyd edin');
let usd = aze / 1.7;
let eur = aze / 1.85
let tl = aze / 0.06523
let rus = aze / 0.01861
document.getElementById('murik').innerHTML = aze + ' ₼ = ' + usd.toFixed() + ' $' ;
document.getElementById('ss').innerHTML = aze + ' ₼ = ' + eur.toFixed() + ' €' ;
document.getElementById('cc').innerHTML = aze + ' ₼ = ' + tl.toFixed() + ' TL ' ;
document.getElementById('aa').innerHTML = aze + ' ₼ = ' + rus.toFixed() + ' ₽' ;
    