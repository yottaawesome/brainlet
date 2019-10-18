import { AppState } from '../index'

const events = {
  TEST1: 'test1'
}

class AppStateTests {
  constructor () {
    this.appState = new AppState()
    this.testUnsubscribe = this.testUnsubscribe.bind(this)
    this.runAll = this.runAll.bind(this)
  }

  testUnsubscribe () {
    this.appState.subscribe(this, events.TEST1)
    if (this.appState.getSubscriptionCount() !== 1) { 
        throw new Error('Unexpected subscription count, expected 1');

    this.appState.unsubscribe(this)
    if (this.appState.getSubscriptionCount() !== 0) { throw 'Unexpected subscription count, expected 0' }
  }

  runAll () {
    this.testUnsubscribe()
  }
}

export { AppStateTests }
