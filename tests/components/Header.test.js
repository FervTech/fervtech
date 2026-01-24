// Example Vitest test
import { describe, it, expect } from 'vitest';
import { mount } from '@vue/test-utils';
import Header from '../../src/components/navigation/Header.vue';

describe('Header', () => {
    it('renders logo correctly', () => {
        const wrapper = mount(Header);
        expect(wrapper.find('.logo').text()).toContain('Fervtech');
    });
});