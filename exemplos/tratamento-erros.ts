function nome(texto: any){
    texto.split('/');
}

try {
    //tenta fazer o que esta aqui 
    console.log('Dilber');
    
    nome(123);    
} catch (erro) {
    //e caso algum erro aconteça é tratado aqui
    if(erro instanceof TypeError){
        console.log(erro.message);
        
    }
    console.log('erro desconhecido');
    
} finally {
    //sempre executa independente do erro ou não
    console.log('sempre sera executado');
    
}