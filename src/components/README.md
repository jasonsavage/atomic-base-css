# atomic-base-css | components

http://www.smashingmagazine.com/2013/08/02/other-interface-atomic-design-sass/

Now we need to start thinking about the relationships between these quarks, and so we start to introduce 
aspects of BEM and OOCSS. In this system, I've called these modules "atoms" - universal abstractions, 
such as the media or flag object. For example, we might include a partial that sets the default style 
for buttons, so that we can plan for those styles to be extended and built upon.

The styles in an atom should almost never be attached to an HTML element itself; we might not be able to guarantee 
what the markup will look like in the future. Specifying a class instead is always safer.

In this way, atoms will save us from writing hundreds of lines of code and keep things relatively abstract. 
Just as Brad suggests, this concept is powerful because atoms can be combined to form more complicated structures.
