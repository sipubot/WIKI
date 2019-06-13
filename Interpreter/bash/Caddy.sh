#curl install
apt install curl

#download caddy
curl https://getcaddy.com | bash -s personal hook.service,http.authz,http.cors,http.datadog,http.expires,http.forwardproxy,http.nobots,http.proxyprotocol

#extract
tar -xzf caddy*.tar.gz caddy

#move bin to permission folder
mv ./caddy /usr/local/bin
cd ~/usr/local/bin

#init caddy
caddy -host sipu.iptime.org

#configuration 
#need to cp Caddyfile 
cp ~/usr/download/Caddfile  ~/usr/setting/Caddyfile
caddy -conf ~/usr/setting/Caddyfile

#Exampl Caddyfile
#
#
#proxy 127.0.0.1:1234 sipu.iptime.org
#proxy localhost(내부 서버 ip)  hostname(외부 dns)
