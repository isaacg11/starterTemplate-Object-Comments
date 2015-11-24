Stamplay.init('sdkcommentobject');

function createObjectComment(){
	var newComment = document.getElementById('comment').value;
	
	var objectInstance = new Stamplay.Cobject('store').Model;
	objectInstance.fetch('5654afc6b3039e5f75c0d0e9').then(function(){
    	return objectInstance.comment(newComment).then(function(){
    		alert('Comment created!');
    	});
    });
}

