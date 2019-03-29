# rp-proxy

## How to run

Using Node JS:

``` bash
npm i

cross-env REPORT_PORTAL_HOST=http://${report-portal-host}:${port} npm start
```

Now you can access proxy via 8080 port by default (check sources for details). 


Using Docker:

``` bash
openssl req -nodes -new -x509 -keyout server.key -out server.cert

docker build -t avasilyeu/rp-proxy .

docker run -d -p 9997:8080 --env REPORT_PORTAL_HOST=http://${report-portal-host}:${port} avasilyeu/rp-proxy
```

Now you can access proxy via 9997 port. Make sure that port is opened in firewall settings on host where you run proxy.