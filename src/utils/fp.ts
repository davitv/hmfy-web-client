
export const clone = <T>(data: T): T => JSON.parse(JSON.stringify(data));

export const merge = <T>(a: T, b: any): T => Object.assign({}, clone(a), clone(b));

export const dictFromTuples = (tuples: [string, string | string[]][]): {[key: string]: string | string[]} => {
  return tuples.reduce((obj, [k, v]) => merge(obj, {[k]: v}), {} as {[key: string]: string | string[]});
};

export const mapListsByKey = (a1: {[key: string]: any}[], a2: {[key: string]: any}[], key: string) => {
  // Merges items from a2 to a1 by specified key.
  // Returns array of length a1.
  return a1.map((item1) => merge(
    item1,
    a2.filter(item2 => item1[key] === item2[key])
      .reduce((_, c) => c, {})
  ));
};

export const head = <T>(l: T[]): T => l[0];

export const range = (start: number, end: number) => {
  const arr: number[] = [];
  for (let i = start, j = end; i < j; i++) {
    arr.push(i);
  }
  return arr;
}

export const groupBy = <T>(arr: T[], func: (a: T, b: T) => boolean): T[][] => {
  const ret: T[][] = [];
  for (const a of arr) {
    let shouldPush = true;
    for (const aArr of ret) {
      if (aArr.filter(al => func(al, a)).length > 0) {
        aArr.push(a)
        shouldPush = false;
      }
    }
    if (shouldPush) {
      ret.push([a]);
    }
  }

  return ret;
}

export const repositionListItem = <T>(source: number, destination: number, list: T[]): T[] => {
  const newList = clone(list);
  const [removedElem] = newList.splice(source, 1);
  newList.splice(destination, 0, removedElem);
  return newList;
}

export const insertListItem = <T>(item: T, list: T[], index: number) => {
  const clonedList = clone(list);
  clonedList.splice(index, 0, clone(item));
  return clonedList;
}

export const mergeListsByKey = <T extends {[key: string]: any}>(key: string, ax: T[], bx: T[]): T[] => (
  ax.map(
    a => merge(a, bx.filter(b => b[key] === a[key]).reduce((_, c) => c, {}))
  ).concat(
    bx.filter(b => (
      ax.map(a => a.id)
    ).indexOf(b.id) === -1)
  )
);

export const contains = <T>(list: T[], elem: T): boolean => list.indexOf(elem) !== -1;
export const flatten = <T>(list: T[][]): T[] => [].concat(...list as any);
