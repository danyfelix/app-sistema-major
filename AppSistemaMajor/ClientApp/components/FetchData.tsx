import * as React from 'react';
import { RouteComponentProps } from 'react-router';
import 'isomorphic-fetch';

interface Duplas {
    number: string;
    word: string;
}

interface FetchDataExampleDuplas {
    duplas: Duplas[];
    palabrasUsadas: string[];
    loading: boolean;
    isVisible: boolean;
    inputValue: string;
    numero: string;
    palabra: string;
    totalBuenas: number;
    totalMalas: number;
}

export class FetchData extends React.Component<RouteComponentProps<{}>, FetchDataExampleDuplas> {
    constructor() {
        super();
        this.state = {
            duplas: [],
            palabrasUsadas: [],
            loading: true,
            isVisible: true,
            inputValue: "",
            numero: "",
            palabra: "",
            totalBuenas: 0,
            totalMalas: 0
        };
        this.handleClick = this.handleClick.bind(this);
        this.updateInput = this.updateInput.bind(this);
        this.evaluarRespuesta = this.evaluarRespuesta.bind(this);
        this.loadNumberAndWord = this.loadNumberAndWord.bind(this);
        this.keyPressed = this.keyPressed.bind(this);
        fetch('api/SampleData/GetDuplas')
            .then(response => response.json() as Promise<Duplas[]>)
            .then(data => {
                this.setState({ duplas: data, loading: false });
            });
    }

    handleClick() {
        this.setState({ isVisible: !this.state.isVisible });
        this.loadNumberAndWord();
    }
    
    updateInput(e: any) {
        this.setState({ inputValue: e.currentTarget.value });
    }

    evaluarRespuesta() {
        var message = '';
        if (this.state.palabra.toLowerCase() == this.state.inputValue.toLowerCase()) {
            message = this.state.numero + ' es: "' + this.state.palabra + '" y escribiste: "' + this.state.inputValue + '".';
            alert('Correcto!!!\r\n\r\nLa palabra para ' + message);
            this.setState({ totalBuenas: this.state.totalBuenas + 1 });
        }
        else {
            message = this.state.numero + ' era: "' + this.state.palabra + '" y escribiste: "' + this.state.inputValue + '".';
            alert('Incorrecto!!!\r\n\r\nLa palabra para ' + message);
            this.setState({ totalMalas: this.state.totalMalas + 1 });
        }
        this.state.palabrasUsadas.push(message);
        this.setState({ palabrasUsadas: this.state.palabrasUsadas });
        this.loadNumberAndWord();
    }
    
    loadNumberAndWord() {
        try {
            var num = Math.floor((Math.random() * 99) + 1);
            var collection = this.state.duplas.filter(d => d.number == num.toString());
            var item = collection.length < 1 ? null : collection[0];
            var n = item != null ? item.number : "00";
            var p = item != null ? item.word : "Osos";
            this.setState({ numero: n, palabra: p, inputValue: "" });
        }
        catch (e) {
            alert("Hubo un error!");
        }
    }

    keyPressed(event: any) {
        if (event.key === "Enter") {
            this.evaluarRespuesta();
        }
    }
    
    public render() {
        let buttonText = this.state.isVisible ? "Practicar" : "Instrucciones";

        let tablaDeDuplas = this.state.loading
            ? <p><em>Loading...</em></p>
            : FetchData.renderInstrucciones(this.state.duplas);

        let seccionDePreguntas = <div>
            {this.renderSeccionDePreguntas(this.state)}
            {FetchData.renderTotalesAciertosErrores(this.state)}
            {FetchData.renderPalabrasUsadas(this.state.palabrasUsadas)}
        </div>;

        return <div>
            <br />
            <button onClick={this.handleClick}>{buttonText}</button>
            <br />
            {this.state.isVisible ? tablaDeDuplas : seccionDePreguntas}
        </div>;
    }

    static underline = {
        textDecorationLine: 'underline'
    };

    private renderSeccionDePreguntas(state: any) {
        return <div>
            <h1 style={FetchData.underline}>Pregunta</h1>
            <h2>Cual es la palabra que corresponde a la siguiente dupla?</h2>
            <h2>El numero es: {state.numero}</h2>
            <br />
            Palabra:&nbsp;<input type="text" value={state.inputValue} autoFocus onChange={this.updateInput} onKeyPress={this.keyPressed} placeholder="Escribe aqui..."></input>
            &nbsp;&nbsp;
            <button onClick={this.evaluarRespuesta}>Evaluar</button>
            &nbsp;&nbsp;
            <button onClick={this.loadNumberAndWord}>Otra Dupla</button>
            <br /><br />
        </div>;
    }

    private static renderTotalesAciertosErrores(state: any) {
        let totalRespuestas = state.totalMalas + state.totalBuenas;
        return <div>
            <h1 style={FetchData.underline}>Progreso</h1>
            <p><span style={{ color: "grey" }}>Totales:</span>{totalRespuestas}</p>
            <p><span style={{ color: "#2E8B57" }}>Aciertos:</span>{state.totalBuenas} &nbsp;&nbsp; {totalRespuestas > 0 ? (state.totalBuenas / totalRespuestas * 100) : 0}%</p>
            <p><span style={{ color: "crimson" }}>Errores:</span>{state.totalMalas} &nbsp;&nbsp; {totalRespuestas > 0 ? (state.totalMalas / totalRespuestas * 100) : 0}%</p>
        </div>;
    }

    private static renderPalabrasUsadas(palabrasUsadas: string[]) {
        return <div>
            <h1 style={FetchData.underline}>Palabras Anteriores</h1>
            <ul>
                {palabrasUsadas.map((p: string, i: number) => { return <li key={i}>{p}</li> })}
            </ul>
        </div>;
    }
    
    private static renderInstrucciones(duplas: Duplas[]) {
        return <div>
            <h1>Ejercicio</h1>
            <p>Da click en el boton "Practicar" y escribe la palabra que corresponde a cada dupla (dos digitos)
                y despues presiona la tecla "Enter" o da clic en "Evualuar" para saber si tu respuesta es correcta.</p>
        </div>;
    }
}