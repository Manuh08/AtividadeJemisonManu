        function verificarNumeroValido(numero){
            if (numero){
                throw new Error ("São permitidos apenas numeros Validos!");
            }
            return numero
        }
        const numero = parseInt("M");

        try{
            const numeroVA =  verificarNumeroValido(numero);
            console.log ("O numero e valido:!", numeroVA );
        } catch (error) {
        console.log("Ocorreu um erro:", error.message);
        }
        