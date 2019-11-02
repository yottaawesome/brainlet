import brainlet from '.';

test('subscribe() and unsubscribe() do not throw errors', () => {
  const sub = () => {};
  const eventName = 'testEventName';

  expect(() => brainlet.subscribe(eventName, sub)).not.toThrow();
  expect(() => brainlet.unsubscribe(eventName, sub)).not.toThrow();
});

test('invoke() works correctly', () => {
  let counter = 0;
  const eventName = 'testEventName';
  const sub = (evtName, count) => evtName == eventName ? counter+=count : 0;

  brainlet.subscribe(eventName, sub);
  brainlet.invokeEvent(eventName, 3);
  brainlet.unsubscribe(eventName, sub);

  expect(counter).toBe(3);
});

test('unsubscribe() removes subscription', () => {
  let counter = 0;
  const eventName = 'testEventName';
  const sub = (evtName, count) => evtName == eventName ? counter+=count : 0;

  brainlet.subscribe(eventName, sub);
  brainlet.unsubscribe(eventName, sub);
  brainlet.invokeEvent(eventName, 3);

  expect(counter).toBe(0);
});

test('getCachedEventData() returns correct data', () => {
  let counter = 0;
  const eventName = 'testEventName';
  const sub = (evtName, count) => evtName == eventName ? counter+=count : 0;

  brainlet.subscribe(eventName, sub);
  brainlet.invokeEvent(eventName, 3);
  brainlet.unsubscribe(eventName, sub);
  
  expect(brainlet.getCachedEventData(eventName)).toBe(3);
});

test('subscribe() fails on non-function callbacks', () => {
  expect(() => brainlet.subscribe('testEventName', 1)).toThrow(Error);
});
