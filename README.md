# rp-proxy

## How to run

```
docker build -t avasilyeu/rp-proxy .

docker run -d -p 9997:8080 --env REPORT_PORTAL_HOST=http://<%report-portal%>:<%port%> avasilyeu/rp-proxy
```