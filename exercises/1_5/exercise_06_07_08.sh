#!/bin/bash

FILE=$1

if [ -f $FILE ]
then
	echo "$FILE is a common file"
elif [ -d $FILE ]
then
	echo "$FILE is a directory"
else
	echo "$FILE is something weird... do not click."
fi

ls -l $FILE
