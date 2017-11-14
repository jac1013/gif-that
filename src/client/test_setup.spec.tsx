import * as chai from "chai";
const chaiJestSnapshot = require('chai-jest-snapshot');

chai.use(chaiJestSnapshot);

before(function() {
  chaiJestSnapshot.resetSnapshotRegistry();
});

beforeEach(function() {
  chaiJestSnapshot.configureUsingMochaContext(this);
});
