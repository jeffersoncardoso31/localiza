let imagem = document.querySelector('.primeira-imagem');
let tamanho = null;
let setas = document.querySelectorAll('.seta');


setas[0].addEventListener('click', voltar);
setas[1].addEventListener('click', continuar);


function voltar() {
    if (tamanho > 0 && tamanho <= 300) {
        tamanho -= 100;
    } else {
        tamanho = 300;
    }
    imagem.style.marginLeft = `calc(-${tamanho}vw + 1px)`;
}
function continuar() {
    if (tamanho >= 0 && tamanho < 300) {
        tamanho += 100;
    } else {
        tamanho = 0;
    }
    imagem.style.marginLeft = `calc(-${tamanho}vw + 1px)`;
}
setInterval(() => {
    if (tamanho >= 300) {
        tamanho = 0;
    } else {
        tamanho += 100;
    }
    imagem.style.marginLeft = `calc(-${tamanho}vw + 1px)`;
}, 7000);

