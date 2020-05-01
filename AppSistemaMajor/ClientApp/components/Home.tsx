import * as React from 'react';
import { RouteComponentProps } from 'react-router';

export class Home extends React.Component<RouteComponentProps<{}>, {}> {
    public render() {
        return <div>
            <h1>Sistema Major</h1>
            <p>Bienvenidos a mi pagina en donde podras practicar este sistema de memorizacion de numeros.</p>
            <ul>
                <li>0 - S</li>
                <li>1 - T</li>
                <li>2 - N</li>
                <li>3 - M</li>
                <li>4 - R</li>
                <li>5 - L</li>
                <li>6 - G</li>
                <li>7 - K</li>
                <li>8 - F</li>
                <li>9 - P</li>
            </ul>
        </div>;
    }
}
