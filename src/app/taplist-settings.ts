export interface ITaplistSettings {
  template: string;
  colors: {[id:string]:string};
  prices: {[id:string]:string};
}

export class TaplistSettings implements ITaplistSettings {
  template: string;
  colors: { [p: string]: string };
  prices: { [p: string]: string };
}
