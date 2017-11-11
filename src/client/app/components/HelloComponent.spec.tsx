import {suite, test} from "mocha-typescript";
import {expect} from 'chai';
import * as React from "react";
import * as renderer from 'react-test-renderer';
import {ReactTestRenderer} from 'react-test-renderer';
import {Hello} from './Hellocomponent';

@suite
class HelloTest {
  component: ReactTestRenderer;
  before() {
    this.component = renderer.create(
      <Hello/>
    );
  }
  @test
  shouldIncrementNumber() {
    this.component.toTree().instance.incrementNumber();
    expect(this.component.toTree().instance.state.number).to.equal(1);
  }

  @test
  shouldBeADiv() {
    expect(this.component.toJSON().type).to.equal('section');
  }

  @test
  shouldContainHelloWorld() {
    expect(this.component.toJSON().children).to.contain('Hello World! ');
  }
}
