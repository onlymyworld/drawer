const getParams = (url, field) => {
    const reg = new RegExp(`(^|&)${field}=([^&]*)(&|$)`, 'i'); // `(^|&)${}`
    const proxy = (url.split('?')[1] || '').match(reg);
    return proxy[2];
};

module.exports = {
    '/v1/truck/': {
        target: 'localhost',
        changeOrigin: true,
        pathRewrite(path, req) {
            const proxy = getParams(req.headers.referer, 'proxy');
            if (proxy && proxy === 'mock') {
                return path.replace('/v1/truck', '');
            } else {
                return path;
            }
        },
        router(req) {
            const proxy = getParams(req.headers.referer, 'proxy');
            let host = req.headers.referer.split('?')[0];
            if (proxy === 'mock') {
                host = 'http://yapi.demo.ued.g7s.chinawayltd.com/mock/209/';
            }
            return host;
        },
    },
};
