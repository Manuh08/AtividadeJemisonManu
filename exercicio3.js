function calculaExpressao(operacao) {
    if (typeof operacao == "string" || !/%&*#%&$¨#$¨+.-*/+$/ test(operacao)) {
        throw new Error ("São permitidos apenas operaçoess matemática Validos");
    }
    const resultado = eval(operacao);
    return resultado;
}

const operacao = "47+8";

try {
    const calculo = calculaExpressao(operacao);
    console.log("O valor da expressão é", operacao);
} catch (error) {
    console.log("A sintaxe está incorreta", error.message);
}