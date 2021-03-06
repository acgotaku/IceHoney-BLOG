---
title: Vue代码风格
date: 2021-03-06 12:02
comments: true
archives: 2021
tags:
  - vue
---

良好的代码风格更容易维护代码，虽然没有绝对的标准，但保持自己一贯的代码风格可以提高代码质量。接下来就来介绍我开发 Vue 代码的大致风格吧。

## DatePicker.vue

```vue
<template>
  <!-- 组件名字应该大写字母开头，组件最外层节点类名和组件文件名保持一致，PascalCase改成下划线 -->
  <div class="date-picker" v-click-outside="clickClose">
    <!-- 属性定义应该先定义原生属性，再定义Vue属性 -->
    <div
      class="date-picker-rel"
      ref="reference"
      @click="handleClick"
      :class="{ 'o-disabled': disabled }"
    >
      <slot name="picker">
        <VueInput
          v-model="currentDate"
          class="date-picker-input"
          :disabled="disabled"
          :placeholder="placeholder"
          :clearable="clearable"
          @on-clear="clearDate"
          @on-input="input"
          @on-blur="updateDate"
        >
          <template v-slot:suffix>
            <svg-icon
              name="date"
              class="date-picker-icon"
              :class="{ 'o-disabled': disabled, 'o-show': visible }"
            />
          </template>
        </VueInput>
      </slot>
    </div>
    <transition name="fade">
      <div
        class="date-picker-popper"
        :style="styles"
        ref="popper"
        v-show="visible && !disabled"
      >
        <DateTable
          :selectedDate="formatedDate"
          :isRange="isRange"
          :visible="visible"
          @select="selectDate"
        />
      </div>
    </transition>
  </div>
</template>

<script lang="ts">
/**
 * 模块定义：
 * 1. 先第三方后自定义
 * 2. 除非是组件内部私有模块，否则全部使用 @ 绝对路径引用
 * 3. 按需引用
 */
import { Component, Mixins, Prop, Watch } from 'vue-property-decorator';
// @ts-ignore
import { directive as clickOutside } from 'v-click-outside-x';
import Input from '@/components/input';
import PopperMixin from '@/mixins/popper';
import dateUtils from '@/utils/date';
import DateTable from './DateTable.vue';
import { namespace } from 'vuex-class';

const Info = namespace('information');

@Component({
  directives: {
    clickOutside
  },
  components: {
    DateTable,
    VueInput: Input
  },
  provide() {
    return {
      picker: this
    };
  }
})
// 类名和组件名保持一致，方便调试
export default class DatePicker extends Mixins(PopperMixin) {
  /**
   * 属性定义区域
   */
  @Prop() readonly value!: Date | null | Array<Date | null>;
  @Prop({ default: false }) readonly disabled!: boolean;
  @Prop({ default: false, type: Boolean }) readonly clearable!: boolean;
  @Prop({ default: '' }) readonly placeholder!: string;
  /**
   * State映射区域，定义顺序是： State Getter Action Mutation
   */
  @Info.State notifications!: Array<IAnnouncement>;

  /**
   * data定义区域
   */
  currentDate = '';
  updateByInput = false;

  /**
   * computed区域, 如果同时有 get 和 set 记得配对写一起
   */
  get formatedDate(): Array<Date | null> {
    if (Array.isArray(this.value)) {
      return this.value;
    } else {
      return [this.value];
    }
  }

  get isRange() {
    return Array.isArray(this.value);
  }

  /**
   * watch区域, 函数名 on + 属性名 + Changed
   */
  @Watch('value', { immediate: true })
  onValueChanged() {
    this.currentDate = dateUtils.formatDate(this.value);
  }

  /**
   * 生命周期函数
   * beforeCreate -> created -> beforeMount -> mounted -> beforeUpdate ->
   * updated -> activated -> deactivated -> beforeDestroy -> destroyed -> errorCaptured
   */
  created() {
    // noop
  }

  /**
   * methods 区域
   */
  clickClose() {
    if (this.visible && !this.disabled) {
      this.closePopper();
    }
  }

  handleClick() {
    if (!this.disabled) {
      if (this.visible) {
        this.closePopper();
      } else {
        this.showPopper();
      }
    }
  }

  clearDate() {
    if (this.isRange) {
      this.$emit('input', [null, null]);
    } else {
      this.$emit('input', null);
    }
  }

  input() {
    this.updateByInput = true;
  }

  updateDate() {
    if (this.updateByInput) {
      if (this.isRange) {
        const dates = this.currentDate.split(' - ');
        if (dates.length > 1) {
          const [start, end] = dates;
          const startDate = dateUtils.parseDate(start);
          const endDate = dateUtils.parseDate(end);
          if (
            !Number.isNaN(startDate.getTime()) &&
            !Number.isNaN(endDate.getTime())
          ) {
            this.$emit(
              'input',
              [startDate, endDate].sort((s, e) => {
                return s.getTime() - e.getTime();
              })
            );
          } else {
            this.$emit('input', this.value);
            this.currentDate = dateUtils.formatDate(this.value);
          }
        }
      } else {
        const startDate = new Date(this.currentDate);
        if (!Number.isNaN(startDate.getTime())) {
          this.$emit('input', startDate);
        } else {
          this.$emit('input', this.value);
          this.currentDate = dateUtils.formatDate(this.value);
        }
      }
      this.updateByInput = false;
    }
  }

  selectDate(date: Date | Array<Date>) {
    this.currentDate = dateUtils.formatDate(date);
    this.$emit('input', date);
    this.clickClose();
  }
}
</script>
<style lang="scss">
.date-picker {
  display: block;
  /**
   * CSS书写顺序
   * 以 Formatting Model (布局方式，位置) -> Box Model (尺寸) -> Typographic (文本相关) -> Visual (视觉效果)
   * 的顺序书写，可以提高代码的可读性。
   * Formatting Model 相关属性包括： position, top, right, bottom, left, float, display, overflow 等
   * Box Model 相关属性包括： border, margin, padding, width, height 等
   * Typographic 相关属性包括: font, line-height, text-align, word-wrap 等
   * Visual 相关属性包括： background, color, transition, list-style 等
   * 如果有 content 属性， 应该放在最前面。
   */

  &-popper {
    width: 272px;
  }
}
</style>
```

## 总结

良好的代码风格可以提高代码的可读性，建议大家都保持一致的风格，方便团队合作。

## 参考

[Organizing your CSS](https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/Organizing)
