import 'jest';
import brainlet from './brainlet';

test('subscribe and unsubscribe do not throw errors', () => {
  const sub = () => {};
  const eventName = 'testEventName';
  expect(() => brainlet.subscribe(eventName, sub)).not.toThrow(Error);
  expect(() => brainlet.unsubscribe(eventName, sub)).not.toThrow(Error);
});

test('invoke works correctly', () => {
  let counter = 0;
  const eventName = 'testEventName';
  const sub = (evtName, count) => evtName == eventName ? counter+=count : 0;
  brainlet.subscribe(eventName, sub);
  brainlet.unsubscribe(eventName, sub);
  brainlet.invokeEvent(eventName, 3);
  expect(counter).toBe(3);
});