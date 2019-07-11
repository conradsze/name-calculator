var arr = [4, -3, 4, -3, 4, 3, 3, 1, -4, -4, 4, -3, 1, -4, 4, 4, 3, 3, -4, -4, 4, -4, 4, 4, 3, -1, 1, -4, 3, -3, 4, 3, 4, -4, 3, -4, 4, 3, 4, 0, 4, 1, -3, -4, 3, -4, 4, 4, 0, 0, 1, 4, 1, -4, 2, -4, 3, 3, -4, -4, 3, -4, 4, -4, 4, -4, 4, 4, -4, -4, 1, -1, 2, -4, 1, -4, 0, 0, -4, -3, 4];

var elementArr = [1,1,2,2,3,3,4,4,5,5,1,1,2,2,3,3,4,4,5,5,1,1,2,2,3,3,4,4,5,5,1,1,2,2,3,3,4,4,5,5,1,1,2,2,3,3,4,4,5,5,1,1,2,2,3,3,4,4,5,5,1,1,2,2,3,3,4,4,5,5,1,1,2,2,3,3,4,4,5,5,1];

var elementChineseArr = ["木","木","火","火","土","土","金","金","水","水","木","木","火","火","土","土","金","金","水","水","木","木","火","火","土","土","金","金","水","水","木","木","火","火","土","土","金","金","水","水","木","木","火","火","土","土","金","金","水","水","木","木","火","火","土","土","金","金","水","水","木","木","火","火","土","土","金","金","水","水","木","木","火","火","土","土","金","金","水","水","木"];

var meaning =["very bad", "bad", "good inside bad", "bad more than good","no bad no good","good more than bad", "bad inside good","good","very good"];

var chinese =["大凶數", "凶數","", "凶多於吉數","吉凶難分","吉多於凶", "吉帶凶數", "吉數","大吉數"];

var newArr = [];

function compare( a, b ) {
  if ( a.score < b.score ){
    return 1;
  }
  if ( a.score > b.score ){
    return -1;
  }
  return 0;
};


var genComb = function(x){
	newArr = [];
		for (var i = arr.length - x - 1; i >= 1; i--) {
			for (var j = 1; x+i+j-1 < arr.length; j++) {
						var threeCode = ''+elementArr[x]+elementArr[x+i-1]+elementArr[i+j-1]
						var obj = {
							middle: i,
							last: j,
							total: chinese[4+arr[x+i+j-1]],
							sky: chinese[4+arr[x]],
							human: chinese[4+arr[x+i-1]],
							floor: chinese[4+arr[i+j-1]],
							out: chinese[4+arr[j]],
							threeScore: chinese[4+mp.get(threeCode)],
							three: ''+elementChineseArr[x]+elementChineseArr[x+i-1]+elementChineseArr[i+j-1],
							score:arr[x+i+j-1]+arr[x]+arr[x+i-1]+arr[i+j-1]+arr[j]+mp.get(threeCode)
				};

				if(
					human > (arr[x+i-1])||
					floor > (arr[i+j-1])||
					out > (arr[j])||
					total > (arr[x+i+j-1])||
					threeScore > (mp.get(threeCode))||
					middle < i ||
					last < j
					){
				}else{
					newArr.push(obj)
				}
				

			}
		} 

}


var appen = function() {
	$("#table").empty()
	$(tableHTML).appendTo( "#table" );
	for (var i = 0; i < newArr.length; i++) {
		$( "<tr><td><a href='http://tool.httpcn.com/KangXi/So.asp?tid=3&wd="+newArr[i].middle+"&cy=1'>"+ newArr[i].middle+"</a></td><td><a href='http://tool.httpcn.com/KangXi/So.asp?tid=3&wd="+newArr[i].last+"&cy=1'>"+newArr[i].last+"</td><td>"+newArr[i].sky+"</td><td>"+newArr[i].human+"</td><td>"+newArr[i].floor+"</td><td>"+newArr[i].out+"</td><td>"+newArr[i].total+"</td><td>"+newArr[i].three+"</td><td>"+newArr[i].threeScore+"</td></tr>" ).appendTo( "#table" );
	}
};

 var middle;
 var last;
 var human;
 var floor;
 var out;
 var total;
 var threeScore;
 var tableHTML = $("#table").html() 

$("#check").click(function() {
	var first = parseInt($("#first").val());
	middle = parseInt($("#middle").val());
 	last = parseInt($("#last").val());
	human = parseInt($("#human").val());
	floor = parseInt($("#floor").val());
	out = parseInt($("#out").val());
	total = parseInt($("#total").val());
	threeScore = parseInt($("#threeScore").val());
  	genComb(first)
	newArr.sort( compare );
	appen();

});

arrTwo = [4,4,4,-3,1,4,2,4,-1,-4,-4,2,3,1,-4,-4,-4,-1,-4,-4,4,-1,-1,4,4,4,4,4,-1,2,4,2,4,-4,-4,1,4,4,4,1,-4,-4,0,-4,-4,-1,-4,-4,-4,-4,2,2,-1,-4,-1,4,4,4,1,-4,2,4,4,4,-1,-1,-1,4,4,4,-1,-4,-4,0,-4,-1,-1,-1,-4,-1,-1,0,0,-4,-4,2,4,4,4,1,-4,-4,4,2,2,4,-1,3,4,2,4,4,4,-1,4,2,-4,-1,-4,-4,-4,2,2,2,-4,-1,-1,4,2,4,4,-4,-4,4,2];
// arrChineseTwo = ["大吉","大吉","大吉","凶多吉少","吉多于凶","大吉","中吉","大吉","凶多于吉","大凶","大凶","中吉","吉","吉多于凶","大凶","大凶","大凶","凶多于吉","大凶","大凶","大吉","凶多于吉","凶多于吉","大吉","大吉","大吉","大吉","大吉","凶多于吉","中吉","大吉","中吉","大吉","大凶","大凶","吉多于凶","大吉","大吉","大吉","吉多于凶","大凶","大凶","吉凶参半","大凶","大凶","凶多于吉","大凶","大凶","大凶","大凶","中吉","中吉","凶多于吉","大凶","凶多于吉","大吉","大吉","大吉","吉多于凶","大凶","中吉","大吉","大吉","大吉","凶多于吉","凶多于吉","凶多于吉","大吉","大吉","大吉","凶多于吉","大凶","大凶","吉凶参半","大凶","凶多于吉","凶多于吉","凶多于吉","大凶","凶多于吉","凶多于吉","吉凶参半","吉凶参半","大凶","大凶","中吉","大吉","大吉","大吉","吉多于凶","大凶","大凶","大吉","中吉","中吉","大吉","凶多于吉","吉","大吉","中吉","大吉","大吉","大吉","凶多于吉","大吉","中吉","大凶","凶多于吉","大凶","大凶","大凶","中吉","中吉","中吉","大凶","凶多于吉","凶多于吉","大吉","中吉","大吉","大吉","大凶","大凶","大吉","中吉"];
threeTale = []
for (var i = 5; i > 0; i--) {
	for (var j = 5; j > 0; j--) {
		for (var k = 5; k > 0; k--) {
				var key = ""+i+j+k
				var threeA =
					[key, arrTwo.pop()]
				;
				threeTale.push(threeA)
				}
		}
	}
const mp = new Map(threeTale);






