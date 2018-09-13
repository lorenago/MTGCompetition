import { Component } from '@angular/core';
import { LoadingController } from '@ionic/angular';
import { RestApiService } from './rest-api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor (public api: RestApiService, public loadingController: LoadingController) {}

  ngOnInit() {
    // this.getClassrooms();
  }

  // For hold data that get from api service
  // classrooms(or wherever): any;

  // Example for get data
  // async getClassrooms() {
  //   const loading = await this.loadingController.create({
  //     content: 'Loading'
  //   });
  //   await loading.present();
  //   await this.api.getClassroom()
  //     .subscribe(res => {
  //       console.log(res);
  //       this.classrooms = res;
  //       loading.dismiss();
  //     }, err => {
  //       console.log(err);
  //       loading.dismiss();
  //     });
  // }
}
