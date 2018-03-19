import { Component } from '@angular/core';
import { NumberGeneratorService } from './number-generator.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],

  providers: [NumberGeneratorService]
})
export class AppComponent {
  title = 'app';

  constructor( private _numberGeneratorService: NumberGeneratorService ) {}

  numberGenerator(): number {
    return 42;
  };

  fromNumberGeneratorService(): number {
    return this._numberGeneratorService.value();
  };

}
