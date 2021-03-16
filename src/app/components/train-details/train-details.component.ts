
import { JokeInterface } from '../../ngrx/product.model';
import { AppState } from '../../ngrx/app.state';
import { Component, HostListener, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { AppService } from '../../service/app.service';
import { TITLE } from '../../constants/contants';
import { TRAINSTATION, STATION, DEPARTURE } from 'src/app/interface/train-station.interface';

@Component({
  selector: 'app-product',
  templateUrl: './train-details.component.html',
  styleUrls: ['./train-details.component.css']
})
export class TrainDetailsComponent implements OnInit {
  trainStationResponse!: TRAINSTATION;
  jwt: string = '';
  title = TITLE;
  station!: STATION[];
  stationCode: string = '';
  departureDetails!: DEPARTURE;
  error: boolean = false;

  constructor(private store: Store<AppState>,
    private appService: AppService) {
    this.callFromStore();
  }


  ngOnInit() {
    try {
      this.appService.getStationDetails(this.jwt).subscribe(response => {
        try {
          if (response.status !== 200) {
            this.error = true;
          }
          else if (response._body) {
            this.error = false;
            this.trainStationResponse = this.appService.bodyParser(response._body).body.message;
            if (this.trainStationResponse) {
              this.station = this.appService.bodyParser(this.trainStationResponse).payload;
            }
          }
        } catch (e) {
        }
      })
    }
    catch (error) {
      console.log(error)
    }

  }

  onSubmit(stationCode: string) {
    this.appService.getDepartureDetails(stationCode, this.jwt).subscribe(response => {
      try {
        if (response.status !== 200) {
          this.error = true;
        }
        else if (response._body) {
          this.error = false;
          this.trainStationResponse = this.appService.bodyParser(response._body).body.message;
          if (this.trainStationResponse) {
            this.departureDetails = this.appService.bodyParser(this.trainStationResponse).payload;
          }
        }
      } catch (e) {

      }
    })



  }

  callFromStore(): void {
    this.store.select(state => state.trainDetailsStore).subscribe(storeResponse => {
      if (storeResponse.favoriteJokes.length > 0) {
        this.jwt = storeResponse.favoriteJokes[0];
      }
    });
  }

}
