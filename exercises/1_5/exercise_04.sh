#!/bin/bash

# Vou ter muito sucesso na programação!

FILE="/cesinha/unix_tests/file_path_script.sh"

if [ -e $FILE ]
	then
		echo "The path $FILE works!"
fi

if [ -w $FILE ]
	then
		echo "You have permission to edit $FILE"
	else
		echo "You do not have permission to edit $FILE"
fi
