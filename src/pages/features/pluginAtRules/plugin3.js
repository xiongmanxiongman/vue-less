module.exports = {
    install: function (less, pluginManager, functions) {
        functions.add('pi', function () {
            return new tree.Dimension(Math.PI);
        });
    }
};
