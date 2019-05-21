import { Observable } from "rxjs/Observable";

function addItem(value: any) {
  const list = document.querySelector("#output");
  const element = document.createElement("li");
  element.innerText = value;
  list.appendChild(element);
}

const observable = Observable.create((observer: any) => {
  observer.next("Hello");
  observer.next("World");
  setInterval(() => {
    observer.next("World: Hello Alex");
  }, 2000);
  // observer.complete();
  // observer.next("won't show up");
});

const subscription = observable.subscribe(
  (value: String) => addItem(value),
  (error: any) => addItem(error),
  () => addItem("Completed")
);

const subscription2 = observable.subscribe((value: String) => addItem(value));

subscription.add(subscription2);

// Now both subscription and subscription2 will unsubscribe
setTimeout(() => {
  subscription.unsubscribe();
}, 6001);
