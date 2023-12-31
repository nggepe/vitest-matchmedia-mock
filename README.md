# Vitest MatchMediaMock

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
