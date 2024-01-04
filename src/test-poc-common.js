/* eslint-disable no-console */
// Anything exported from this file is importable by other in-browser modules.

// RxJs Subjects are used to create an observable that can be subscribed to from other modules. Allows subscribed modules to update when the state changes.
import { Subject } from 'rxjs';

// Track if the react app 2 parcel is mounted or not
let isMounted = false;
const isParcelMountedSubject = new Subject(isMounted); 

export function showParcel() {
  
  function toggleIsMounted() {
    isMounted = !isMounted;
    isParcelMountedSubject.next(isMounted) // push the new state to all subscribers
  }

  function getCurrentState() {
    return isMounted
  }

  return {
    getCurrentState, toggleIsMounted, isParcelMountedSubject, 
  }
}

// Counter 
let count = 0;
const counterSubject = new Subject(count);

export function counter() {
  function increment() {
    count += 1;
    counterSubject.next(count);
  }

  function decrement() {
    count -= 1;
    counterSubject.next(count)
  }

  function getCount() {
    return count;
  }

  return {
    increment,
    decrement,
    getCount,
    counterSubject
  }
}


