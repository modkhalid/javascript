#include <iostream>
#include<cmath>
using namespace std;


int checkSemiprime(int num) 
{ 
    int cnt = 0; 
  
    for (int i = 2; cnt < 2 && i * i <= num; ++i) 
        while (num % i == 0) 
            num /= i, ++cnt; 
    if (num > 1) 
        ++cnt; 
  
   
    return cnt == 2; 
} 

int checkSq(int n){

    int squareRootN = sqrt(n);

    if(squareRootN*squareRootN == n) {
        return 1; 
    }
     else {
        return 0; 
     }
}




int main()
{
   int test ;
   cin>>test ;

   while(test--){
     
     int num , flag = 0 ;
     cin>>num ;

     int li = 6 , ui = num-6 ;

   while(li<=ui && num>=12){

     if(checkSq(li)==0 && checkSemiprime(li)==1 && checkSq(ui)==0 && checkSemiprime(ui)==1){
       
     	cout<<"YES"<<endl ;
     	flag=1;
     	break ;
      
     }
  
  else{
  	li++ ;
  	ui-- ;
  }
    
 }

	if(flag==0){
		cout<<"NO"<<endl ;
	}


}
    return 0; 

}
