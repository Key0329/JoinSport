#!/usr/bin/env sh

# abort on errors
set -e

# build
npm run build

# navigate into the build output directory
cd dist

# place .nojekyll to bypass Jekyll processing
echo > .nojekyll

# if you are deploying to a custom domain
# echo 'www.example.com' > CNAME

git init
git checkout -B main
git add -A
git commit -m 'deploy'

# if you are deploying to https://key0329.github.io
# git push -f git@github.com:key0329/key0329.github.io.git main

# if you are deploying to https://key0329.github.io/<REPO>
git push -f https://github.com/Key0329/JoinSport.git main:gh-pages


cd -