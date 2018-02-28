function joinThreeArrays(arr1, arr2, arr3) {
  
        var object = {}, result = [];
        arr1.forEach(function (item) {
            if (!object[item])
                object[item] = undefined;
        })
        arr2.forEach(function (item) {
            if (!object[item])
                object[item] = undefined;
        })
        arr3.forEach(function (item) {
            if (!object[item])
                object[item] = undefined;
        })
        for (var prop in object) {
            result.push(prop);
        }
        return result;

}

joinThreeArrays([1,2,8],[1,3,4,7],[1,5,6,8]);
