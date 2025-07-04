export default function initAccordion (){
    const accordionList = document.querySelectorAll("[data-accordion='accordion'] dt");

    accordionList.forEach (itemDt => {

        itemDt.addEventListener("mousemove", () => itemDt.style.cursor = "pointer");
        itemDt.addEventListener ("click", accordion);
    })

    function accordion(){
        this.classList.toggle('ativo');
        this.nextElementSibling.classList.toggle('ativo');
        //Metodo nextElementSibling retorna o conteudo html do proximo irmão
    }
}