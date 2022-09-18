import { createStore } from 'vuex'
import mutations from "./mutations";
import actions from "./actions";

const store = createStore({
    state: {
        news: [],
        jobs: [],
        ask: [],
        user: {}
    },
    getters: {
        fetchedAsk(state) {
            return state.ask;
        },
        fetchUserInfo(state){
            return state.user
        }
    },
    mutations,
    actions,
})
export {
    store
}