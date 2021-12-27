#!/usr/bin/env bash
# $1 browser
# $2 $active_test_categories
# $3 $active_sections

export active_test_categories=$2
export active_sections=$3
./node_modules/.bin/cypress run --browser $1 --headless --record --key b82bebff-25aa-4d0b-a90c-7b5c77a2fb27 --parallel
