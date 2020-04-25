<template>
  <div class="mobile-header">
    <div class="mobile-header-bar">
      <div class="mobile-header-title">
        <NavLink link="/" class="mobile-home-link">{{ $site.title }} </NavLink>
        <component
          :is="isOpen ? 'XIcon' : 'MenuIcon'"
          class="mobile-header-icon"
          @click="$emit('toggle-sidebar')"
        />
      </div>
      <div class="mobile-menu-wrapper" :class="{ open: isOpen }">
        <ul v-if="$themeConfig.nav" class="mobile-nav">
          <li
            v-for="item in $themeConfig.nav"
            :key="item.text"
            class="mobile-nav-item"
          >
            <NavLink :link="item.link">{{ item.text }}</NavLink>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
// @ts-ignore no types
import { MenuIcon, XIcon } from 'vue-feather-icons';
import NavLink from './NavLink.vue';

@Component({
  components: {
    NavLink,
    MenuIcon,
    XIcon
  }
})
export default class MobileHeader extends Vue {
  @Prop() readonly isOpen!: boolean;
}
</script>

<style lang="stylus">
.mobile-header {
  min-height: $headerHeight;
}

.mobile-header-bar {
  z-index: 1000;
  position: fixed;
  top: 0;
  width: 100vw;
  background-color: var(--header);
}

.mobile-header {
  &-icon {
    cursor: pointer;
  }

  .mobile-header-title {
    height: $headerHeight;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 1.5rem;
    border-bottom: 1px solid var(--border);

    .mobile-home-link {
      text-transform: uppercase;
      font-weight: 600;
      mx-flex-center();
      text-decoration: none;
      color: var(--main);
    }
  }
}

.mobile-nav-item {
  padding: 1rem 1.5rem;

  .nav-link {
    justify-content: flex-start;
  }
}

.menu-divider {
  margin: 0;
}

.mobile-menu-wrapper {
  max-height: 0;
  overflow: hidden;
  transition: 0.3s ease;
  background-color: var(--header);
}

.mobile-menu-wrapper.open {
  max-height: 20rem;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.03), 0 6px 6px rgba(0, 0, 0, 0.05);
}

@media (min-width: $MQMobile) {
  .mobile-header {
    display: none;
  }
}
</style>
