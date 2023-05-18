import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

  public heroNames: string[] = ['Batman', 'Superman', 'Blue Beatle', 'Beast Boy'];
  public deletedHero? :string;


  removeLastHero(): void {

    this.deletedHero = this.heroNames.pop();

  }


}
