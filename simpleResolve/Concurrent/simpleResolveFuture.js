const Future = require('fluture')

const noop = () => {}

const beginTime = new Date().getTime()

const echoTime = () => {
  const nowTime = new Date().getTime()
  const timeTaken = nowTime - beginTime
  console.log(timeTaken)
}

const arrayOneToThousand = Array.from(new Array(1000).keys());
const aThousandFutures = arrayOneToThousand.map(_ => Future.node(echoTime))
Future.parallel(Infinity, aThousandFutures).fork(noop, noop)

//38-42 ms
//198-210ms