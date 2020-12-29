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

import overview from "@/pages/features/overview/overview";

export default [
    {path: '/', redirect: '/overview'},
    {path: '/overview', component: overview},
    ...cssGuards,
    ...detachedRulesets,
    ...extend,
    ...importAtRules,
    ...maps,
    ...merge,
    ...mixins,
    ...parentSelectors,
    ...pluginAtRules,
    ...variables,
    ...functions,
]
