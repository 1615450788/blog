let plan={
    uniqueInOrder2(_arg){
        let arr=[];
        let result=[];
        if(_arg instanceof Array){
            arr=_arg
        }else if(typeof _arg === 'string'){
            arr=_arg.split('')
        }
        for(let item of arr){
            let last=result.pop();
            if(!last){
                result.push(item)
            }else{
                result.push(last)
            }
            if(last&&last!==item){
                result.push(item)
            }
        }
        console.log(result);
        return result
    },
    uniqueInOrder(_arg){
        let str='';
        let arr=[];
        let result=[];
        if(_arg instanceof Array){
            str=_arg.join('')
        }else if(typeof _arg === 'string'){
            str=_arg
        }
        if(str&&typeof str==='string'){
            arr = str.match(/(\d|[a-zA-Z])\1+/g);
            for(let item of arr){
                str = str.replace(item,item.substring(0,1));
            }
            result=str.split('')
        }
        console.log(result);
        return result
    }
};
console.log('---------play one---------');
plan.uniqueInOrder2('AAAABBBCCDAABBB')// ['A', 'B', 'C', 'D', 'A', 'B']
plan.uniqueInOrder2('ABBCcAD') // ['A', 'B', 'C', 'c', 'A', 'D']
plan.uniqueInOrder2([1,2,2,3,3]) // [1,2,3]
plan.uniqueInOrder2([1,2,3]) // [1,2,3]

console.log('---------play two---------');
plan.uniqueInOrder2('AAAABBBCCDAABBB')// ['A', 'B', 'C', 'D', 'A', 'B']
plan.uniqueInOrder2('ABBCcAD') // ['A', 'B', 'C', 'c', 'A', 'D']
plan.uniqueInOrder2([1,2,2,3,3]) // [1,2,3]
plan.uniqueInOrder2([1,2,3]) // [1,2,3]