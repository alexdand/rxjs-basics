import { Subject } from "rxjs/Subject";
import { BehaviorSubject, ReplaySubject } from "rxjs";

function addItem(value: any) {
  const list = document.querySelector("#output");
  const element = document.createElement("li");
  element.innerText = value;
  list.appendChild(element);
}

// Simple subject
const subject = new Subject();

subject.subscribe(
  (value: any) => {
    addItem(`Observer 1: ${value}`);
  },
  error => addItem(error),
  () => addItem("Observer 1 completed")
);

subject.next("First thing has been sent");

const observer2 = subject.subscribe(data => addItem(`Observer 2: ${data}`));

subject.next("The second thing");
subject.next("The third thing");

observer2.unsubscribe();

subject.next("After observer2 unsubscribed");

// BehaviourSubject receives also the last value which has been sent
// const behaviourSubject = new BehaviorSubject("First");

// behaviourSubject.subscribe(
//   (value: any) => addItem(`Observer 1: ${value}`),
//   error => addItem(error),
//   () => addItem("Observer 1 completed")
// );

// behaviourSubject.next("First thing has been sent");

// const behaviourObserver2 = behaviourSubject.subscribe(data =>
//   addItem(`Observer 2: ${data}`)
// );

// behaviourSubject.next("The second thing");

// ReplaySubject can specify a buffer, a number of emitted values
// to dispatch to observers, similar to behaviour but several values.
// const replaySubject = new ReplaySubject(2);

// replaySubject.subscribe(
//   (value: any) => addItem(`Observer 1: ${value}`),
//   error => addItem(error),
//   () => addItem("Observer 1 completed")
// );

// replaySubject.next("First thing has been sent");
// replaySubject.next("The second thing");
// replaySubject.next("The third thing");

// const replayObserver2 = replaySubject.subscribe(data =>
//   addItem(`Observer 2: ${data}`)
// );

// replaySubject.next("The fourth thing");

// AsyncSubject only emits the last value once the complete
// method has been called upon the subject
