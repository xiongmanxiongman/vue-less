<template>
  <div class="my">
    <PageHeader content="数学函数-汇总"/>
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
  name: 'FunctionsDemo11',
}
</script>

<style scoped lang="less">
    .box {
        ceil: ceil(2.4); //向上取整 3
        floor: floor(2.6); //向下取整 2
        percentage: percentage(0.5); // 百分比 50%
        round: round(1.67); // 四舍五入 2
        round2: round(1.67, 1); // 四舍五入保留1位小数  1.7
        sqrt: sqrt(25px); // 平方根 5px
        abs: abs(25px); // 绝对值 25px
        abs2: abs(-18.6%); // 绝对值 18.6%
        sin1: sin(1); // 正弦函数 0.8414709848078965;
        sin2: sin(1deg); // 正弦函数 0.01745240643728351;
        sin3: sin(1grad); // 正弦函数 0.015707317311820675;
        /*asin1:asin(-0.8414709848078965);// 反正弦函数 -1rad
        asin2:asin(0);// 反正弦函数 0rad
        asin3:asin(2);// 反正弦函数 NaNrad*/
        cos1: cos(1); // 余弦函数 0.5403023058681398
        cos2: cos(1deg); // 余弦函数 0.9998476951563913
        cos3: cos(1grad); // 余弦函数 0.9998766324816606
        /*acos1:acos(0.5403023058681398);//反余弦函数 1rad
        acos2:acos(1);//反余弦函数 0rad
        acos3:acos(2);//反余弦函数 NaNrad*/
        tan1: tan(1); // 正切函数 1.5574077246549023
        tan2: tan(1deg); // 正切函数 0.017455064928217585
        tan3: tan(1grad); // 正切函数 0.015709255323664916
        atan1: atan(-1.5574077246549023); // 反正切函数 -1rad
        atan2: atan(0); // 反正切函数 0rad
        atan3: round(atan(22), 6); // 反正切函数 1.525373rad;
        pi: pi(); //3.141592653589793 圆周率函数
        /*pow1:pow(0cm, 0px);//幂函数 1cm
        pow2:pow(25, -2);//幂函数 0.0016
        pow3:pow(25, 0.5);//幂函数 5
        pow4:pow(-25, 0.5);//幂函数 NaN
        pow5:pow(-25%, -0.5);//幂函数 NaN%*/
        /*mod1:mod(0cm, 0px); //取模函数 NaNcm;
        mod2:mod(11cm, 6px);//取模函数 5cm
        mod3:mod(-26%, -5);//取模函数 -1%;*/
        min: min(3px, 42px, 1px, 16px); // 最小数 1px
        max: max(3%, 42%, 1%, 16%); // 最大数 42%
    }
</style>
