git config --global http.sslVerify "false" 
git init
git add .
set /p m=Update contest
git commit -m %m%
git remote add origin git@github.com:rushbbbbb/rushbbbbb.github.io.git
git pull origin master
pause