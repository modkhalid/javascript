#include <iostream>
using namespace std;






int main()
{
	int t;
	cin>>t;
	for (int i = 0; i < t; ++i)
	{
		int n;
		cin>>n;
		int arr[n];

		for (int j = 0; j < n; ++j)
		{
			cin>>arr[j];
		}
		int count=1;
		int day=0;
		while(count<n){
			day++;
			int sum=0;
			for (int j = 0; j < count; ++j)
			{
				sum+=arr[j];
			}
			count+=sum;



		}

		cout<<day<<endl;
	}
	return 0;
}