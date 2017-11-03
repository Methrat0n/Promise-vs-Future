const Future = require('fluture')

const noop = () => {}
const beginTime = new Date().getTime()

const echoTime = () => {
  const nowTime = new Date().getTime()
  const timeTaken = nowTime - beginTime
  console.log(timeTaken)
}

for(let i = 0; i < 1000; i++)
  Future.node(echoTime).fork(noop, noop)

// 35-38ms
// 157-164ms