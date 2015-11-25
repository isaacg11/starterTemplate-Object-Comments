Stamplay.init('[yourAppId]');

function createObjectComment(){
	var newComment = document.getElementById('comment').value;
	
	var objectInstance = new Stamplay.Cobject('objectModel').Model;
	objectInstance.fetch('id').then(function(){
    	return objectInstance.comment(newComment).then(function(){
    		alert('Comment created!');
    	});
    });
}

