define(function (require) {
  var _ = require('lodash');
  var sinon = require('test_utils/auto_release_sinon');

  return function (Private, Promise) {
    var indexPatterns = Private(require('fixtures/stubbed_logstash_index_pattern'));
    var getIndexPatternStub = sinon.stub();
    getIndexPatternStub.returns(Promise.resolve(indexPatterns));

    var courier = {
      indexPatterns: { get: getIndexPatternStub },
      getStub: getIndexPatternStub
    };

    return courier;
  };
});
