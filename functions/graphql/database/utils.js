const isObject = obj => {
  return Object.prototype.toString(obj) === '[object Object]' ? true : false;
};

const toArray = snapshot => {
  let arr = [];
  snapshot.forEach(childSnapshot => {
    let val = childSnapshot.val();
    if(isObject(val)){
      val.id = childSnapshot.key;
    }
    arr.push(val);
  });
  return arr;
};

module.exports = toArray;
