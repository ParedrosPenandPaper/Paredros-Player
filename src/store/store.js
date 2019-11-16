import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
    state: {
        expandStatus: false,
        adventureLoaded: false
    },
    mutations: {
        toggleStatus(state) {
            state.expandStatus = !state.expandStatus
        },
        loadAdventure(state) {
            state.adventureLoaded = true;
        }
    },
    actions: {}
})