/* eslint no-unused-vars: ["error", { "varsIgnorePattern": "[mergeSort, modifiedMergeSort]" }] */

function mergeSort(_arr) {
  const arr = [].slice.call(_arr);
  function merge(left, right) {
    const result = [];
    let iL = 0;
    let iR = 0;
    const lenL = left.length;
    const lenR = right.length;
    while (iL < lenL && iR < lenR) {
      if (left[iL] < right[iR]) {
        result.push(left[iL]);
        iL += 1;
      } else {
        result.push(right[iR]);
        iR += 1;
      }
    }
    while (iL < lenL) {
      result.push(left[iL]);
      iL += 1;
    }
    while (iR < lenR) {
      result.push(right[iR]);
      iR += 1;
    }
    return result;
  }
  return (function cut(_array) {
    const len = _array.length;
    if (len === 1) {
      return _array;
    }
    const mid = Math.floor(len / 2);
    const left = _array.slice(0, mid);
    const right = _array.slice(mid, len);
    return merge(cut(left), cut(right));
  }(arr));
}

function modifiedMergeSort(_arr) {
  const arr = [].slice.call(_arr);
  function merge(left, right) {
    const result = [];
    let iL = 0;
    let iR = 0;
    const lenL = left.length;
    const lenR = right.length;
    while (iL < lenL && iR < lenR) {
      if (left[iL] < right[iR]) {
        result.push(left[iL]);
        iL += 1;
      } else {
        result.push(right[iR]);
        iR += 1;
      }
    }
    while (iL < lenL) {
      result.push(left[iL]);
      iL += 1;
    }
    while (iR < lenR) {
      result.push(right[iR]);
      iR += 1;
    }
    return result;
  }
  return (function cut(_array) {
    const len = _array.length;
    if (len === 1) {
      return _array;
    }

    const work = [];
    for (let i = 0; i < len; i += 1) {
      work.push([_array[i]]);
    }
    work.push([]);

    for (let lim = len; lim > 1; lim = Math.floor((lim + 1) / 2)) {
      let j = 0;
      let k = 0;
      for (j = 0, k = 0; k < lim; j += 1, k += 2) {
        work[j] = merge(work[k], work[k + 1]);
      }
      work[j] = [];
    }
    return work[0];
  }(arr));
}
