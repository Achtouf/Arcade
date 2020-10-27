import { Component } from '@angular/core';

@Component({
  selector: 'arc-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'arcade';
  colors = ['blue', 'red', 'yellow', 'green'];
  selectedColor = this.colors[0];

  setColor(color: string): void {
    this.selectedColor = color;
  }
}
