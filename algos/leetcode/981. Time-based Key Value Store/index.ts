class TimeMap {
  map: Map<any, any>;
  constructor() {
    this.map = new Map();
  }

  set(key: string, value: string, timestamp: number): void {
    if (this.map.has(key)) {
      this.map.get(key).push([value, timestamp]);
    } else {
      this.map.set(key, [[value, timestamp]]);
    }
  }

  get(key: string, timestamp: number): string {
    if (!this.map.has(key)) return "";
    let list = this.map.get(key);
    let low = 0;
    let high = list.length - 1;
    while (low <= high) {
      let mid = Math.floor((low + high) / 2);
      if (list[mid][1] === timestamp) return list[mid][0];
      if (list[mid][1] < timestamp) {
        low = mid + 1;
      } else {
        high = mid - 1;
      }
    }
    if (high < 0) return "";
    return list[high][0];
  }
}