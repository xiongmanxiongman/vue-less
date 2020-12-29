import cssGuards from './routes/cssGuards'
import detachedRulesets from './routes/detachedRulesets'
import extend from './routes/extend'
import importAtRules from './routes/importAtRules'
import maps from './routes/maps'
import merge from './routes/merge'
import mixins from './routes/mixins'
import parentSelectors from './routes/parentSelectors'
import pluginAtRules from './routes/pluginAtRules'
import variables from './routes/variables'
import functions from './routes/functions'

export default [
    {
        index: '0',
        title: '首页',
        icon: 'el-icon-s-home',
        children: [
            {name: '首页', path: '/overview'},
        ]
    },
    {
        index: '1',
        title: '变量',
        icon: 'el-icon-ice-cream-round',
        children: [
            ...variables,
        ]
    },

    {
        index: '2',
        title: '父类选择器',
        icon: 'el-icon-lollipop',
        children: [
            ...parentSelectors,
        ]
    },

    {
        index: '3',
        title: '继承',
        icon: 'el-icon-potato-strips',
        children: [
            ...extend,
        ]
    },

    {
        index: '4',
        title: '合并',
        icon: 'el-icon-milk-tea',
        children: [
            ...merge,
        ]
    },

    {
        index: '5',
        title: '混合',
        icon: 'el-icon-orange',
        children: [
            ...mixins,
        ]
    },
    {
        index: '6',
        title: '判断',
        icon: 'el-icon-apple',
        children: [
            ...cssGuards,
        ]
    },

    {
        index: '7',
        title: '分离',
        icon: 'el-icon-pear',
        children: [
            ...detachedRulesets,
        ]
    },
    {
        index: '8',
        title: '导入',
        icon: 'el-icon-cherry',
        children: [
            ...importAtRules,
        ]
    },
    {
        index: '9',
        title: '插件',
        icon: 'el-icon-watermelon',
        children: [
            ...pluginAtRules,
        ]
    },
    {
        index: '10',
        title: '映射',
        icon: 'el-icon-grape',
        children: [
            ...maps,
        ]
    },
    {
        index: '11',
        title: '函数',
        icon: 'el-icon-sugar',
        children: [
            ...functions,
        ]
    },
]
