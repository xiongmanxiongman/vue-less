const collection = [];
module.exports = {
    install: function (less, pluginManager, functions) {
        functions.add('store', function (val) {
            collection.push(val);
            return false;
        });
        functions.add('retrieve', function () {
            return new tree.Value(collection);
        });
    }
};
