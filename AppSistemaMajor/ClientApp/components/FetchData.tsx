import * as React from 'react';
import { RouteComponentProps } from 'react-router';
import 'isomorphic-fetch';

interface FetchDataExampleDuplas {
    duplas: Duplas[];
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
        if (this.state.palabra.toLowerCase() == this.state.inputValue.toLowerCase()) {
            alert('Correcto!!!\r\n\r\nLa palabra para ' + this.state.numero + ' es: "' + this.state.palabra + '" y escribiste: "' + this.state.inputValue + '".');
            this.setState({ totalBuenas: this.state.totalBuenas + 1 });
        }
        else {
            alert('Incorrecto!!!\r\n\r\nLa palabra para ' + this.state.numero + ' era: "' + this.state.palabra + '" y escribiste: "' + this.state.inputValue + '".');
            this.setState({ totalMalas: this.state.totalMalas + 1 });
        }
        this.loadNumberAndWord();
    }
    
    loadNumberAndWord() {
        try {
            var num = Math.floor((Math.random() * 99) + 1);
            var collection = this.state.duplas.filter(d => d.number == num.toString());
            var item = collection.length < 1 ? null : collection[0];
            var n = item != null ? item.number : "00";
            var p = item != null ? item.word : "";
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
        let tablaDeDuplas = this.state.loading
            ? <p><em>Loading...</em></p>
            : FetchData.renderDuplasTable(this.state.duplas);
        let buttonText = this.state.isVisible ? "Practicar" : "Mostrar Tabla";
        let totalRespuestas = this.state.totalMalas + this.state.totalBuenas;
        let seccionDePreguntas = <div>
            <h1>Pregunta</h1>
            <h1>Cual es la palabra que corresponde a la siguiente dupla?</h1>
            <h2>El numero es: {this.state.numero}</h2>
            <br />
            <input type="text" value={this.state.inputValue} onChange={this.updateInput} onKeyPress={this.keyPressed} placeholder="Escribe aqui..."></input>
            &nbsp;&nbsp;
            <button onClick={this.evaluarRespuesta}>Verificar Respuesta</button>
            &nbsp;&nbsp;
            <button onClick={this.loadNumberAndWord}>Otro Numero?</button>
            <br /><br />
            <p>Totales: {totalRespuestas}</p>
            <p>Aciertos: {this.state.totalBuenas} &nbsp;&nbsp; {totalRespuestas > 0 ? (this.state.totalBuenas / totalRespuestas * 100) : 0}%</p>
            <p>Errores: {this.state.totalMalas} &nbsp;&nbsp; {totalRespuestas > 0 ? (this.state.totalMalas / totalRespuestas * 100) : 0}%</p>
        </div>;

        return <div>
            <br />
            <button onClick={this.handleClick}>{buttonText}</button>
            <br />
            {this.state.isVisible ? tablaDeDuplas : seccionDePreguntas}
        </div>;
    }
    
    private static renderDuplasTable(duplas: Duplas[]) {
        return <div>
        <h1>Tabla de Duplas y Palabras</h1>
        <p>Esta es la lista actual de mis duplas y palabras a memorizar:</p>
        <table className='table'>
            <thead>
                <tr>
                    <th>Dupla</th>
                    <th>Palabra</th>
                </tr>
            </thead>
            <tbody>
                {duplas.map(duplas =>
                    <tr key={duplas.number}>
                        <td>{duplas.number}</td>
                        <td>{duplas.word}</td>
                    </tr>
                )}
            </tbody>
            </table>
        </div>;
    }
}

interface Duplas {
    number: string;
    word: string;
}