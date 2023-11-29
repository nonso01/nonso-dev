#!/bin/bash
## echo "writing automated test"

if [[ $1 = "s" ]]
then
	npm run dev

elif [[ $1 = "f" ]]
then 
	npx prettier . --write

elif [[ $1 = "c" ]]
then
	npx prettier . --check

elif [[ $1 = "style" ]]
then
	sass --style=compressed -w src/scss:dist

else
	echo "./auto [option1] [option2]"
	echo "
	s = start server

	f = format code

	c = check code quality

	style = compile sass to css "

fi
