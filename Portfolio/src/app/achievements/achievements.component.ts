import { Component } from '@angular/core';

@Component({
  selector: 'app-achievements',
  templateUrl: './achievements.component.html',
  styleUrls: ['./achievements.component.css']
})
export class AchievementsComponent {

  //STYLE BINDING
  appliedCSSClass = "Brown";
  notappliedCSSClass = false;
  myColor = "red";
  appliedCSSClass2 = "Yellow";
  notappliedCSSClass2 = false;
  myColor2 = "green";

  //CLASS BINDING
  appliedCSSClass3 = "blue";
  notappliedCSSClass3 = false;
  appliedCSSClass4 = "brown";
  notappliedCSSClass4 = false;
}
