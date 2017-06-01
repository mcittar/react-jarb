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
      actualGif;

  describe('creating a new gif', () => {
    beforeEach(() => {
      gifWrapper = mount(
        <GifContainer store={testStore} />
      ).find('Gif');

      actualGif = gifWrapper.find('gif');

    });
  });
});
