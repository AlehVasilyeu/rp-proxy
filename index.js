const express = require('express');
const proxy = require('http-proxy-middleware');

const target = process.env.REPORT_PORTAL_HOST;

const options = {
    target,

    onProxyReq: (proxyReq, req, res) => {
        if (req.method !== 'OPTIONS') {
            if (req.headers['authorization']) {
                proxyReq.setHeader('Authorization', req.headers['authorization']);
            }
            if (req.headers['content-type']) {
                proxyReq.setHeader('Content-Type', req.headers['content-type']);
            }
        }
    },

    onProxyRes: (proxyRes, req, res) => {
        // little fake to make the rest of requests working
        proxyRes.headers['Access-Control-Allow-Origin'] = '*';
        proxyRes.headers['Access-Control-Allow-Headers'] = '*';
        proxyRes.headers['Access-Control-Allow-Methods'] = '*';
        if (req.method === 'OPTIONS') {
            proxyRes.statusCode = 200;
        }
    },
};

const rpProxy = proxy(options);

const app = express();
app.use('/api/v1', rpProxy);
app.listen(8080);
