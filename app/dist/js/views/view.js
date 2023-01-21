export class View {
    constructor(seletor, escapar) {
        this.escapar = true;
        const elemento = document.querySelector(seletor);
        if (elemento) {
            this.elemento = elemento;
        }
        else {
            throw Error(`Elemento ${seletor} Indisponivel ou inexistente`);
        }
        if (!escapar && escapar != undefined) {
            this.escapar = escapar;
        }
    }
    update(model) {
        let template = this.template(model);
        if (this.escapar) {
            template = template
                .replace(/<script>[\s\S]*?<\/script>/g, "");
        }
        this.elemento.innerHTML = template;
    }
}
