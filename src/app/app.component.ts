import { Component } from '@angular/core';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  responseData : any;
  showTable : boolean = false;
  constructor(private app:AppService){}
  
  allTableData(){
    console.log("Calling TS file");

    this.app.callService().subscribe((resp)=>{
      console.log(resp);
      this.responseData = resp;
      console.log(this.responseData);
      this.showTable = true;
    });
      
  };

}
