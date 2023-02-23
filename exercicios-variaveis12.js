let montante = 90000;
let capital_inicial = 60000;
let meses = 24;
let taxa_juros = Math.pow (montante / capital_inicial, 1 / meses) - 1 ;
console.log( `o seu financiamento de ${capital_inicial} reais teve uma taxa de juros de ${taxa_juros1} %, pois após ${meses} meses você teve que pagar ${montante} reais`);