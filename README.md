# testing incomplete tree-shaking

setup the repo:
```sh
$ yarn
```

build the app
```
$ yarn build
```

Open `.next/static/chunks/pages/index-<hash>.js`

Look for `"should not be here"`. Shouldn't be there!

Compare the output if you change the commented line in `pages/index.js` to return `top.foo`:
```js
// pages/index.js
export default function Home() {
  //return nested.foo.bar;
  return top.foo;
}
```