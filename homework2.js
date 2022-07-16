function makeObjectDeepCopy(obj){
    if (!(obj instanceof Object)) {
        return obj;
    }
    
    let objClone;

    const Constructor = obj.constructor;
    objClone = new Constructor();

    for (let property in obj) {
        objClone[property] = makeObjectDeepCopy(obj[property]);
    }
    
    return objClone;
}


function selectFromInterval(array, firstInterval, secondInterval){
    if (!Array.isArray(array) || typeof firstInterval != "number" || typeof secondInterval != "number" || !array.every((elem) => typeof elem == 'number')){
        
        throw new Error("Ошибка!");
    }


    if(firstInterval > secondInterval){
        return array.filter((elem) => secondInterval <= elem && firstInterval >= elem)
    }
    return array.filter((elem) => firstInterval <= elem && secondInterval >= elem)
}

const myIterable = {
    from: 1, 
    to: 4
};

myIterable[Symbol.iterator] = function() {
  if (this.to < this.from) {
    throw new Error('Ошибка!');
  }
  else {
    return {
      current: this.from,
      last: this.to,
      next() {
        return this.current <= this.last ? {done: false, value: this.current++ } : {done: true};
      },
    };
  }
};