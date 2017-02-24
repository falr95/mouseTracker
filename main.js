function mouseTracker(){
	var queries = [];
	this.setWatcher = function(){
		if(arguments.length >= 1){
			if(typeof arguments[0] == "string"){
				var temp = {}
				var querySelector, enterCallback, movementCallback, zoomRatio;
				querySelector = arguments[0];
				overridingWatchersData = {};
				searchQuerys.call(overridingWatchersData, querySelector)
				if(overridingWatchersData.matchedQueries.length > 0){
					queries.splice(overridingWatchersData.queryIndex,1)
				}
				temp.query = querySelector;
				switch (arguments.length){
					case 2:
						if(typeof arguments[1] == "number"){
							zoomRatio = arguments[1];
						}else{
							throw "Error: in case of passing 2 parameters, first one must be Query Selector (STRING) and the second one must be ZoomRatio (NUMBER)"
						}
					break;
					case 3:
						if(typeof arguments[1] != "function" && typeof arguments[2] != "function"){
							enterCallback = arguments[1];
							movementCallback = arguments[2];
						}else{
							throw "Error: in case of passing 3 parameters, first one must be Query Selector (STRING), second one must be enterCallback (FUNCTION), and third one must be movementCallback (FUNCTION)"
						}
					break;
					case 4:
						if(typeof arguments[1] != "function" && typeof arguments[2] != "function" && typeof arguments[3] != "number"){
							enterCallback = arguments[1];
							movementCallback = arguments[2];
							zoomRatio = arguments[3];
						}else{
							throw "Error: in case of 4 parameters, first one must be Query Selector (STRING), second one must be enterCallback (FUNCTION), third one must be movementCallback (FUNCTION), and fourth one must be zoom ratio (NUMBER)"
						}
					break;
				}
				zoomRatio = zoomRatio || 2;
				enterCallback = enterCallback || function(){
					this.width = this.width * zoomRatio;
					this.height = this.height * zoomRatio;
				}
				movementCallback = movementCallback || function(x,y){
					this.parentElement.scrollLeft = x;
					this.parentElement.scrollTop = y;
				}
				var enter = function(element){
						enterCallback.call(element)
						var move = function(event){
							movementCallback.call(element, event.x, event.y)
						}
						temp.move = move;
						element.onmousemove = move
					}
				temp.enter = enter;
				var leave = function(element){
						for(key in element.originals){
							element[key] = element.originals[key];
						}
					}
				temp.leave = leave;
				var elements = document.querySelectorAll(querySelector);
				elements.forEach(function(element){
					element.originals = {
						width:element.width,
						height:element.height,
						x:element.x,
						y:element.y 
					}
					
					element.onmouseenter =  enter.bind({},element)
					
					element.onmouseleave = leave.bind({},element)
				})
				queries.push(temp)
			}else{
				throw "Error: First parameter is always 'Query Selector', and it always must be STRING"
			}
		}else{
			throw "Error: setWatcher should be called with 1,2,3 or 4 parameters"
		}
	}
	this.unsetWatcher = function(query){
		existingQueriesSearchResult = {}
		searchQuerys.call(existingQueriesSearchResult,query);
		if(existingQueriesSearchResult.matchedQueries.length == 0){
			throw "Error: there is no watchers that match with the query you passed in"
		}else{
			var elements = document.querySelectorAll(query);
			console.log("es",elements);
			elements.forEach(function(element){
				console.log("e",element);
				console.log(element.onmouseenter);
				element.onmouseleave();
				element.onmouseenter = null;
				element.onmousemove = null;
				element.onmouseleave = null;
				console.log(element.onmouseenter);
			})
			typeof existingQueriesSearchResult.queryIndex == "number" ? queries.slice(existingQueriesSearchResult.queryIndex,1) : false;
		}
	}
	function searchQuerys(query){
		this.matchedQueries = queries.filter(function(q, index){
			if(q.query == query){
				this.queryIndex = index;
				return query;
			}
		});
		return this.matchedQueries;
	}
}

var mt = new mouseTracker();