const subscriptions = {};
const cachedEventData = {};

/*
 * Subscribes a callback to an event. The callback receives the event name and the data.
 * @param {string} event The event name to subscribe to.
 * @param {()=>(eventName:string, data)} callback The callback to invoke when the event is raised.
 * The callback will receive the event name and the event data in its arguments respectively.
 */
export function subscribe(event, callback) {
  if(!subscriptions[event])
    subscriptions[event] = [];
  const subsList = subscriptions[event];
  if(!subsList.some(subbedCallback => subbedCallback === callback))
    subsList.push(callback);
}

/**
 * Unsubscribes a callback from an event.
 * @param {string} event The event name to subscribe to.
 * @param {()=>(eventName:string, data)} callback The callback to invoke when the event is raised.
 * @returns {boolean} Returns true if a matching handler was removed, false otherwise.
 */
export function unsubscribe(event, callback) {
  if(!subscriptions[event])
    return;

  const indexToRemove = subscriptions[event].indexOf(callback);
  if(indexToRemove > 0) {
    subscriptions[event].splice(indexToRemove, 1);
    return true;
  }
  return false;
}

/**
 * Raises an event, invoking all subscribed callbacks in the process.
 * Invoked events receive the event name and the data in their arguments respectively.
 * @param {string} event The event name to subscribe to.
 * @param {*} data The data that all subscribed callbacks will receive.
 */
export function invokeEvent(event, data) {
  if(!subscriptions[event])
    return;

  cachedEventData[event] = data;
  const subsToInvoke = subscriptions[event];
  for(let i = 0; i < subsToInvoke.length; i++)
    subsToInvoke[i](event, data);
}

/**
 * Returns the last data an event was raised with, or null if it was never raised.
 * @param {string} event The event name to return the data for.
 */
export function getCachedEventData(event) {
  return cachedEventData[event] === undefined ? null : cachedEventData[event];
}

export default {
  subscribe: subscribe,
  unsubscribe: unsubscribe,
  invokeEvent: invokeEvent,
  getCachedEventData: getCachedEventData
};
