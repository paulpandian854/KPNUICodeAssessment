import { Component, EventEmitter, Input, Output } from '@angular/core';
import { STATION, TRAINSTATION } from '../../interface/train-station.interface';


@Component({
    selector: 'child-component',
    templateUrl: './child-components.component.html',
    styleUrls: ['./child-components.component.css']
})
export class ChildComponent {
    userName: string = '';
    error: string = '';
    stationCode: string = '';
    @Input() station!: STATION[];
    @Output() submit: EventEmitter<any> = new EventEmitter();

    constructor() {
    }

    onSelect() {

    }

    onSubmit() {
        this.submit.emit(this.stationCode);
    }
}
