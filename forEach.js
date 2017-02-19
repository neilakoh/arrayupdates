var arr = [
  {
    id: 1,
    name: 'test 1',
    lastname: 'tests'
  },
  {
    id: 2,
    name: 'test 2',
    lastname: 'tests'
  },
  {
    id: 3,
    name: 'test 3',
    lastname: 'tests'
  },
  {
    id: 4,
    name: 'test 4',
    lastname: 'tests'
  },
  {
    id: 5,
    name: 'test 5',
    lastname: 'tests'
  },
];

var newObj = {
  id: 2,
  name: 'tabaching',
  lastname: 'te',
}
console.time('test')
function updateArray(arr, newObj) {
  console.log('BEFORE: \n', arr);
  let newArr = [];
  arr.forEach((result, i)=>{
    if(result.id === newObj.id) {
      arr[i] = newObj;
      newArr = arr;
    }
  })
  return newArr;
}
// console.timeEnd('test')
console.log('AFTER: \n', updateArray(arr, newObj));
console.timeEnd('test')
