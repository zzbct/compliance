<!--
Copyright:MR-team
Author: bct
Date:2016-09
Description: 占比饼图
-->
<style scoped>
    .chart_circle {
        position: relative;
        margin: 0 auto;
    }
    .chart_circle_content {
        width: 100%;
        text-align: center;
        position: absolute;
        left: 0;
        top: 50%;
        -webkit-transform: translateY(-50%);
        -moz-transform: translateY(-50%);
        transform: translateY(-50%);
    }
</style>
<template>
    <div class="chart_circle" :style="circleSize">
        <svg viewBox="0 0 100 100">
            <path :d="pathString" :stroke="trailColor" :stroke-width="trailWidth" :fill-opacity="0"/>
            <path :d="pathString" :stroke-linecap="strokeLinecap" :stroke="strokeColor" :stroke-width="strokeWidth" fill-opacity="0" :style="pathStyle"/>
        </svg>
        <div class="chart_circle_content">
            <slot></slot>
        </div>
    </div>
</template>
<script>
    module.exports = {
        props: {
            size: {
                type: Number,
                default: 110
            },
            strokeWidth: {
                type: Number,
                default: 12
            },
            strokeColor: {
                type: String,
                default:'#a4f089'
            },
            strokeLinecap: {
                type: String,
                default: 'square'
            },
            trailWidth: {
                type: Number,
                default: 12
            },
            trailColor: {
                type: String,
                default: '#eaeef2'
            },
            percent: {
                type: [Number, String],
                default: 0
            }
        },
        computed: {
            circleSize: function() {
                return {
                    width: this.size+ 'px',
                    height: this.size + 'px'
                };
            },
            radius: function() {
                return 50 - this.strokeWidth / 2;
            },
            pathString: function() {
                return 'M 50,50 m 0,-' + this.radius + ' a ' + this.radius + ',' + this.radius + ' 0 1 1 0,' + 2 * this.radius + ' a ' + this.radius + ',' + this.radius + ' 0 1 1 0,-' + 2 * this.radius;
            },
            len: function() {
                return Math.PI * 2 * this.radius;
            },
            pathStyle: function() {
                return {
                    'stroke-width':this.strokeWidth+'px',
                    'stroke-dasharray': this.len+ 'px ' + this.len + 'px',
                    'stroke-dashoffset': (100 - this.percent) / 100 * this.len + 'px',
                    'transition': 'stroke-dashoffset 0.6s ease 0s, stroke 0.6s ease'
                }
            }
        }
    }
</script>
