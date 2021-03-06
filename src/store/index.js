import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

import moment from 'moment-timezone'
moment.tz.setDefault('UTC')

import Axios from 'axios'

export default new Vuex.Store({
  state: {
    currentYear: 2019,
    currentMonth: 3,
    eventFormPosX: 0,
    eventFormPosY: 0,
    eventFormActive: false,
    events: [
      {
        description: 'Random event1',
        date: moment('2019-03-06', 'YYYY-MM-DD')
      },
      {
        description: 'Random event2',
        date: moment('2019-03-21', 'YYYY-MM-DD')
      },
      {
        description: 'Random event3',
        date: moment('2019-04-06', 'YYYY-MM-DD')
      }
    ],
    eventFormDate: moment()
  },
  mutations: {
    setCurrentMonth(state, payload) {
      state.currentMonth = payload
    },
    setCurrentYear(state, payload) {
      state.currentYear = payload
    },
    eventFormPos(state, payload) {
      state.eventFormPosX = payload.x
      state.eventFormPosY = payload.y
    },
    eventFormActive(state, payload) {
      state.eventFormActive = payload
    },
    addEvent(state, payload) {
      let obj = {
        description: payload,
        date: state.eventFormDate
      }
      state.events.push(obj)
      Axios.post('/add_event', obj)
    },
    eventFormDate(state, payload) {
      state.eventFormDate = payload
    }
  }
})
