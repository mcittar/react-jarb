#!/bin/bash

# if the first argument is "fresh" then it will remove any old folders and create a fresh set
if [ "$1" == "fresh" ]; then
  echo "Removing previously created folder"
  rm -r frontend
fi


# creates all the folders under the main folder frontend
echo "Creating folders"
declare -a arr=("frontend" "actions" "components" "reducers" "store" "util")

for i in "${arr[@]}"
do
  if [ ! -d "$i" ]; then
    echo "Creating "$i""

    if [ "$i" == "frontend" ]; then
      mkdir "$i"
    else
      mkdir frontend/"$i"
    fi
  else
    echo ""$i" exists"
  fi
done


echo "Creating files"
# move files from store location to correct director location

echo "Done."
