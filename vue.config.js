module.exports = {
    publicPath: process.env.NODE_ENV === 'production'
        ? '/vue-less/dist/'
        : '/',
    //runtimeCompiler: true,//template模板,导致runtime-only报错解决方法
};
