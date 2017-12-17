export interface ITaplistItem {
  tapNumber: number;
  beerName: string;
  breweryName: string;
  beerColor: string;
  abv: number;
  bitterness: number;
  gravity: number;
  prices: {[id:string]:number};
}


export class TaplistItem implements ITaplistItem {
  tapNumber: number;
  beerName: string;
  breweryName: string;
  beerColor: string;
  abv: number;
  bitterness: number;
  gravity: number;
  prices: {[id:string]:number};
}
