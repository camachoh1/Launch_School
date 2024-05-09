=begin 
What is the default return value to_s when invoked on an object? Where could you go to find out if you want to be sure?

to_s will return the class name of the calling object and an ecoding  of the object id. 

We can see the return value of to_s by simply printing the object using puts which automatically calls to_s on the object.

=end