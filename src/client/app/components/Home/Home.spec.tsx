import {suite, test} from 'mocha-typescript';
import {expect} from 'chai';
import * as React from "react";
import * as renderer from 'react-test-renderer';
import {ReactTestRenderer} from 'react-test-renderer';
import {MemoryRouter} from 'react-router';
import {Home} from './Home';

@suite
class HomeTest {
  component: ReactTestRenderer;
  before() {
    this.component = renderer.create(
      <MemoryRouter><Home/></MemoryRouter>
    );
  }

  @test
  shouldRenderCorrectly() {
    expect(this.component.toJSON()).to.matchSnapshot();
  }
}
