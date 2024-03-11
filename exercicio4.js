function getElementPorIndice(array,indice){
    try{
        if(indice < 0 || indice >= array.length){
            throw new Error ("Esse indice não está dentro do array");
        }
        return array[Indice];
    } catch (error) {
      return error.message
    }

}