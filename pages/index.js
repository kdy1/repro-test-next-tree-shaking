const nested = {
  nested: {
    msg: 'NESTED: should be here',
    qux: {
      zuk: 'should not be here'
    }
  },
};

const top = {
  msg: 'TOPLINE: should be here',
  qux: {
    zuk: 'should not be here',
  }
};

export default function Home() {
  return nested.nested.msg;
  // return top.msg;
}
