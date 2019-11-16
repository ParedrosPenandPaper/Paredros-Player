import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
    state: {
        adventureObject: {},
        expandStatus: false,
        adventureLoaded: false
    },
    mutations: {
        setAdventureObject(state, adventure) {
            state.adventureObject = adventure
            state.adventureLoaded = true;
        },
        toggleStatus(state) {
            state.expandStatus = !state.expandStatus
        },
    },
    actions: {}
})