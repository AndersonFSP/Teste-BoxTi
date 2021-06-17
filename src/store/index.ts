import Vue from 'vue'
import Vuex from 'vuex'
import user from './modules/User';
import repositories from './modules/Repositories';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    user,
    repositories
  }
});
