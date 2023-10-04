import { Component, AfterViewInit, ElementRef } from '@angular/core';

@Component({
  selector: 'app-trades',
  templateUrl: './trades.component.html',
  styleUrls: ['./trades.component.css']
})
export class TradesComponent {
constructor(private el: ElementRef) { }

  ngAfterViewInit() {
    const container = this.el.nativeElement.querySelector('.tradingview-widget-container__widget');

    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = 'https://s3.tradingview.com/external-embedding/embed-widget-market-overview.js';
    script.async = true;
    script.innerHTML = JSON.stringify({
      // ... your TradingView configuration object here ...
      "colorTheme": "light",
      // ... and so on, for the entire configuration ...
    });

    container.appendChild(script);
  }
}
