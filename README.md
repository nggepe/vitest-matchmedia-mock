# Vitest MatchMediaMock

[![codecov](https://codecov.io/gh/nggepe/vitest-matchmedia-mock/graph/badge.svg?token=UEZOJ9PAYZ)](https://codecov.io/gh/nggepe/vitest-matchmedia-mock)

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
