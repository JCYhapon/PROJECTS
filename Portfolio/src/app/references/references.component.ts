import { Component } from '@angular/core';

@Component({
  selector: 'app-references',
  templateUrl: './references.component.html',
  styleUrls: ['./references.component.css']
})
export class ReferencesComponent {

  //PROPERTY BINDING
  referenceName:string = 'Reference Name';
  contact:string = 'Contact';

}
