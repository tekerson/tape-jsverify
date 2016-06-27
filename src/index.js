import test from 'tape';
import jsc from 'jsverify';

const opts = {
  tests: 100,
};

module.exports = (name, prop) => {
  test(name, (assert) => {
    const result = jsc.check(prop(jsc), opts);
    if (result === true) {
      assert.pass(`passed ${opts.tests} tests`);
    } else {
      //FIXME Improve message format
      assert.fail(result);
    }
    assert.end();
  });
};
