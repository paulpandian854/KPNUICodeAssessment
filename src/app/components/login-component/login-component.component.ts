import { Component } from '@angular/core';

import { AppService } from '../../service/app.service';
import { select, Store } from '@ngrx/store';
import { AppState } from '../../ngrx/app.state';
import { JokeInterface } from '../../ngrx/product.model';
import { TRAINSTATION } from '../../interface/train-station.interface';
import { Router } from '@angular/router';

@Component({
    selector: 'login-component',
    templateUrl: './login-component.component.html',
    styleUrls: ['./login-component.component.css']
})
export class LoginComponent {
    userName: string = '';
    error: string = '';

    statusDisplayToUser: any = {
        '500': 'Please try after sometime, error in connection',
        '401': 'Unauthorized User, please check your credentials',
        '404': 'Please check after sometime, Application is down'
    }

    constructor(private appService: AppService, private store: Store<AppState>, private router: Router) {
    }

    onSubmit(): void {

        this.appService.getLoginDetails(this.userName).subscribe(value => {
            if (value.status !== 200) {
                this.error = this.statusDisplayToUser[value.status];
            }
            else if (value._body) {
                const response: TRAINSTATION = JSON.parse(value._body);

                this.store.dispatch({
                    type: 'STORE_JOKE',
                    payload: <JokeInterface>{
                        name: 'addJoke',
                        favoriteJokes: [response.message]
                    }
                });
                this.router.navigate(['/', 'train-details'])
            }
        })
    }

}
