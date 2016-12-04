import _ from 'lodash/fp';

class Util {
    static makeEmptyMatrix(n, m, value) {
      let r = _.range(1, m + 1);
      return _.map(() => Array(n).fill(value), r);
    }
}

export default Util;
