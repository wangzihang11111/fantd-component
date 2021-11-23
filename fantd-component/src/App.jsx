import React, { useState, useEffect }  from 'react';
export default function () {
  const [a, setA] = useState(0)
  const [b, setB] = useState(0)
  useEffect(() => {
    console.log('a变成了' + a)
  }, [a])
  return <div>
    <span>{a}</span>
    <span>{b}</span>
    <button onClick={() => setA(a+1)}>点击+1</button>
    <button onClick={() => setB(b+1)}>点击+1</button>
  </div>
}
// export default class A extends React.Component {
//   render () {
//     return <div>6666</div>
//   }
// }