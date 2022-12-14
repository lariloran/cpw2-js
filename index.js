/**
 * Recebe um array com os nomes de pessoas e retorna um array invertido
 *
 * @param {*} people : Um array contendo um conjunto de nomes
 * @returns Um array com os nomes invertidos
 */
function invert(people){

    // TODO
    // 1) Peça ao usuário para digitar vários nomes. Exiba na tela
    // todos os nomes digitados, porém de maneira invertida (do último para o primeiro).
    // Uma dica, você pode utilizar a função prompt para permitir que o usuário digite os
    // nomes dos usuários.
    let pessoasInvertidas = [];
    for(let i = people.length - 1; i >= 0; i--) {
        pessoasInvertidas.push(people[i]);
    }
    return pessoasInvertidas;
}

/**
 * Essa função recebe um array de notas e retorna uma média
 *
 * @param {*} grades : Um array de notas
 * @returns Uma média a partir do array de notas
 */
function mean(grades){

    // TODO
    // 2) Faça um programa que leia o nome e as três notas de uma disciplina de um aluno e ao final escreva
    // o nome do aluno, sua média e se ele foi aprovado, sabendo-se que a média para aprovação é igual
    // ou superior a 7.
    let mean;
    let sum = 0;
    for (let i = 0; i <= grades.length - 1; i++) {
        sum+= grades[i];
    }
    mean = sum / grades.length;
    return mean;
}

/**
 * Função recebe uma média e informa textualmente se um estudante está aprovado ou não
 *
 * @param {*} mean : Um número que representa uma média
 * @returns Uma string dizendo se um estudante está aprovado ou não
 */
function isApproved(mean){

    // TODO
    // 2.1) Faça um programa que leia o nome e as três notas de uma disciplina de um aluno e ao final escreva
    // o nome do aluno, sua média e se ele foi aprovado, sabendo-se que a média para aprovação é igual
    // ou superior a 7.

    if (mean >= 7) {
        return "aprovado";        
    } else {
        return "reprovado";
    }

}

/**
 * Recebe uma data no formato de string e transforma em um formato textual
 *
 * @param {*} strDate : Uma string no formato de data
 * @returns Uma descrição da data informada
 */
function wide(strDate){

    // TODO
    // 3) Faça um script que receba uma data no formato “dd/mm/aaaa” e escreva a data por extenso,
    // por exemplo, de "03/03/2022" para "03 de março de 2022". Dica: use a função
    // “split” de uma string que quebra a string em pedaços dado um separador como argumento da função.
    // Nesse caso, o separador é a barra (/) da data.

    if (strDate == "") {
        return "";
    } else if (strDate.includes("-")) {
        return "";
    }

    let splittedDate = strDate.split("/");
    let month = mountALiteralMonth(splittedDate[1]);

    return splittedDate[0] + " de " + month + " de " + splittedDate[2];
}

function mountALiteralMonth(month) {
    switch(month) {
        case "01":
            return month = "janeiro";
        case "02":
            return month = "fevereiro";
        case "03":
            return month = "março";
        case "04":
            return month = "abril";
        case "05":
            return month = "maio";
        case "06":
            return month = "junho";
        case "07":
            return month = "julho";
        case "08":
            return month = "agosto";
        case "09":
            return month = "setembro";
        case "10":
            return month = "outubro"
        case "11":
            return month = "novembro";
        case "12":
            return month = "dezembro";
    }
}

// Trecho utilizado pelos testes
exports._test = {
    invert: invert,
    mean: mean,
    isApproved: isApproved,
    wide: wide
}