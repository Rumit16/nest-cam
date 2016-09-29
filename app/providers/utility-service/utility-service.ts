import { Injectable } from '@angular/core';
import { random } from 'lodash';

@Injectable()
export class UtilityService {

  public static GeneratePseudoRandomRange(intLength: number) {

    var chars = [];

    for (var i = 0; i < intLength; i++) {

      chars.push(String.fromCharCode(random(97, 122)));
      chars.push(random(0, 9).toString());
    }

    return chars.join('');
  }

}

