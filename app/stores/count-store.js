import {dispatcher} from '../dispatcher/dispatcher.js'
import {constants} from '../constants/constants.js'
import {EventEmitter} from 'events'

var _count = 0

function incrementCount() {
  _count++
  console.log('count: ' + _count)
}

export var CountStore = Object.assign({}, EventEmitter.prototype, {
  getCount: function() {
    return _count
  },

  addEventListener: function(callback) {
    this.on('CHANGE', callback)
  },

  emitChange: function() {
    this.emit('CHANGE')
  }
})


dispatcher.register(function(action) {
  switch (action.actionType) {
    case constants.INCREMENT:
      console.log('count store callback received')
      console.log(action)
      incrementCount()
      CountStore.emitChange()
      break
  }
})
