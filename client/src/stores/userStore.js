import { defineStore } from 'pinia';
import axios from 'axios';

export const useUserStore = defineStore('userStore', {
  state: () => {
    return {
      user: {
        id: '',
        name: '',
        userstocks: Array,
      },
    };
  },
  persist: true,
  getters: {
    isAuthenticated: (state) => state.user.id != ''
  },
  actions: {
    saveUserData(id, name, userstocks) {
      this.user.id = id;
      this.user.name = name;
      this.user.userstocks = userstocks;
    },
    async logout() {
      await axios.get('/api/logout');
      this.user.id = '';
      this.user.name = '';
    },
  },
});
