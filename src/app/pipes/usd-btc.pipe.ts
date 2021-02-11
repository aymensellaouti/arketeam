import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'usdBTC',
})
export class UsdBTCPipe implements PipeTransform {
  court = 46191;
  transform(amount: number, ...args: number[]): number {
    /*
      si mon parametre = 0 ou qu'il n'existe pas c'est usd -> BTC
      sinon btc -> usd
    */
    if (args[0]) {
      return amount * this.court;
    }
    return amount / this.court;
  }
}
