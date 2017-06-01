import React from 'react';
import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';
import { mount } from 'enzyme';
import GifContainer from '../gif_container';

const gif = { data: { image_url: "http://gph.is/1iwzzrZ" } };
const middlewares = [ thunk ];
const mockStore = configureMockStore(middlewares);
const testStore = mockStore({ gif });

describe('gif container', () => {
  let gifWrapper,
      reviewRating,
      reviewBody;

  describe('creating a new gif', () => {
    beforeEach(() => {
      gifWrapper = mount(
        <GifContainer store={testStore} />
      ).find('Gif');

      reviewRating = gifWrapper.find('input').filterWhere(input => (
        input.props().type === 'number'
      ));
      reviewBody = gifWrapper.find('textarea');
    });
  });
});
