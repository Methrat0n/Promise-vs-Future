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

for(let i = 0; i < 1000; i++)
  fetchJson.map(echoTime).fork(noop, noop)


/* Node
4647
4748
4699
4768
5241
4869

Moyenne: 4828
 */
/* Browser
3016
2853
3011
2969
3118
3042

Moyenne: 3001
 */