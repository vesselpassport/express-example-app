#!/bin/bash

THIS_DIR="$( cd -- "$(dirname "$0")" >/dev/null 2>&1 ; pwd -P )"

trap terminate SIGINT
terminate(){
  rm $THIS_DIR/temp.log
  pkill -SIGINT -P $$
  exit
}

touch $THIS_DIR/temp.log

cd $THIS_DIR/client && npm install && npm run start >> $THIS_DIR/temp.log &
cd $THIS_DIR/server && npm install && npm run start >> $THIS_DIR/temp.log &
tail -n 20 -f $THIS_DIR/temp.log

wait
