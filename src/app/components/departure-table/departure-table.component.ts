import { Component, Input } from '@angular/core';
import { DEPARTURE } from 'src/app/interface/train-station.interface';

@Component({
    selector: 'departure-table',
    templateUrl: './departure-table.component.html'
})

export class DepartureTableComponent {
    @Input() departureDetails!: DEPARTURE;
}
