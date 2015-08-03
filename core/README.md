# atomic-base-css | core (formerly quarks)

http://www.smashingmagazine.com/2013/08/02/other-interface-atomic-design-sass/

We need to define the basic building blocks of the website, including paragraphs, tables, images and links. 
Be careful here: We need to slowly build up to the complexity that is required so that we don't step on our own toes later. 
At this stage, we should still be thinking globally and not styling for any particular section of the design.
Therefore, this next directory should focus only on default HTML elements. I've started to call these components quarks -
classless objects that, within the files themselves, contain nothing more than a few elements.

Note that these files contain only the default styles for these elements, not modified elements. For example, if we have a table 
that looks and works entirely differently from the default tables used throughout the website, it would not be a quark.

This system might look like overkill at this point. Why do we need a separate partial to style almost every default element individually? 
My argument is that if we were to combine all of these small pieces together, we would make the files less readable, especially on a large 
website. Having a substantial number of partials is fine, as long as they're easy to find and organized properly.

Quarks are also helpful when we set up a style guide or an elements template page that lists the various default components of a project.
