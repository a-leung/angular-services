import { Injectable } from '@angular/core';

@Injectable()
export class NumberGeneratorService {

  constructor() { }

  value(): number {
    return 420;
  };

}
