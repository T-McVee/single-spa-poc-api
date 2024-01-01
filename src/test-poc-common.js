/* eslint-disable no-console */
// Anything exported from this file is importable by other in-browser modules.

import { from, Observable, Subject } from 'rxjs';




let isMounted = false;
const isParcelMountedSubject = new Subject(isMounted);

export function showParcel() {
  
  function toggleIsMounted() {
    isMounted = !isMounted;
    isParcelMountedSubject.next(isMounted)
  }

  function getCurrentState() {
    return isMounted
  }

  return {
    getCurrentState, toggleIsMounted, isParcelMountedSubject, 
  }
}

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


