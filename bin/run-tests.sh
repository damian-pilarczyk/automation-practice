#!/usr/bin/env bash
# $1 browser
# $2 $TEST_TYPE
# $3 $MWEB_SECTIONS_TO_TEST

npm install
export CYPRESS_active_test_categories=$2
export CYPRESS_active_sections=$3
./node_modules/.bin/cypress run --browser $1 --headless
