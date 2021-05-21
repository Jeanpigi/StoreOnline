import React from 'react';
import { mount } from 'enzyme';
import Footer from '../../components/Footer';

describe('<Footer />', () => {
    const footer = mount(<Footer />);

    test('Render del componente footer', () => {
        expect(footer.length).toEqual(1);
    });

    test('Render el titulo', () => {
        expect(footer.find('.footer-title').text()).toEqual('Store online by Jpbearp');
    });
});
