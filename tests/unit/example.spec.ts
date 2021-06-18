import { createLocalVue, mount } from '@vue/test-utils';
import Search from '@/components/Search.vue';
import Vuetify from 'vuetify';

const localVue = createLocalVue();

describe('Search.vue', () => {
  let vuetify: any;
  
  beforeEach(() => {
    vuetify = new Vuetify()
  });
  it('Emite um valor válido', () => {

    const wrapper = mount(Search, {
      localVue,
      vuetify
    });
    const input = wrapper.find('.v-text-field');
    input.setValue("zdfsdfdsf");
  });
});
