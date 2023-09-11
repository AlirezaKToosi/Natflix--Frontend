interface DynamicObject {
  [key: string]: string | number | boolean;
}

export function generateFields(fields: Array<any>, data: any) {
  let result: DynamicObject = {};

  fields.forEach((item) => {
    const key: string = item.key;

    result[key] = data[key];
  });

  return result;
}
