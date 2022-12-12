export default function Idade(campo){
    const dataNascimento = new Date(campo.value);
    if(!validaIdade(dataNascimento)){
        campo.setCustomValidity('O usuario nao e maior de idade');
    }

}

function validaIdade(data){
    const dataAtual = new Date();
    const mais18 = new Date(data.getUTCFullYear()+18, data.getUTCMonth(),data.getUTCDate());

    return dataAtual >= mais18;
}