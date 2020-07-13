export class DataTracker {
  data = [];

  insert = value => {
    this.data.push(value);
  };

  showMin = () => {
    return this.data.reduce(
      (acc, currVal) => (acc < currVal ? acc : currVal),
      99
    );
  };

  showMax = () => {
    return this.data.reduce(
      (acc, currVal) => (acc > currVal ? acc : currVal),
      0
    );
  };

  showMean = () => {
    return Math.round(
      this.data.reduce((acc, currVal) => acc + currVal, 0) / this.data.length
    );
  };

  showMode = () => {
    return Object.values(
      this.data.reduce((count, e) => {
        if (!(e in count)) {
          count[e] = [0, e];
        }

        count[e][0]++;
        return count;
      }, {})
    ).reduce((a, v) => (v[0] < a[0] ? a : v), [0, null])[1];
  };
}
