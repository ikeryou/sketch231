import { MyDisplay } from "../core/myDisplay";
import { Item } from "./item";

// -----------------------------------------
//
// -----------------------------------------
export class Contents extends MyDisplay {



  constructor(opt:any) {
    super(opt)

    const len = 100;
    for(let i = 0; i < len; i++) {
      this.getEl().append(document.createElement('div'))
    }

    this.qsAll('div').forEach((val,i) => {
      new Item({
        el:val,
        id:i,
      })
    })

    this._resize();
  }
}