import { createLocalVue, mount } from '@vue/test-utils';
import Vuetify from 'vuetify';
import Search from '@/components/Search.vue';


describe('Search.vue', () => {
  let localVue: any;
  let vuetify: any;
  
  beforeEach(() => {
    localVue = createLocalVue();
    vuetify = new Vuetify()
  });
  const wrapper = mount(Search, {
    localVue,
    vuetify
  });
  it('Emite um valor válido', () => {

    const input = wrapper.find('#input-12');
    // input.setValue("zdfsdfdsf");

    console.log(input)
  });
});
