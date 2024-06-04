# 其他

### any类型污染问题
```ts
let s:any = 'string';
let n:number;
n = s; // 不报错
n * 123 // 不报错
n.toFixed() // 不报错
```
在上方代码中,`any`类型的`s`污染`number`类型的`n`
```ts
let s1:unknown = 'string';
let n1:number;
n1 = s1; // 不能将类型“unknown”分配给类型“number”
```
可以将`unknow`视为为严格版`any`,它不会类型污染