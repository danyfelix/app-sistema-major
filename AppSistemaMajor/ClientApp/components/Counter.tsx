import * as React from 'react';
import { RouteComponentProps } from 'react-router';

interface CounterState {
    duplas: Duplas[];
    loading: boolean;
}

interface Duplas {
    number: string;
    word: string;
}

export class Counter extends React.Component<RouteComponentProps<{}>, CounterState> {
    constructor() {
        super();
        this.state = { duplas: [], loading: true };
        fetch('api/SampleData/GetDuplas')
            .then(response => response.json() as Promise<Duplas[]>)
            .then(data => {
                this.setState({ duplas: data, loading: false });
            });
    }

    public render() {
        let tablaDeDuplas = this.state.loading
            ? <p><em>Loading...</em></p>
            : Counter.renderDuplasTable(this.state.duplas);
        return <div>
            {tablaDeDuplas}
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
