#!/bin/bash

# if the first argument is "fresh" then it will remove any old folders and create a fresh set
if [ "$1" == "fresh" ]; then
  echo "Removing previously created folder..."
  rm -r frontend
fi

echo "Creating folders..."
mkdir frontend
mkdir frontend/actions
mkdir frontend/components
mkdir frontend/reducers
mkdir frontend/store
mkdir frontend/util

echo "Creating files..."
# move files from store location to correct director location

ls -la

echo "Done."