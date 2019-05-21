// reactivex.io/rxjs/manual/overview.html#categories-of-operators
import { Observable } from "rxjs/Observable";
import { merge } from "rxjs/observable/merge";
import "rxjs/add/operator/map";

const observable = Observable.create((observer: any) => {
  observer.next("Hey guys!");
});

const observable2 = Observable.create((observer: any) => {
  observer.next("How is it going?");
});

const newObs = merge(observable, observable2);

newObs.subscribe((x: any) => addItem(x));

function addItem(value: any) {
  const list = document.querySelector("#output");
  const element = document.createElement("li");
  element.innerText = value;
  list.appendChild(element);
}

Observable.create((observer: any) => {
  observer.next("Hey guys!");
})
  .map((val: any) => {
    return val.toUpperCase();
  })
  .subscribe((val: any) => {
    addItem(val);
  });

// skipUntil
