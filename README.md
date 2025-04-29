# Vitest MatchMediaMock

[![codecov](https://codecov.io/gh/nggepe/vitest-matchmedia-mock/graph/badge.svg?token=UEZOJ9PAYZ)](https://codecov.io/gh/nggepe/vitest-matchmedia-mock)
[![NPM Version][npm-version-image]][npm-url]
[![NPM Downloads][npm-downloads-image]][npm-downloads-url]

how to import:

```typescript
import MatchMediaMock from 'vitest-matchmedia-mock'
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

### Example implementation

```typescript
export const myImplementation = () => {
  const myMediaMatcher = window.matchMedia('(prefers-color-scheme: dark)');
  myMediaMatcher.addEventListener('change', (ev) => {
    console.log(ev.matches);
  });

  return myMediaMatcher.matches;
};
```

### Test

```typescript
describe('your test', () => {
  let matchMediaMock = new MatchMediaMock();

  afterEach(() => {
    matchMediaMock.clear();
  });

  afterAll(() => {
    matchMediaMock.destroy();
  });

  test('matches immediately', () => {
    matchMediaMock.useMediaQuery('(prefers-color-scheme: dark)');
    const response = myImplementation();

    expect(response).toBe(true);
  });

  test('doesnt match immediately', () => {
    matchMediaMock.useMediaQuery('(prefers-color-scheme: light)');
    const response = myImplementation();

    expect(response).toBe(false);
  });

  test('fires change event with match', () => {
    myImplementation();
    matchMediaMock.useMediaQuery('(prefers-color-scheme: dark)');

    expect(console.log).toHaveBeenCalledWith(true);
  });

  test('fires change event with mismatch', () => {
    myImplementation();
    matchMediaMock.useMediaQuery('(prefers-color-scheme: light)');

    expect(console.log).toHaveBeenCalledWith(false);
  });
});
```
## Contributors

<a href="https://github.com/nggepe/vitest-matchmedia-mock/graphs/contributors"><img src = "https://contrib.rocks/image?repo=nggepe/vitest-matchmedia-mock"/></a>

[npm-downloads-url]: https://npmcharts.com/compare/vitest-matchmedia-mock?minimal=true
[npm-downloads-image]: https://badgen.net/npm/dm/vitest-matchmedia-mock
[npm-version-image]: https://badgen.net/npm/v/vitest-matchmedia-mock
[npm-url]: https://npmjs.org/package/vitest-matchmedia-mock
