//练习：打印2000~2100之间的所有闰年
for(var i=2000,sum=0;i<=2100;i++){
	if(i%4===0 && i%100!==0 || i%400===0){
		sum++;
		console.log(i);}
		if (sum===10){
			break;
		}
		console.log(sum);
	}
	
//练习：打印1~20能被3整除的数的乘积	
/*var num=1;
for(var i=1;i<=20;i++){
	if(i%3===0){
	num*=i;	}
	}
	console.log(num);*
