#!/bin/bash
git init
git add --all
git commit -m "first commit"
git remote add origin https://github.com/Tinker-Labs-L3C/StaticSite.git
git push -u origin master
echo "Done!"
exit
