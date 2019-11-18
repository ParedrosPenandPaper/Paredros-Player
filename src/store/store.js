import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
    state: {
        adventureObject: {},
        adventureLoaded: false,

        selectedStoryItem: null,

        expandStatus: false,
    },
    mutations: {
        setAdventureObject(state, adventure) {
            state.adventureObject = adventure
            state.selectedStoryItem = state.adventureObject[1]
            state.adventureLoaded = true;
        },
        toggleStatus(state) {
            state.expandStatus = !state.expandStatus
        },
    },
    actions: {}
})