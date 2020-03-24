//module pattern realworld usage by saladin jake
// let AutoIncrementer = function(Model) {
//   let countIds;
//   Model.find().estimatedDocumentCount().exec().then(count => {
//     countIds = count;
//     console.log(count+" is the number of doc")
//   }).catch(e => console.log(e));
//   let countId =  Number(countIds) || 5;
//   function increase() {
//     return countId++;
//   }

//   return {
//     counter: increase,
//   };
// };

// export default AutoIncrementer;


let AutoIncrementer = function(Model) {
  let countIds;
  Model.find().estimatedDocumentCount().exec().then(count => {
    countIds = count;
    console.log(count+" is the number of doc")
  }).catch(e => console.log(e));
  let countId =  Number(countIds) || 5;
  function increase() {
    return countId++;
  }

  return {
    counter: increase,
  };
};

export default AutoIncrementer;