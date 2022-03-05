#!/bin/sh

cat words.txt | sed 's/[^a-zA-Z ]//g' | tr -s ' ' '\n' | sort | uniq -c | sort -nr | awk '{print $2, $1}'