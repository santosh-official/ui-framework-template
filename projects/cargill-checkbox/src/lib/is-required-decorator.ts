export default function isRequired(target: any, prop: string) {

  const NG_ON_ONIT_NAME = 'ngOnInit';

  const ngOnInitClone: Function | null = target[NG_ON_ONIT_NAME];

  Object.defineProperty(target, NG_ON_ONIT_NAME, {
    value: function () {
      if (this[prop] == null) {
        console.error(
          target.constructor.name +
          `: ${prop} is required, but was not provided`
        );
      }
      if (ngOnInitClone) {
        ngOnInitClone.call(this);
      }
    }
  });
}