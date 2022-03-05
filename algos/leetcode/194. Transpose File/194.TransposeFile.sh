#!/bin/sh

cat file.txt | tr ' ' '\n' | sed 's/[^a-zA-Z0-9]//g' | tr '\n' ' ' | sed 's/^ *//g' | sed 's/ *$//g' | tr ' ' '\n' | sort | uniq -c | sort -nr | awk '{print $2, $1}'