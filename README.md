# tape-jsverify
Simple jsverify property based testing integration for tape testing

## Example Usage

```javascript
  import property from 'tape-jsverify';
  import myFunction from 'my-app';
  
  property('myFunction is idempotent', (jsc) =>
    jsc.forall("string", function (val) {
      return myFunction(myFunction(val)) === myFunction(val);
    })
  );
```
