import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent {

  constructor(private router: Router) { }

  logout() {
    this.router.navigate(['/login']);
  }

}
