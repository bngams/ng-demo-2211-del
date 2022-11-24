import { Component, OnInit } from '@angular/core';

type User = {
  id: number;
  name: string;
}
// alias Users = User[];

// old type alternative
interface Picture {
  url:string;
  alt: string;
}

@Component({
  selector: 'app-get-started',
  templateUrl: './get-started.component.html',
  styleUrls: ['./get-started.component.scss']
})
export class GetStartedComponent implements OnInit {
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

  constructor() { }

  ngOnInit(): void {
  }

  toggleDisplayState(): void {
    this.display = !this.display;
  }

}
