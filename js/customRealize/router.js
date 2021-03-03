class Routers {
  constructor() {
    // 以键值对的形式存储路由
    this.routers = {};
    // 当前的 url
    this.currentUrl = "";
    // 记录出现过的路由
    this.history = [];
    // 作为指针，默认指向 this.history 的最后一个元素
    this.currentIndex = this.history.length - 1;
    this.isBack = false;

    this.refresh = this.refresh.bind(this);
    this.backOff = this.backOff.bind(this);
    window.addEventListener("load", this.refresh, false);
    window.addEventListener("hashchange", this.refresh, false);
  }

  // 存储 path 路径和 对应的 callback
  route(path, callback) {
    this.routers[path] = callback || function () {};
  }

  // 刷新
  refresh() {
    console.log(location, "location");
    // 获取 hash 路径
    this.currentUrl = location.hash.slice(1) || "/";
    if (!this.isBack) {
      this.history.push(this.currentUrl);
      this.currentIndex++;
    }
    // 执行 callback 函数
    this.routers[this.currentUrl]();
    console.log("指针:", this.currentIndex, "history:", this.history);
    this.isBack = false;
  }

  // 后退
  backOff() {
    this.isBack = true;
    this.currentIndex = this.currentIndex <= 0 ? 0 : this.currentIndex - 1;
    location.hash = `#${this.history[this.currentIndex]}`;
    this.routers[this.history[this.currentIndex]]();
    console.log(this.currentIndex, this.history, "a");
  }
}
