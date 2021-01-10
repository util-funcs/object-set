export default function set(obj: Record<string, any> = {}, path: string, value: any) {
  const [key, ...keys] = path.split('.');
  if (isPrototypePolluted(key))
    return;
  const pointer = obj[key] || {};
  obj[key] =
    keys.length < 1
      ? value
      : set(pointer.toString() === '[object Object]' || Array.isArray(pointer) ? pointer : {}, keys.join('.'), value);
  return obj;
}

function isPrototypePolluted(key: any) {
  const blackLists: any = ['__proto__', 'constructor', 'prototype'];
  return blackLists.includes(key);
}