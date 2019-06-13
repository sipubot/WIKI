# ubuntu

## enviroment.sh

- ssh 설치는 제외 
```bash
echo "update ubuntu"
echo "ufw install"
echo "ufw set"
echo "cargo install"
echo "git install"
echo "caddy install"
echo "set caddy"
echo "set rustc"
echo "set cargo"
echo "set git"

echo "make deploy folder"
echo "make server folder"
echo "set caddy"
echo "copy to caddyservice"
echo "init caddyservice"
echo "copy to deploy bash"
echo "bash start"
#echo "copy to serverservice"
#echo "init server"
```


## deploy.sh

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
