<script setup>
import { ref } from 'vue';

import AppBtn from '@/components/shared/btn/AppBtn.vue';
import AppIcon from '@/components/shared/AppIcon.vue';
import AppFooterMedia from '@/components/footer/footer-media/AppFooterMedia.vue';

import dataFooter from '@/data/footer.js';

const { button, time, media } = ref(dataFooter).value;
</script>

<template>
  <div class="footer-top">
    <div class="item item--phone">
      <app-btn appearance="grey" cls="phone">
        <app-icon :name="button.icon" width="22" height="22" />
        {{ button.phone }}
      </app-btn>
      <div class="time">{{ time }}</div>
    </div>
    <div class="item item--social">
      <app-footer-media :media="media" />
    </div>
  </div>
</template>

<style scoped lang="scss">
.footer-top {
  @include lt-md {
    flex-direction: column;
  }

  @include gt-sm {
    padding-top: 20px;
    padding-bottom: 20px;
  }

  @include lt-md {
    padding-top: 10px;
    padding-bottom: 10px;
  }

  display: flex;
}

.item {
  @include lt-md {
    padding-top: 10px;
    padding-bottom: 10px;
  }

  display: flex;
  align-items: center;

  &--phone {
    @include gt-sm {
      width: 40.4444%;
    }

    gap: 10px;
  }

  &--social {
    @include lt-md {
      border-top: 1px solid var(--border-grey-color);
    }

    flex: 1;
  }
}

.time {
  max-width: 127px;
  font-size: 11px;
  line-height: 15px;
}
</style>
