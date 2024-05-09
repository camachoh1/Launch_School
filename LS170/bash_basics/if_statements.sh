#Example1: output a string if its longer than 0

string='Hello'

if [[ -n $string ]]
then
  echo $string
fi

#Example2: Compare two integers and output a string if they are equal.

integer_1=10
integer_2=10

if [[ $integer_1 -eq $integer_2 ]]
then
  echo $integer_1 and $integer_2 are the same!
fi

#Example3: Output 'File"exist if the file `hello_world.sh` exists.

if [[ -e ./hello_world.sh ]]
then
  echo 'File exists'
fi

#Testing multiple conditions

#Example1: nested `if` statement

integer=4

if [[ $integer -lt 10 ]]
then
  echo $integer is less than 10

  if [[ $integer -lt 5 ]]
  then
    echo $integer is also less than 5
  fi
fi

#Example2: two conditional branches with `if` and `else`

integer=15

if [[ $integer -lt 10 ]]
then
  echo $integer is less than 10
else
  echo $integer is not less than 10
fi

#Example3: three conditional brances with `if`, `elif`, and `else`

integer=15

if [[ $integer -lt 10 ]]
then
  echo $integer is less than 10
elif [[ $integer -gt 20 ]]
then
  echo $integer is greater than 20
else
  echo $integer is between 10 and 20
fi


#Example4: Matching two conditions using `&&`

integer=15

if [[ $integer -gt 10 ]] && [[ $integer -lt 20 ]]
then
  echo $integer is between 10 and 20
fi

#Example5: matching one of two conditions using `||`

integer=12

if [ $integer -lt 5 ] || [ $integer -gt 10 ]
then
  echo $integer is less than 5 or greater than 10.
fi

#Example6: negating conditions using `!`

integer=8

if ! ([ $integer -lt 5 ] || [ $integer -gt 10 ])
then
  echo $integer is between 5 and 10.
fi

