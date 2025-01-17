function typeCheck(object) {
  if (!object) throw new Error("You must specify an object");

  if (typeof object !== "object")
    throw new Error("You arguments must be an object");
  //   if (Object.keys(a).length > 0) throw new Error("Your object values is empty");

  return new Proxy(
    { call },
    {
      set(xTar, yKey, zVal) {
        if (!object.hasOwnProperty(yKey)) {
          throw new Error("The property you set is not allowed in this type");
        }

        const expected = object[yKey];
        if (typeof zVal !== expected) {
          throw new Error("Type mismatch");
        }

        xTar[yKey] = zVal;
        return true;
      },
      get(xTar, yKey){
            if(object.hasOwnProperty(yKey)) return xTar[ykey]
            else throw new Error("Empty or noo property defined")
      },
    }
  );
 
}
 