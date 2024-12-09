try {
    console.log('Antes de lançar erro');

    //lançar erro
    throw 'erro criado por mim';

    console.log('alguamcoisa');
    
    
} catch (erro) {
    console.log(erro);   
}