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