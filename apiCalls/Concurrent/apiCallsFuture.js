const Future = require('fluture')
const fetch = require('node-fetch');
const fetchf = Future.encaseP(fetch);

const noop = () => {}

const beginTime = new Date().getTime()

const echoTime = () => {
  const nowTime = new Date().getTime()
  const timeTaken = nowTime - beginTime
  console.log(timeTaken)
}
const fetchJson = fetchf("https://jsonplaceholder.typicode.com")

const arrayOneToThousand = Array.from(new Array(1000).keys());
const aThousandFutures = arrayOneToThousand.map(_ => fetchJson.map(echoTime))
Future.parallel(Infinity, aThousandFutures).fork(noop, noop)

/* Node
4754
4982
4676
4653
4633
5523

Moyenne : 4870
 */

/* Browser
3286
3043
3035
2982
2979
3007
Moyenne : 3055
 */
