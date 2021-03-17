/**
 * 实现一个事件模型（EventEmitter）
 * 实现简单的 on、remove、once等功能
 *
 */

class EventEmitter {
  constructor() {
    this.memo = {};
  }

  on(name, callback) {
    if (this.memo[name]) {
      this.memo[name].push(callback);
    } else {
      this.memo[name] = [callback];
    }
  }

  remove(name, callback) {
    const tasks = this.memo[name];
    if (tasks) {
      const index = tasks.findIndex((f) => f === callback);
      if (index >= 0) {
        tasks.splice(index, 1);
      }
    }
  }

  once(name, callback) {
    const self = this;
    function oneTime(...args) {
      callback.apply(self, args);
      self.remove(name, oneTime);
    }
    this.on(name, oneTime);
  }

  emit(name, ...args) {
    if (this.memo[name]) {
      const tasks = [...this.memo[name]];
      for (let fn of tasks) {
        fn.apply(this, args);
      }
    }
  }
}

const emitter = new EventEmitter();

const callback = function (arg1, arg2) {
  console.log("listener", arg1, arg2);
};

emitter.on("someEvent", callback);

emitter.once("someEvent", function (arg1, arg2) {
  console.log("listener once", arg1, arg2);
});

emitter.emit("someEvent", "arg1 参数", "arg2 参数");

emitter.emit("someEvent", "arg1 参数1", "arg2 参数1");

emitter.remove("someEvent", callback);

emitter.emit("someEvent", "arg1 参数2", "arg2 参数2");
