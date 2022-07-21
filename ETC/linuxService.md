# 리눅스에서 service 만들기

## 파일위치

/etc/systemd/system/sipu_server.service

## 서비스 파일내용

```sh
[Unit]
Description=sipu server

[Service]
Type=simple
User=sipu-server
ExecStart=/home
WorkingDirectory=/home

[Install]
WantedBy=multi-user.target
```

## 등록

```bash
systemctl daemon-reload
systemctl enable sipu_server
systemctl start sipu_server
```

## 기타 명령어들

```bash
sudo systemctl status sipu_server
sudo systemctl restart sipu_server
sudo systemctl stop sipu_server
sudo systemctl disable sipu_server
```

## 윈도우에서 서비스 만들기는 구글링을 추천
