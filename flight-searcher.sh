#!/bin/bash
#  Copyright (C) 2017 Juan Manuel Torres Palma <j.m.torrespalma@gmail.com>
#
#  This file is part of flight detective tool.
#
#  Flight detective is free software; you can redistribute it and/or modify
#  it under the terms of the GNU General Public License as published by
#  the Free Software Foundation; either version 3, or (at your option)
#  any later version.
#
#  Flight detective is distributed in the hope that it will be useful,
#  but WITHOUT ANY WARRANTY; without even the implied warranty of
#  MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
#  GNU General Public License for more details.
#
#  You should have received a copy of the GNU General Public License
#  along with flight detective.  If not, see <http://www.gnu.org/licenses/>.

WEBOUT_F="web-raw.txt"
JS_S="js/read-web.js"

# Download web results and exit if failing
phantomjs "$JS_S" > "$WEBOUT_F"
[ "$?" -ne 0 ] && echo "Script failed" && rm "$WEBOUT_F"

