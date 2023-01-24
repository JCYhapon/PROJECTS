import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
  title = 'About';

  //INTERPOLATION 
  myName = "John Carlo Yhapon";
  intro = "What's up?";

  //EVENT BINDING
  showData($event:any){
    console.log("button is clicked!"); if($event){
      console.log($event.target);
      console.log($event.target.value);
    }
  } 


}
