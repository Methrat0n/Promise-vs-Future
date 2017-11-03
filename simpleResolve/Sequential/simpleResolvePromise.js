const beginTime = new Date().getTime()

const echoTime = () => {
  const nowTime = new Date().getTime()
  const timeTaken = nowTime - beginTime
  console.log(timeTaken)
}

for(let i = 0; i < 1000; i++)
  new Promise((resolve, reject) => echoTime(resolve))

//30-32 ms
//166-210ms