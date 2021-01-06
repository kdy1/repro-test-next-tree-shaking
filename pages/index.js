const nested = {
  foo: {
    bar: 'NESTED: should be here',
    baz: {
      qux: 'NESTED: should not be here'
    }
  },
};

const top = {
  foo: 'TOP: should be here',
  bar: {
    baz: 'TOP: should not be here',
  }
};

export default function Home() {
  return nested.foo.bar
  // return top.foo;
}
