@ECHO  OFF
CD %1
git add -A
git commit -m "Website updates."
git push origin master