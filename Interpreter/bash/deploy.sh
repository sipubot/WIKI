echo "path move"

cd ~/users/deploy

echo "git pull"
FILE=~/deploy/.gitsetting
if [ -f "$FILE" ]; then
  git pull origin master
else
  git clone https://github.com/YOUR-USERNAME/YOUR-REPOSITORY
fi

echo "build"
cargo build --release

echo "copy to real"

cp ~/deploy/taget/release aaa   ~/.local/bin
cd ~/.local/server

echo "stop service"

sudo systemctl stop server

echo "changing"

rm old_file
rename file old_file filename
rename new_file file filename

echo "start service"

sudo systemctl start server

