import _ from 'underscore';

class Util {
    static makeEmptyMatrix(n, m, value) {
      let r = _.range(1,m + 1);
      return _.map(r, () => Array(n).fill(value));
    }
}

export default Util;
