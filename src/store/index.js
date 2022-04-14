import { createStore } from 'vuex'

export default createStore({
  state: {
    contacts: [
      {
        name: "Aiden Aminov",
        phone: "+79658984535",
        socialMedia: {
          vk: "vk.com/kazax",
          discord: "kazax#1234",
          instagram: "ayden_",
          github: "AminovAyden",
        },
      },
      {
        name: "Ilya Rakcheev",
        phone: "+79658984535",
        socialMedia: {
          vk: "vk.com/rakcha",
          discord: "rakcha#1234",
          instagram: "rakchik",
          github: "RakcheevIlya",
        },
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
