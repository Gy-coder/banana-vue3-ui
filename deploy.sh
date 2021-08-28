rm -r dist
npm run build
cd dist
git init
git add .
git commit -m 'update'
git remote add origin git@github.com:Gy-coder/banana-vue3-ui-website.git
git push -f origin master
cd ..