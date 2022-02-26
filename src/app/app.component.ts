import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'cake-shop';
  entity = new Entity();
  public onSubmit(){

  }
}
class Entity{
  name:string="";
  cakeType:string="";
}
