export default class MyStorage {
  constructor(namespace) {
    this.namespace = namespace;
    this.storage = JSON.parse(localStorage.getItem(namespace) || '{}');
    return this;
  }

  get(key) {
    return this.storage[key] || '';
  }

  set(key, value) {
    this.storage[key] = value;
    this.updateStorage();
  }

  updateStorage() {
    localStorage.setItem(this.namespace, JSON.stringify(this.storage));
  }
}
