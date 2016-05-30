import {dispatcher} from '../dispatcher/dispatcher.js'
import {constants} from '../constants/constants.js'

export var actions = {
  increment: function() {
    console.log('dispatching increment action')
    dispatcher.dispatch({
      actionType: constants.INCREMENT
    })
  } 
}
