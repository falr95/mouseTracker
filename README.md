# mouseTracker
native js frontend module for zooming images or making mouse-movement based interactions. Because of been written in native, it does not
need any other lib or framework to work. Besides makes it easy to integrate in such angular, react or jquery projects.

There is an example of how it works in index.html

# USAGE
it's simple. Just instanciate MouseTracker object and then call setWatcher method. setWatcher applies callbacks which will be called once the user moves the cursor over the elements matched in the query. By default, setWatcher zooms-in and moves element based on mouse position over element itself.

   setWatcher(querySelector, [,enterCallback , [,movementCallback, [, zoomRatio)  
   
   querySelector:String:
   this parameter is for get MouseTracker looking up in which elements it will set the watcher.
   String syntax is like jquery's selectors, for example: "img", ".example", ".parent .child", would work.
   
   enterCallback:Function (optional): 
   enterCallback is an optional callback that would be called in case of user gets mouse over the element
  
   movementCallback:Function (optional):
   is an optional callback that would be called every time the user changes mouse position being over the element.
   
   zoomRatio:Number (optional):
   zoomRatio is an optional parameter that represents the amount of zoom that will be applied to the element, default is 2 (double size). it only works if
   enter and movement callbacks wasn't passed as parameter.

      
      ways in which setWatcher can be called:
      setWatcher(querySelector, enterCallback , movementCallback, zoomRatio);
      setWatcher(querySelector, enterCallback , movementCallback);
      setWatcher(querySelector, zoomRatio);
      setWatcher(querySelector);
      
     
     if you want to stop watching an element you only has to call unsetWatcher() and pass de same query you did to setWatcher(). 

# WORKING ON:
   - making more flexible calls.
   - adding a zoom zone in which you can move mouse without need of do it over the element.
   - deleting watchers no matter what query had been called.
