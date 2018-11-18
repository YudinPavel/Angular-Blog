import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  login:boolean = false;

  name:string = "";
  password:string = "";

  enterFunc(){
    if(this.name === 'Pavel' && this.password === '1234'){
      this.login = true;
      console.log("YES!");
    }
    else{
      console.log("No... but YES!");
    }
  }
}
