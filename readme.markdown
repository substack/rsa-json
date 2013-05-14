# rsa-json

generate rsa keypairs as json blobs

[![browser support](https://ci.testling.com/substack/rsa-json.png)](http://ci.testling.com/substack/rsa-json)

[![build status](https://secure.travis-ci.org/substack/rsa-json.png)](http://travis-ci.org/substack/rsa-json)

# example

```
$ rsa-json
{
  "private": "-----BEGIN RSA PRIVATE KEY-----\nMIICagIBAAKBhADANhcuzGaa+qW/bCqEiPw5GzC+EKHFUgUonEejR2MkT938cmYP\ntKOYtvwhP4GfvnOMds63+Rx0SqGNa87z2V0RvYU7DFtB8cmqxgqIlpzv+J5qh+32\n7UpIwUSQYyOld+XKQcRHQFq7dwsb4bDcGErhbrD7olZzoAVkEK1CO0nIY9JlGQID\nAQABAoGEALws+HtPj3BQzS5f1ixU9CFwVkLtg4LrrrM4dQYMYKpvKpP456Seo79h\n/esLAnuC+BrfQbhpQQs0+X67uiuPdQdmGa8iPUhtpDSX5II3+9vjbJmpoehD5lAi\n0BD9pbgkpmPc9YnE6hUFoKWNU5CnFVh/5Eefn9Y1VZErEMIXaAjf0E7RAkIO5Dgx\n4n1X0q9XDp+WR+sO5YFZNE5H13KSDLjT5QFy20FPoCx20AY0yvweitNFBIi+1b8T\ne9DhZf8q55UKdf++860CQgzoT6Mn5RpOr5mb6uVttepHam+EsZWh1z++ayrjrj0N\nFKnJvqMqtfTk9Nc2VK76p4gi+bcbxylcZosnw8bMxpFEnQJCCrjRqUFNRHWi38jc\nqOTBXylqN6NMlbePe48DaTXjFCK/5KgMO8POJCbe3tLQCUqZduYJvOqSXCgHUIoL\nqsuJR6DFAkIDnwEIkt6xXLXi8F0b9IV+rn5rvtxbUEYk+fTy2WE+e3b6k0DKYece\nR0VxQyrK1EM/7CAGgOKE9glGrOc91KE4i/kCQgkmK6aMv60S5JqeAanzn9eNbdmA\nQrh75sHVwK8rSW/IbgE/uKpK0RCkYD5Fd+L+FUqsDWlrof2CJFxZwBzKNbRliw==\n-----END RSA PRIVATE KEY-----\n",
  "public": "-----BEGIN RSA PUBLIC KEY-----\nMIGMAoGEAMA2Fy7MZpr6pb9sKoSI/DkbML4QocVSBSicR6NHYyRP3fxyZg+0o5i2\n/CE/gZ++c4x2zrf5HHRKoY1rzvPZXRG9hTsMW0HxyarGCoiWnO/4nmqH7fbtSkjB\nRJBjI6V35cpBxEdAWrt3CxvhsNwYSuFusPuiVnOgBWQQrUI7Schj0mUZAgMBAAE=\n-----END RSA PUBLIC KEY-----\n"
}
```

# usage

```
usage: rsa-json OPTIONS

  Generate a json blob with a new public and private key PEM in it.
  
  OPTIONS
  
    --bits=n    number of bits to use for the modulus

```

# methods

``` js
var createKeys = require('rsa-json')
```

## var pair = createKeys(opts={}, cb)

Create a new RSA keypair in `cb(err, pair)`.

`opts.bits` sets the number of bits in the modulus.

## var pair = createKeys.native(opts={})

Like `createKeys()` but uses
[keypair](https://github.com/juliangruber/keypair) to synchronously
return a RSA keypair calculated in pure JavaScript.

# browsers

If you require `rsa-json` with [browserify](http://browserify.org) only
`createKeys.native` is exported.

# install

With [npm](https://npmjs.org), to get the library do:

```
npm install rsa-json
```

or to get the command-line tool, do:

```
npm install -g rsa-json
```

# license

MIT
