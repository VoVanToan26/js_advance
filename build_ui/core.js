export default function html([first,...string],...values){
    return values.reduce(
        //acc biến tích trữ 
        (acc,cur)=>acc.concac(cur, string.shift()),
        [first]
    )
    .join('')
    
}