# mouseTracker
native js frontend module, for zooming images or making mouse-movement based interactions. Because of been written in native, it does not
need any other lib or framework for work. and makes it easy to integrate in such angular, react or jquery project.

there is an example of how it works in index.html

USAGE
   it's simple, only instanciate MouseTracker object an then call setWatcher method. setWatcher applies callbacks which will be called once
   the user moves the mouse over the elements matched in the query.
   
   by default setWatcher zooms-in and moves element based on mouse position over element itself
    setWatcher(querySelector, [,enterCallback , [,movementCallback, [, zoomRatio)
      querySelector:String:
        this parameter is for telling MouseTracker in which elements it will work
      enterCallback:Function (optional): 
        enterCallback is an optional callback that would be called in case of user moves mouse on the element
      movementCallback:Function (optional):
        movementCallback is an optional callback that would be called every time the user changes mouse position being on the element.
      zoomRatio:Number (optional):
        zoomRatio is an optional parameter that represent the amount of zoom that will be applied to the element. it only works if
        enter and movement callbacks wasnt passed as parameter.

     ways in which setWatcher can be called:
      setWatcher(querySelector, enterCallback , movementCallback, zoomRatio);
      setWatcher(querySelector, enterCallback , movementCallback);
      setWatcher(querySelector, zoomRatio);
      setWatcher(querySelector);
      
     
     if you want to stop watching an element you only has to call unsetWatcher() and pass de same query you did to setWatcher(). 
