import Vue from 'vue'
import Vuex from 'vuex'
import axios from "axios";

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
        //функция для парса токена
        parseJwt,
        //левое меню отрисовка
        leftMenuDrawer: false,
        //регистрация - авторизация
        dialogRegistration: false,
        dialogAuthorization: false,
        //алерты при логине
        vBadLoginAlert: false,
        vNewLoginLoading: false,
        //все итемы
        items: {},
        //отсортированные итемы
        sortedItemsWHAT_SHOW_IN_TABLE_VIEW: {},
        //окно добавления предмета
        dialogAddItem: false,
        //инфа о предмете (промежуточное состояние)
        item: {
            name: '',
            description: '',
            price: '',
            image: ''
        },
        defaultItem: {},
        //поисковик предметов
        textFieldSearchItem: '',
        //шоптабл элементы
        dialogToDeleteItem: '',
        dialogToEditItem: '',
        //инфа о юзере
        user: {
            admin: false,
            username: 'testuser',
            password: '12345',
            email: ''
        }
    },
    mutations: {
        checkAdmin(state, roles) {
            state.user.admin = roles.includes("ROLE_ADMIN")
        },
        switchDialogs(state) {
            state.dialogRegistration = !state.dialogRegistration
            state.dialogAuthorization = !state.dialogAuthorization
        },
        updateDialogAuthorization(state, value) {
            state.dialogAuthorization = value
        },
        updateDialogRegistration(state, value) {
            state.dialogRegistration = value
        },
        updateDialogAdd(state, value) {
            state.dialogAddItem = value
        },
        updateLeftMenuDrawer(state, value) {
            state.leftMenuDrawer = value
        },
        prepareDialogToDeleteItem(state, payload) {
            state.dialogToDeleteItem = payload['dialogDelete']
            state.item = Object.assign({}, payload['itemToDelete'])
        },
        closeDialogToDeleteItem(state) {
            state.dialogToDeleteItem = false
            state.item = Object.assign({}, state.defaultItem)
        },
        prepareDialogToEditItem(state, payload) {
            state.dialogToEditItem = payload['dialogEdit']
            state.item = Object.assign({}, payload['itemToEdit'])
        },
        closeDialogToEditItem(state) {
            state.dialogToEditItem = false
            state.item = Object.assign({}, state.defaultItem)
        },
        sortAllItems(state, value) {
            state.sortedItemsWHAT_SHOW_IN_TABLE_VIEW = state.items.filter(item => item.name.includes(value));
        }
    },
    actions: {
        AUTHORIZATION_USER({state, commit}) {
            state.vNewLoginLoading = true
            axios.post("http://localhost:9000/api/auth/login", {
                username: state.user['username'],
                password: state.user['password']
            })
                .then(response => {
                    let roles = state.parseJwt(response.data.token)["roles"];
                    commit('checkAdmin', roles)
                    state.dialogAuthorization = false
                    state.vBadLoginAlert = false;
                    state.vNewLoginLoading = false
                })
                .catch(error => {
                    console.log("ОШИБОЧКА ПРИ АВТОРИЗАЦИИ\n" + error)
                    state.vBadLoginAlert = true
                    state.vNewLoginLoading = false
                })
        },
        REGISTRATION_USER({state}) {
            axios.post("http://localhost:9000/api/register", {
                    username: state.user['username'],
                    password: state.user['password'],
                    email: state.user['email']
            })
                .then(response => {
                    state.user = response.data
                    state.dialogRegistration = false
                })
            console.log()
        },
        ADD_ITEM({state}) {
            state.item = Object.assign({}, state.item)
            console.log(state.item)
            axios
                .post('http://localhost:9000/api/item/add', state.item)
                .then(response => {
                    state.sortedItemsWHAT_SHOW_IN_TABLE_VIEW = response.data
                    state.item = Object.assign({}, state.defaultItem)
                })
                .catch(error => console.log(error))
        },
        LOADING_ITEMS({state}) {
            axios
                .get('http://localhost:9000/api/item/')
                .then(response => {
                    state.items = response.data
                    state.items.forEach(n => n.show = true)
                    state.sortedItemsWHAT_SHOW_IN_TABLE_VIEW = state.items
                })
        },
        DELETE_ITEM_CONFIRM({state}) {
            axios
                .post('http://localhost:9000/api/item/delete/' + state.item['id'])
                .then(response => {
                    state.sortedItemsWHAT_SHOW_IN_TABLE_VIEW = response.data
                })
                .catch(error => console.log(error))
        },
        EDIT_ITEM_CONFIRM({state}) {
            axios
                .post('http://localhost:9000/api/item/edit', state.item)
                .then(response => {
                    state.sortedItemsWHAT_SHOW_IN_TABLE_VIEW = response.data
                })
                .catch(error => console.log(error))
        }
    },
    modules: {},
})
