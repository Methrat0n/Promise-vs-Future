const fetch = require('node-fetch');

const beginTime = new Date().getTime()

const echoTime = () => {
  const nowTime = new Date().getTime()
  const timeTaken = nowTime - beginTime
  console.log(timeTaken)
}

for(let i = 0; i < 1000; i++)
  fetch("https://jsonplaceholder.typicode.com").then(echoTime)

/*
4728
4839
4715
5044
4872
5124

Moyenne: 4887
 */
/*
2958
2994
2963
2888
2944
3006

Moyenne: 2958
 */