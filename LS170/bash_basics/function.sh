greeting () {
echo Hello $1
}

greeting 'Peter'


#Example2: passing in more than one argument to the function.

greeting () {
echo "Hello $1"
echo "Hello $2"
}

greeting 'Peter' 'Paul'

