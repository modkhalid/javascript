#include <stdio.h>

int main()
{
	int t;
	scanf("%d",&t);
	for (int i = 0; i < t; ++i)
	{
		int n;
		scanf("%d",&n);
		int arr[n];
		int res[n];
		int temper=0;
		for (int j = 0; j < n; ++j)
		{
			scanf("%d",&arr[j]);
			res[j]=temper+arr[j];
			temper=res[j];
		}
		int count=1;
		int day=0;
		while(count<n){
			day++;
			// if(count<=n)
			count+=res[count-1];
		}

		printf("%d\n", day);
	}
	return 0;
}
