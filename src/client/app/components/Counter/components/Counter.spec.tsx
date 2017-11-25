import {suite, test} from 'mocha-typescript';
import {expect} from 'chai';
import * as React from "react";
import * as renderer from 'react-test-renderer';
import {Counter} from './Counter';
import {ReactTestRenderer} from 'react-test-renderer';
import {MemoryRouter} from 'react-router';

@suite
class CounterTest {
  component: ReactTestRenderer;
  number: number = 0;

  before() {
    this.component = renderer.create(
      <MemoryRouter><Counter incrementHandler={() => {
      }} decrementHandler={() => {
      }} number={this.number}/></MemoryRouter>
    );
  }

  @test
  shouldRenderCorrectly() {
    expect(this.component.toJSON()).to.matchSnapshot();
  }
}
