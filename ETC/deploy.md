#간단히 틀만 잡아둠.

```bash
echo "path move"

cd ~/users/deploy

echo "git pull"
git pull

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



```
