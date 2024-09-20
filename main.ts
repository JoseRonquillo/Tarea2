class Nodo{
    private data: number;
    private next: any;
    private prev: any;

    constructor(){
        this.data = this.obtener_Numero();
        this.next = null;
        this.prev = null;
    }

    public get_data(){
        return this.data;
    }

    public set_next(next: Nodo){
        this.next = next;
    }

    public set_prev(prev: Nodo){
        this.prev = prev;
    }

    public get_next(){
        return this.next;
    }

    public to_string(){
        return this.data +"";
    }

    public obtener_Numero(): number {
        return Math.floor(Math.random() * 9) + 1;
    }

}

class List{
    private size: number;
    private tail: any;
    private head: any;


    constructor(){
        this.tail = null;
        this.head = null;
        this.size = 0;
    }

    public is_empty(){
        return this.tail == null && this.head == null;
    }

    public append(){
        let nodo: Nodo = new Nodo();
        if(this.is_empty()){
            this.tail = nodo;
            this.head = nodo;
        }

        else{
            this.tail.set_next(nodo);
            nodo.set_prev(this.tail);
            this.tail = nodo;
        }
        this.size += 1;
    }

    public buscar(carne: number){
        let nombres: string = " ";
        let current = this.head;
        let encontrado: boolean = false; 

        while(current !== null && current !== undefined){
            if(current.data.getCarne() == carne){
                nombres = nombres + current.data.to_string(); 
                encontrado = true
            }
            current = current.next
        
        }
        
        if (encontrado == false){
            console.log("No se encontro el elemento");
        }else{
            return nombres;
        }
        
    }

    public transversal(){
        let current = this.head;
        let result: string = "";
        let ag = false;
        while (current !== null){
            if (current.get_data() % 2 === 0){
                result += current.get_data() + "";
                ag = true;
            }
            current = current.next;

            if (current !== null && ag){
                result += "<->"
                ag = false;
                }
            }
        return result;
    }
}

// main
let lista = new List();
lista.append();
lista.append();
lista.append();
lista.append();
lista.append();
let valores_par = lista.transversal();
console.log(valores_par);

//José Antonio Ronquillo Meza 1547223