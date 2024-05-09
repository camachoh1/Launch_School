(function() {
  
  const findObjs = function(element, props, multiple) {
    let match = multiple ? [] : undefined;
    element.some(obj => {
      let allMatch = true;
      for(let prop in props) {
        if (!(prop in obj) || obj[prop] !== props[prop]) {
          allMatch = false;
        }
      }

      if (allMatch) {
        if (multiple) {
          match.push(obj);
        } else {
          match = obj;
          return true;
        }
        
      }
    });
    return match;
  }


  const _ = function(element) {
    const u = {
      first() {
        return element[0];
      },

      last() {
        return element[element.length - 1];
      }, 

      without(...values) {
        let newArr = [];
        element.forEach(el => {
          if (values.indexOf(el) === - 1) {
            newArr.push(el);
          }
        });

        return newArr;
      },

      lastIndexOf(search) {
        let idx = -1;

        for(let i = element.length - 1; i >= 0; i -= 1 ) {
          if (element[i] === search) {
            idx = i;
            break;
          }
        }

        return idx;
      },

      sample(quantity) {
        let sampled = [];
        let copy = element.slice();
        
        let get = function() {
          let idx = Math.floor(Math.random() * copy.length);
          let el = copy[idx];

          copy.splice(idx, 1);
          return el;
        };

        if (!quantity) {return get()} 
        while(quantity) {
          sampled.push(get());
          quantity -= 1;
        }

        return sampled;
      }, 

      findWhere(props) {
        return findObjs(element, props, false);
      },

      where(props) {
        return findObjs(element, props, true);
      },

      pluck(key) {
        return element.map(obj => {
          if (obj[key] !== undefined) {
            return obj[key];
          }
        });
      },

      keys() {
        let keys = [];

        for (let prop in element) {
          if (element.hasOwnProperty(prop)) {
            keys.push(prop);
          }
        }

        return keys;
      }, 

      values() {
        let values = [];

        for (let prop in element) {
          if (element.hasOwnProperty(prop)) {
            values.push(element[prop]);
          }
        }

        return values;
      },

      pick(propName) {
        let result = {};
        for (prop in element) {
          if (element.hasOwnProperty(propName)) {
            result[prop] = element[prop];
          }
        }

        return result;
      },

      omit(propName) {
        let result = {};

        for(prop in element) {
          if (element.hasOwnProperty(propName)) {
            if (prop !== propName) {
              result[prop] = element[prop];
            }
          }
        }

        return result
      },

      has(propName) {
        return Object.getOwnPropertyNames(element).includes(propName);
      },
    };

    (["isElement", "isArray", "isObject", "isFunction", "isBoolean", "isString", "isNumber"]).forEach(method => {
        u[method] = function() { _[method].call(u, element);};
    });
    return u;
  }

  _.range = function(start, stop) {
    let range = [];

    if (stop === undefined) {
      stop = start;
      start = 0;
    }

    for(let i = start; i < stop; i += 1) {
      range.push(i);
    }

    return range;
  }

  _.extend = function(obj1,...rest) {
    rest.forEach(obj => {
      for(prop in obj) {
        obj1[prop] = obj[prop];
      }
    });

    return obj1;
  }

  _.isElement = function(obj) {
    return obj && obj.nodeType === 1
  };

  _.isArray = function(array) {
    return array && Array.isArray(array)
  };

  _.isObject = function(obj) {
    return obj && typeof obj === 'object' || typeof obj === 'function'
  };

  _.isFunction = function(func) {
    return func && typeof func === 'function';
  };

  _.isString = function(string) {
    return toString.call(string) === "[object String]"
  };

  _.isNumber = function(num) {
    return toString.call(num) === "[object Number]"
  };

  _.isBoolean = function(bool) {
    return toString.call(bool) === "[object Boolean]"
  };
  window._ = _;
})();