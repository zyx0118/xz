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
