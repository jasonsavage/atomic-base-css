# atomic-base-css | molecules

http://www.smashingmagazine.com/2013/08/02/other-interface-atomic-design-sass/

As I mentioned earlier, sometimes we need one-off structures, such as a banner or navigation element or footer, 
that we don’t intend to replicate. This is where we can combine multiple quarks and atoms, without interfering 
with any of our global styles.

A molecule can take advantage of an atom for layout (such as the heading-group molecule, which might manipulate the 
styles of the heading quark, which lists the styles for h1, h2 etc.). But then, within this molecule, we can extend, 
modify and combine other styles and modules.

So, while atoms and quarks define rigid and clear rules for the system overall, and utilities provide the outlining 
structural styles necessary to keep things tidy, the molecules are where the design can be more flexible and extend 
styles out from those central tenets of the system.

As you can see, quarks, atoms and molecules break up those monster Sass files that I mentioned earlier and make code 
faster to read and easier to maintain in the long run.