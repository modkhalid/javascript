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

		for (int j = 0; j < n; ++j)
		{
			scanf("%d",&arr[n]);
		}
		int count=1;
		int day=0;
		while(count<n){
			day++;
			int sum=0;
			for (int j = 0; j < count; ++j)
			{
				sum+=arr[j];
				if(count+sum>=n){
					break;
				}
			}
			count+=sum;
		}

		printf("%d\n", day);
	}
	return 0;
}