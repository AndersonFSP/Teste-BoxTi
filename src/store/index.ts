import Vue from 'vue'
import Vuex from 'vuex'
import user from './modules/user/index';
import repositories from './modules/repositories/index';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    user,
    repositories
  }
});
