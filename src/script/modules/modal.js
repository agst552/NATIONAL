export default function initModal (){
    const abrirModal = document.querySelector('{data-modal= "abrirModal"}');
    const modal = document.querySelector('{data-modal= "containerModal"}');
    const fecharModal = document.querySelector('{data-modal= "fecharModal"}');

    abrirModal.addEventListener('click', modalAbrir);
    fecharModal.addEventListener('click', modalFechar);
    modal.addEventListener ('click', fecharFora)

    function modalAbrir(event) {
        modal.classList.add('ativo');
        event.prevetDefault();
    }

    function modalFechar() {
        modal.classList.remove('ativo');
    }
    
    function fecharFora (event){
        // o target faz referencia ao proprio elemento que foi clicado
        if (event.target === this) {
            modalFechar();
        }
    }
}