export default function delay(s:number, cb: Function, value: any): void {
  setTimeout(() => {
    if (cb) {
      value ? cb(value) : cb();
    }
  }, s);
};
