# Vitest MatchMediaMock

[![codecov](https://codecov.io/gh/nggepe/vitest-matchmedia-mock/graph/badge.svg?token=UEZOJ9PAYZ)](https://codecov.io/gh/nggepe/vitest-matchmedia-mock)
[![NPM Version][npm-version-image]][npm-url]
[![NPM Downloads][npm-downloads-image]][npm-downloads-url]

how to import:

```typescript
import MatchMediaMock from 'vitest-matchmedia-mock`
```

# Usage example

```typescript
describe('your test', () => {
  let matchMediaMock = new MatchMediaMock();
  afterAll(() => {
    matchMediaMock.clear();
  });
});
```

## Use Media Query

```typescript
describe('your test', () => {
  let matchMediaMock = new MatchMediaMock();
  beforeAll(() => {
    matchMediaMock.useMediaQuery('(prefers-color-scheme: dark)');
  });

  afterEach(() => {
    matchMediaMock.clear();
  });

  afterAll(() => {
    matchMediaMock.destroy();
  });
});
```
[npm-downloads-url]: https://npmcharts.com/compare/vitest-matchmedia-mock?minimal=true
[npm-downloads-image]: https://badgen.net/npm/dm/vitest-matchmedia-mock
[npm-version-image]: https://badgen.net/npm/v/vitest-matchmedia-mock
[npm-url]: https://npmjs.org/package/vitest-matchmedia-mock
