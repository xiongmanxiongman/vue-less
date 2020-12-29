<template>
    <div class="my">
        <PageHeader content="类型判断函数-汇总"/>
        <div class="box">
            <p class="txt">这是一个方块</p>
        </div>
    </div>
</template>

<script>
    import PageHeader from '../../components/PageHeader.vue'

    export default {
        components: {
            PageHeader
        },
        name: 'FunctionsDemo12',
    }
</script>

<style scoped lang="less">
    .box {
        /*判断数值*/
        isnumber1: isnumber(#ff0); // false
        isnumber2: isnumber(blue); // false
        isnumber3: isnumber("string"); // false
        isnumber4: isnumber(1234); // true
        isnumber5: isnumber(56px); // true
        isnumber6: isnumber(7.8%); // true
        isnumber7: isnumber(keyword); // false
        isnumber8: isnumber(url(../../../src/themes/red.less)); // false
        /*判断颜色*/
        iscolor1: iscolor(#ff0); // true
        iscolor2: iscolor(blue); // true
        iscolor3: iscolor("string"); // false
        iscolor4: iscolor(1234); // false
        iscolor5: iscolor(56px); // false
        iscolor6: iscolor(7.8%); // false
        iscolor7: iscolor(keyword); // false
        iscolor8: iscolor(url(../../../src/themes/red.less)); // false
        /*判断关键字*/
        iskeyword1: iskeyword(#ff0); // false
        iskeyword2: iskeyword(blue); // false
        iskeyword3: iskeyword("string"); // false
        iskeyword4: iskeyword(1234); // false
        iskeyword5: iskeyword(56px); // false
        iskeyword6: iskeyword(7.8%); // false
        iskeyword7: iskeyword(background); // true
        iskeyword8: iskeyword(color); // true
        iskeyword9: iskeyword(padding); // true
        iskeyword10: iskeyword(url(../../../src/themes/red.less)); // false
        /*判断url*/
        isurl1: isurl(#ff0); // false
        isurl2: isurl(blue); // false
        isurl3: isurl("string"); // false
        isurl4: isurl(1234); // false
        isurl5: isurl(56px); // false
        isurl6: isurl(7.8%); // false
        isurl7: isurl(keyword); // false
        isurl8: isurl(url(../../../src/themes/red.less)); // true
        /*判断单位px*/
        ispixel1: ispixel(#ff0); // false
        ispixel2: ispixel(blue); // false
        ispixel3: ispixel("string"); // false
        ispixel4: ispixel(1234); // false
        ispixel5: ispixel(56px); // true
        ispixel6: ispixel(7.8%); // false
        ispixel7: ispixel(keyword); // false
        ispixel8: ispixel(url(../../../src/themes/red.less)); // false
        /*判断单位em*/
        isem1: isem(#ff0); // false
        isem2: isem(blue); // false
        isem3: isem("string"); // false
        isem4: isem(1234); // false
        isem5: isem(56px); // false
        isem6: isem(7.8em); // true
        isem7: isem(keyword); // false
        isem8: isem(url(../../../src/themes/red.less)); // false
        /*判断单位百分比*/
        ispercentage1: ispercentage(#ff0); // false
        ispercentage2: ispercentage(blue); // false
        ispercentage3: ispercentage("string"); // false
        ispercentage4: ispercentage(1234); // false
        ispercentage5: ispercentage(56px); // false
        ispercentage6: ispercentage(7.8%); // true
        ispercentage7: ispercentage(keyword); // false
        ispercentage8: ispercentage(url(../../../src/themes/red.less)); // false
        /*判断指定单位*/
        isunit1: isunit(11px, px); // true
        isunit2: isunit(2.2%, px); // false
        isunit3: isunit(33px, rem); // false
        isunit4: isunit(4rem, rem); // true
        isunit5: isunit(56px, "%"); // false
        isunit6: isunit(7.8%, '%'); // true
        isunit7: isunit(1234, em); // false
        isunit8: isunit(#ff0, pt); // false
        isunit9: isunit("mm", mm); // false
        /*判断规则集合*/
        @rules: {
            color: red;
        }
        /*isruleset(@rules);   // true
        isruleset(#ff0);     // false
        isruleset(blue);     // false
        isruleset("string"); // false
        isruleset(1234);     // false
        isruleset(56px);     // false
        isruleset(7.8%);     // false
        isruleset(keyword);  // false
        isruleset(url(../../../src/themes/red.less)); // false*/


    }
</style>
