
import { MyDisplay } from "../core/myDisplay";
import { Util } from "../libs/util";

// -----------------------------------------
//
// -----------------------------------------
export class Item extends MyDisplay {

  private _id:number;
  private _nowClassName:string = '';

  constructor(opt:any) {
    super(opt)

    this._id = opt.id;
    this._c = this._id * 5;

    this._resize();
  }


  protected _update(): void {
    super._update();

    if(this._nowClassName != '') this.removeClass(this._nowClassName);

    const rad1 = Util.instance.radian(this._c * 2);
    // const rad2 = Util.instance.radian(this._c * 1.6);
    const max = ~~(Util.instance.map(Math.sin(rad1), 1, 30, -1, 1));
    this._nowClassName = '';
    for(let i = 1; i <= max; i++) {
      this._nowClassName += '😄';
    }
    this.addClass(this._nowClassName);
  }
}