import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

let b64DecodeUnicode = str =>
    decodeURIComponent(
        Array.prototype.map.call(atob(str), c =>
            '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2)
        ).join(''))

let parseJwt = token =>
    JSON.parse(
        b64DecodeUnicode(
            token.split('.')[1].replace('-', '+').replace('_', '/')
        )
    )


export default new Vuex.Store({
    state: {
        parseJwt,
        admin: false,
        dialogRegistration: false,
        dialogAuthorization: false
    },
    mutations: {
        checkAdmin(state, roles) {
            state.admin = roles.includes("ROLE_ADMIN")
        },
        switchDialogs(state) {
            state.dialogRegistration = !state.dialogRegistration
            state.dialogAuthorization = !state.dialogAuthorization
        },
        updateDialogAuthorization(state, value) {
            state.dialogAuthorization = value
        }
    },
    actions: {},
    modules: {},

})
