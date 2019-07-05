var arr = [4, -3, 4, -3, 4, 3, 3, 1, -4, -4, 4, -3, 1, -4, 4, 4, 3, 3, -4, -4, 4, -4, 4, 4, 3, -1, 1, -4, 3, -3, 4, 3, 4, -4, 3, -4, 4, 3, 4, 0, 4, 1, -3, -4, 3, -4, 4, 4, 0, 0, 1, 4, 1, -4, 2, -4, 3, 3, -4, -4, 3, -4, 4, -4, 4, -4, 4, 4, -4, -4, 1, -1, 2, -4, 1, -4, 0, 0, -4, -3, 4];

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
						var obj = {
							middle: i,
							last: j,
							total: chinese[4+arr[x+i+j-1]],
							sky: chinese[4+arr[x]],
							human: chinese[4+arr[x+i-1]],
							floor: chinese[4+arr[i+j-1]],
							out: chinese[4+arr[j]],
							score:arr[x+i+j-1]+arr[x]+arr[x+i-1]+arr[i+j-1]+arr[j]
				}
				newArr.push(obj)

			}
		} 

}


var appen = function() {
	$("#table").empty()
	$( "<tr><th>中字筆畫</th><th>尾字筆畫</th><th>天格</th><th>人格</th><th>地格</th><th>外格</th><th>總格</th></tr>" ).appendTo( "#table" );
	for (var i = 0; i < newArr.length; i++) {
		$( "<tr><td>"+ newArr[i].middle+"</td><td>"+newArr[i].last+"</td><td>"+newArr[i].sky+"</td><td>"+newArr[i].human+"</td><td>"+newArr[i].floor+"</td><td>"+newArr[i].out+"</td><td>"+newArr[i].total+"</td></tr>" ).appendTo( "#table" );
	}
};


$("#check").click(function() {
	var first = parseInt($("#first").val());
  	genComb(first)
	newArr.sort( compare );
	appen();

});









