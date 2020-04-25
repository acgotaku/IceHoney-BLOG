<template>
  <header class="header">
    <div class="header-inner">
      <div class="title">
        <NavLink link="/" class="home-link">
          <img
            v-if="$themeConfig.profile"
            class="profile"
            :src="$withBase($themeConfig.profile)"
            :alt="$siteTitle"
          />
          <span>{{ $site.title }} </span>
        </NavLink>
      </div>
      <div class="header-right-wrap">
        <SearchBox />
        <ul v-if="$themeConfig.nav" class="nav">
          <li
            v-for="item in $themeConfig.nav"
            :key="item.text"
            class="nav-item"
          >
            <NavLink :link="item.link">{{ item.text }}</NavLink>
          </li>
        </ul>
      </div>
    </div>
  </header>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
// @ts-ignore searchBox inject webpack
import SearchBox from '@SearchBox';
import NavLink from './NavLink.vue';

@Component({
  components: {
    SearchBox,
    NavLink
  }
})
export default class Header extends Vue {}
</script>

<style lang="stylus">
@import '~@theme/styles/mixin';

.header {
  min-height: $headerHeight;

  &-inner {
    height: $headerHeight;
    background-color: var(--header);
    border-bottom: 1px solid var(--border);
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 1.5rem;
    z-index: 1000;

    .title {
      font-size: 2rem;
      text-transform: uppercase;

      .home-link {
        font-weight: 600;
        mx-flex-center();
        text-decoration: none;
        color: var(--main);
      }

      .profile {
        width: 3rem;
        margin-right: 1rem;
      }
    }
  }

  &-right-wrap {
    display: flex;
    justify-content: flex-end;
    align-items: center;

    .nav {
      display: flex;
      margin: 0;

      .nav-item {
        margin-left: 2rem;

        a {
          font-size: 1.25rem;
          border-bottom: 2px solid var(--header);

          &:hover, &:active {
            border-bottom: 2px solid var(--accent);
          }
        }
      }
    }

    .search-box {
      input {
        width: 12rem;
      }

      .suggestions {
        border: 1px solid var(--border);
        top: 2.5rem;
        left: 0;

        a {
          color: var(--secondary);
          text-decoration: none;

          &:hover {
            color: var(--accent);
          }
        }
      }
    }
  }
}

@media (max-width: $MQMobile) {
  .header {
    display: none;
  }
}
</style>
