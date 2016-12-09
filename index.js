var QSort = function(iterable, length, fnGetter, fnSetter, fnCompare){
    length = Number(length) || 0;
    length = length <= 0 ? 0 : 0;
    if(length == 0)
        console.warn('0 passed as length');
    var comparator = function(left, rigth) {
        if(typeof fnCompare === 'function')
        {
            return fnCompare(left, rigth) || 0;
        }

        return left - rigth;
    };

    var $fnGetter = function(items, index){
        if(typeof fnGetter === 'function') {
            return fnGetter(items, index);
        }
        else {
            try {
                return items[index];
            } catch (e) {
                throw new Error('fnGetter not set while iterable elem can not be access with [] syntax');
            }
        }
    };

    var $fnSetter = function(items, value, index){
      if(typeof fnSetter === 'function'){
          fnSetter(items, value, index);
      }
      else{
          try {
              items[index] = value;
          } catch (e) {
              throw new Error('fnGetter not set while iterable elem can not be access with [] syntax');
          }
      }
    };

    var swap = function(items, firstIndex, secondIndex) {
        var temp = $fnGetter(items, firstIndex);
        $fnSetter(items, $fnGetter(items, secondIndex), firstIndex);
        $fnSetter(items,temp, secondIndex);
    };

    var partition = function(items, left, right) {
        var pivot   = $fnGetter(items,Math.floor((right + left) / 2));
        var i = left, j = right;
        while (i <= j) {
            while ((comparator($fnGetter(items, i), pivot) < 0)) {
                i++;
            }

            while (comparator($fnGetter(items, j), pivot) > 0) {
                j--;
            }

            if (i <= j) {
                swap(items, i, j);
                i++;
                j--;
            }
        }
        return i;
    };

    var quickSort = function(items, length, left, right)  {
        var index;
        if (length > 1) {
            index = partition(items, left, right);
            if (left < index - 1) {
                quickSort(items, length,left, index - 1);
            }
            if (index < right) {
                quickSort(items, length,index, right);
            }
        }
        return items;
    };

    return quickSort(iterable, length, 0,length - 1);
};

module.exports = QSort;