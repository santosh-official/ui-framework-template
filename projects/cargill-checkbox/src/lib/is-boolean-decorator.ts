export default function isBool(target: any, prop: string) {

  const NG_ON_ONIT_NAME = 'ngOnInit';

  const ngOnInitClone: Function | null = target[NG_ON_ONIT_NAME];

  Object.defineProperty(target, NG_ON_ONIT_NAME, {
    value: function () {
      if (this[prop] !== null) {
        if (typeof this[prop] !== "boolean") {
          console.error(
            target.constructor.name +
            `: ${prop} is boolean, but  provided as ${typeof this[prop]}`
          );
        }
      }
      if (ngOnInitClone) {
        ngOnInitClone.call(this);
      }
    }
  });
}