export abstract class View<T> {
    protected elemento: HTMLElement;
    private escapar = true;

    constructor(seletor: string, escapar?:boolean) {
        const elemento = document.querySelector(seletor);
        if(elemento){
            this.elemento = elemento as HTMLElement
        }else{
            throw Error(`Elemento ${seletor} Indisponivel ou inexistente`)
        }

        if(!escapar && escapar != undefined){
            this.escapar = escapar
        }
    }

    update(model : T):void{
        let template = this.template(model);
        if(this.escapar){
            template = template
                .replace(/<script>[\s\S]*?<\/script>/g, "")
        }

        this.elemento.innerHTML = template
    }
    protected abstract template(model: T ): string;
}