import { NegociacaoController } from "./controllers/negociaicao_controller.js";
import { NegociacoesView } from "./views/negociacoes-view.js";


const controller = new NegociacaoController()

const form = document.querySelector(".form")
form.addEventListener("submit", e => {
    event.preventDefault();
    controller.adiciona()
})

