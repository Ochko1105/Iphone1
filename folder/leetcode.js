let a =[1,2,3,4,5]
let b = [3,5,9,0]
let addtwonumber=(a,b)=>{
    sum=[0]
    
    for(i=0;i<=a.length;i++){
        
        
        for(j=0;j<b.length;j++){ 
            
             if(i===j){
               
                sum[i]=a[i]+(b[j])
                if(sum[i]>=10){
                    sum[i]%=10
                    b[j+1]++
                    
                    
                }     
          }
        }
       }
       return sum
    
}
console.log(addtwonumber(a,b))