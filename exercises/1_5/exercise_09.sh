#!/bin/bash

DIRECTORY=$1

if [ -d "$DIRECTORY" ]
 then
    FILES=`ls -l $DIRECTORY | wc -l`
    echo "This $DIRECTORY contains $FILES"
else
    echo "This $DIRECTORY is not a directory!"
fi

