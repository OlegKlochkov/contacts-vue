import { createStore } from 'vuex'

export default createStore({
  state: {
    id: 2,
    contacts: [
      {
        id: 1,
        name: "Aiden Aminov",
        phone: "+79658984535",
        socialMedia: {
          vk: "vk.com/kazax",
          discord: "kazax#1234",
          telegram: "ayden_",
          github: "AminovAyden",
        },
        fullyVisible: false
      },
      {
        id: 2,
        name: "Ilya Rakcheev",
        phone: "+79658984535",
        socialMedia: {
          vk: "vk.com/rakcha",
          discord: "rakcha#1234",
          telegram: "rakchik",
          github: "RakcheevIlya",
        },
        fullyVisible: false
      },
    ]
  },
  getters: {
    getContacts(state){
      return state.contacts;
    }
  },
  mutations: {
    addContact(state, payload){
      state.id++;
      payload.id = state.id;
      state.contacts.push(payload);
    }
  },
  actions: {
    addContact_action({commit}, payload){
      commit('addContact', payload)
    }
  },
  modules: {
  }
})
