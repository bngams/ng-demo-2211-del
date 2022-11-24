import { Component } from '@angular/core';

type User = {
  id: number;
  name: string;
}

// old type alternative
interface Picture {
  url:string;
  alt: string;
}

// @Decorator
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

// @Component => class XXComponent
// XXComponent => xx.component.ts
export class AppComponent {
  title = 'my-app-01';

  // today: Date = new Date();
  today = new Date();

  // display state
  display = false;

  users: User[] = [
    { id: 1, name: 'Boris'},
    { id: 2, name: 'Eddz'},
    { id: 3, name: 'Clem'},
  ];

  picture: Picture = {
    url: 'https://picsum.photos/200',
    alt: 'Description'
  };

  toggleDisplayState(): void {
    this.display = !this.display;
  }

}
