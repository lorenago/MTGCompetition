import { Component } from '@angular/core';
import { LoadingController } from '@ionic/angular';
import { RestApiService } from './rest-api.service';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor (
    public api: RestApiService,
    public loadingController: LoadingController,
    private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer
  ) {
      // Add Custom Icons
    this.matIconRegistry.addSvgIcon(
      'arrow-up',
      this.domSanitizer.bypassSecurityTrustResourceUrl('../assets/custom-icons/arrowup.svg')
    );
    this.matIconRegistry.addSvgIcon(
      'arrow-down',
      this.domSanitizer.bypassSecurityTrustResourceUrl('../assets/custom-icons/arrowdown.svg')
    );
  }

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
