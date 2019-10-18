function required (param = '') {
  throw new Error(`A missing parameter was encountered ${param}`);
}

/**
 * Controls basic state and event handling.
 */
export class AppState {
  constructor () {
    this.eventSubscription = {};
    this.eventStateData = {};
    this.getStateData = this.getStateData.bind(this);
    this.setStateData = this.setStateData.bind(this);
    this.subscribe = this.subscribe.bind(this);
    this.unsubscribe = this.unsubscribe.bind(this);
    this.raiseEvent = this.raiseEvent.bind(this);
  }

  /**
     * Retrieves the data associated with the specified State.
     * @param {*} stateVariable The State data to retrieve.
     */
  getStateData (stateVariable) {
    return this.eventStateData[stateVariable];
  }

  /**
     * Associates the specified State variable to the data.
     * @param {*} stateVariable The State variable to set the data for.
     * @param {*} data The data to set.
     */
  setStateData (stateVariable, data) {
    this.eventStateData[stateVariable] = data;
  }

  /**
     * Subscribes the object to the specified list of Events.
     * @param {*} obj Required. The object to subscribe.
     * @param  {...any} args Required. A list of one or more Events to subscribe the object to.
     */
  subscribe (obj = required('obj'), ...args) {
    if (args.length === 0)
      throw new Error('objs cannot be null, and at least one arg must be specified');

    for (const eventName of args) {
      if (this.eventSubscription[eventName] == null)
        this.eventSubscription[eventName] = [];
      if (this.eventSubscription[eventName].find(o => o === obj) == null)
        this.eventSubscription[eventName].push(obj);
    }
  }

  /**
     * Unsubscribes the specified object from the Events in the args parameter, or all Events if this parameter is left empty.
     * @param {*} obj Required. The object to unsubscribe.
     * @param  {...any} args Optional. The Events to unsubscribe from. If this parameter is empty, the object is unsubscribed from all Events.
     */
  unsubscribe (obj = required('obj'), ...args) {
    // args is never null
    if (args.length > 0) {
      for (const eventName of args) {
        if (this.eventSubscription[eventName] != null)
          this.eventSubscription[eventName] = this.eventSubscription[eventName].filter((val, index, arr) => val !== obj);
      }
    } else {
      const arr = Object.keys(this.eventSubscription);
      for (const key of arr)
        this.eventSubscription[key] = this.eventSubscription[key].filter((val, index, arr) => val !== obj);
    }
  }

  getSubscriptionCount () {
    let count = 0;
    const arr = Object.keys(this.eventSubscription);
    for (const key of arr)
      count += this.eventSubscription[key].length;
    return count;
  }

  /**
   * Invoke all event handlers passing in the associated event data.
   * @param {*} event Required. The Event to raise.
   * @param {*} data Optional. The data associated with the Event to raise.
   */
  raiseEvent (event = required('event'), data) {
    for (const objToInvoke of this.eventSubscription[event]) {
      if (objToInvoke != null) {
        if (objToInvoke[event] != null) { // for objects
          objToInvoke[event](event, data);
        } else if (typeof objToInvoke === 'function') { // for functions
          objToInvoke(event, data);
        }
      }
    }
  }
}
