
let _singleton = null
class LocalConfigStore{
  constructor(){
    
    if(!_singleton){
       _singleton = this; 
     }
      
    this.dataStore = {};
    this.stringify = JSON.stringify;
        this.parser = JSON.parse;
      this.stringify = JSON.stringify;
      //this.localStore = localStorage;
   return _singleton;
  }

  parse(valu){
    return this.stringify(valu, (key, val) =>{
      return (typeof val ==='function') ? val.toString().replace(/\t|\n/g, ''): val
    })
  }

  stringify(valu){
    return this.stringify(valu, (key,val)=>{
       if(typeof val === 'string'){
         var regexMe =/^function\s*\([^()]*\)\s*{.*}$/;

          if (regex.exec(val) !==null){
            return eval('key =' + val)
          }else{
            return val
          }
       }else{
          return val;
       }
    })
  }

  // operation () {
       
  // }

  // setStorage(key, val){
  //   if(typeof value === 'object'){
  //     var value = this.stringify(value);
  //   }
  //   this.localStore.setItem(key,val)

  // }

  // getStorage(){
  //   var value = this.localStore.getItem(key);
  //   try{
  //     return this.parse(value)
  //   }catch(err){
  //     return value;
  //   }
  // }

  // clearStore(){
  //   this.localStore.clear()
  // }

  // removeFromStore(key){
  //   this.localStore.removeItem(key)
  // }


  setConfig(key, val){
    this.dataStore[key] = val;
  }

  getConfig(key){
    return this.dataStore[key];
  }

   setItem(key, val){
    this.dataStore[key] = val;
  }

  getItem(key){
    return this.dataStore[key];
  }

}

let Store = new LocalConfigStore();

module.exports=Store;