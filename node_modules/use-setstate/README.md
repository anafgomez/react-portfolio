<h1 align="center">useSetState</h1>
<p align="center">Reacts setState() method, reimagined as a hook</p>

<p align="center">
  <a href="https://badge.fury.io/js/use-setstate"><img src="https://badge.fury.io/js/use-setstate.svg" alt="npm version" height="18"></a>
  <a href="https://travis-ci.org/dacre-denny/use-setstate"><img src="https://travis-ci.org/dacre-denny/use-setstate.svg?branch=master" alt="build"></a>
  <a href='https://coveralls.io/github/dacre-denny/use-setstate?branch=master'><img src='https://coveralls.io/repos/github/dacre-denny/use-setstate/badge.svg?branch=master' alt='Coverage Status' /></a>
  <a href="https://www.npmjs.com/package/use-setstate"><img src="https://img.shields.io/npm/dm/use-setstate" alt="Downloads"></a>
  <a href="https://www.codacy.com?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=dacre-denny/use-setstate&amp;utm_campaign=Badge_Grade"><img src="https://api.codacy.com/project/badge/Grade/295187f20b074fd9b63040c3538e006a"/></a>
</p>

---

## Quick Start

```bash
npm install --save use-setstate
```

```jsx
import { useSetState } from "use-setstate";

const [name, setName] = useSetState("bob", newName => {
  console.log(`Hello ${newName}!`);
});
```

## Features

*   Interface inspired by [useState](https://reactjs.org/docs/hooks-state.html)
*   [State change callback](#State-change-callback)
*   State setter can accept [updater functions](#Setter-function)
*   Typescript support
*   Zero dependencies

## Usage

The API is similar to Reacts [`useState()`](https://reactjs.org/docs/hooks-state.html) hook:

```jsx
/*
let [value, setValue] = useState(initialValue?);
*/
let [value, setValue] = useSetState(initialValue?, callback?);
```

### State change callback

The main difference between `useState()` and `useSetState()` is the optional `callback` argument. When a `callback` is provided, `useSetState()` will invoke that callback after state updates have been applied via the [state setter](#Setter-function), this mimicking the behavior of Reacts `setState()` [callback](https://reactjs.org/docs/react-component.html#setstate) argument:

```jsx
let [isOpen, setIsOpen] = useSetState(false, () => {
  console.log("open state may have changed..");
});
```

When a state change callback is invoked, `useSetState()` will pass the new state for that hook as the callbacks first argument:

```jsx
let [, setMoney] = useSetState(0, money => {
  if (money < 0) {
    console.log("Uh oh..");
  }
});
```

### Setter function

The setter function returned by `useSetState()` supports two methods of updating state. The first method is by direct value updates:

```jsx
let [mood, setMood] = useSetState("");

setMood("happy");

setMood("sad");
```

State can also be updated by passing an updater function to the state setter, this mimicking the behavior of updaters used with Reacts [`setState()`](https://reactjs.org/docs/state-and-lifecycle.html#state-updates-may-be-asynchronous) method:

```jsx
let [calculation, setCalculatedValue] = useSetState();

// Updater function can update state from a function call
setCalculatedValue(Math.random);

// Updater function can update state from function call that operates on current state
setCalculatedValue(Math.sqrt);

setCalculatedValue(Math.cos);

setCalculatedValue(Math.round);
```

## Run tests

```bash
npm run test
```

## License

Licensed under MIT
