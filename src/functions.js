module.exports = {
  sum(a, b) {
    return a + b
  },
  sayHello() {
    return 'hello'
  },
  objectMaker() {
    const obj = {name: "cole"}
    obj["job"] = "assistant instructor"
    return obj
  }
}
