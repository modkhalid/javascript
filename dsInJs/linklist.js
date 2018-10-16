Node =function(data){
	this.data=data;
	this.next=null;
}
heap=function(node){
	this.left=node;
}
LinkedList=function () {
	this.head=null;
	this.size=0;
	this.tail=null;

	this.addFirst=function(data){
		nn=new Node(data)
		if(this.head==null){
			this.head=nn;
			this.tail=nn;
			this.size++;
		}else{
			temp=this.head;
			this.head=nn;
			this.head.next=temp;
			this.size++;
		}
	}
	this.addLast=function(data){
		nn=new Node(data);
		if(this.head==null){
			this.head=nn;
			this.tail=nn;
			this.size++;
		}else{
			this.tail.next=nn;
			this.tail=nn;
			this.size++;
		}
	}
	this.removeFirst=function(){
		if(this.head==null){
			return -1;
		}
		temp=this.head.data;
		// console.log(temp);
		if(this.size==1){
			this.head=null;
			// return temp.data;
		}else{
			this.head=this.head.next;
		
		}
		this.size--;
		return temp;
		
	}

	this.removeLast=function(){
		if(this.head==null){
			return -1;
		}
		res=this.head.data;
		// console.log(temp);
		if(this.size==1){
			this.head=null;
			// return temp.data;
			this.size--;
			return res;
		}
		temp=this.head;
		while(temp.next!=this.tail){
			temp=temp.next;
		}
		res=temp.next.data;
		this.tail=temp;
		this.tail.next=null;
		
		
		this.size--;
		return res;
	}
	this.display=function(){
		x=document.getElementById('para');x.innerHTML="";
		if(this.head==null){
			// console.log("LinkedList is empty");
			x.innerHTML="LinkedList is empty";
		}else{
			// console.log("........\n");
			temp=this.head;
			while(temp!=null){
				// console.log(temp.data+" --> ");
				x.innerHTML+=temp.data+" >> ";
				temp=temp.next;
			}
		}
	}

	this.getNodeAt=function(idx){
		if(idx<0 ||idx>=this.size){
			console.log("randi rona mat kr index shi se dall");
			return -1;
		}else{
			temp=this.head;
			for (var i = 0; i < idx; i++) {
				temp=temp.next;
			}
			return temp;
		}

	}
	this.addAt=function(idx,data){
		if(idx<0 ||idx>this.size){
			console.log("randi rona mat kr index shi se dall");
			return -1;
		}else{
			if(idx==this.size){
				this.addLast(data);
			}else if(idx==0){
				this.addFirst(data);
			}else{
				temp=this.getNodeAt(idx-1);
				nn=new Node(data);
				nn.next=temp.next;
				temp.next=nn;
				this.size++;
			}
		}
	}
	this.removeAt=function(idx){
		if(idx<0 ||idx>=this.size){
			console.log("randi rona mat kr index shi se dall");
			return -1;
		}else{
			if(idx==0){
				return this.removeFirst();
			}else if(idx==this.size-1){
				return this.removeLast();
			}else{
				temp=this.getNodeAt(idx-1);
				res=temp.next.data;
				temp.next=temp.next.next;
				// temp.next=nn;
				this.size--;
				return res;
			}
		}
	}
	this.reverseLLPI=function(){
		curr=this.head;
		prev=null;
		temp=null;
		while(curr){
			temp=curr.next;
			curr.next=prev;
			prev=curr;
			curr=temp;
		}
		temp=this.head;
		this.head=this.tail;
		this.tail=temp;
	}
	this.reverseLLDI=function(){
		for (var i = 0; i < this.size/2; i++) {
			x=this.getNodeAt(this.size-1-i).data;
			this.getNodeAt(this.size-1-i).data=this.getNodeAt(i).data;
			this.getNodeAt(i).data=x;
		}
	}

	this.reverseLLPR=function(){
		fun(this.head,this.head.next);
		temp=this.head;
		this.head=this.tail;
		this.tail=temp;
		this.tail.next=null;

	}
	// i=0;
	function fun(left,right){
		if(right==null){
			return;
		}
		console.log(i);
		// i++;
		fun(left.next,right.next);
		right.next=left;
	}

	this.reverseLLDR=function(){
		heapmover=new heap(this.head);
		drhelper(heapmover,this.head,0,this.size);
		// console.log(heapmover.left.data);
	}
	// count=0;

	function drhelper(heapmover,right,count,size){
		if(right==null){
			return ;
		}
		
		drhelper(heapmover,right.next,count+1,size);
		// console.log(count+" "+size/2);
		if(count>=size/2){
			var x1=heapmover.left.data;
			heapmover.left.data=right.data;
			right.data=x1;
			heapmover.left=heapmover.left.next;
			// console.log("mof")
		}

	}
	// fun2=function(a,b){
	// 	console.log(a+" + "+b);
	// }
}

try{
	console.log(a/0);
}catch(e){
	console.log("bhai a to drfine krdo");
}

ll=new LinkedList();
ll.addFirst(12);
ll.addFirst(11);
ll.addFirst(10);
ll.addFirst(9);
ll.addFirst(8);
ll.addFirst(7);
// ll.display()
// ll.reverseLLDI();
