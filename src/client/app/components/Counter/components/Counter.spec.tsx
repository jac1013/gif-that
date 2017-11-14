import {suite, test} from 'mocha-typescript';
import {expect} from 'chai';
import * as React from "react";
import * as renderer from 'react-test-renderer';
import {Counter} from './Counter';
import {ReactTestRenderer} from 'react-test-renderer';

@suite
class CounterTest {
  component: ReactTestRenderer;
  number: number = 0;
  before() {
    this.component = renderer.create(
      <Counter incrementHandler={() => {}} decrementHandler={() => {}} number={this.number}/>
    );
  }

  @test
  shouldRenderCorrectly() {
    expect(this.component.toJSON()).to.matchSnapshot();
  }

  @test
  shouldHaveCorrectNumber() {
    expect(this.component.toJSON().children).to.contain(this.number + '');
  }
}
