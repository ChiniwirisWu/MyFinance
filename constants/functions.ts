const HASH_LENGTH = 10;
type Key = `${string}-${string}-${number}`;


export function generateKey(id:number, alias:string) : Key{
  const hash:string = Math.random().toString(36).substring(2, 2 + HASH_LENGTH); 
  return `${alias}-${hash}-${id}`;
}

export function generateRandomInteger(min_value?:number, max_value?:number){
  const MIN_VALUE = (min_value) ? min_value : 1;
  const MAX_VALUE = (max_value) ? max_value : 100000;
  return Math.floor(Math.random() * (MAX_VALUE - MIN_VALUE)) + MIN_VALUE;
}

