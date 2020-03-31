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
@import '~@app/style/config';

.header {
  width: 100%;
  height: $headerHeight;
  padding: 0 1.5rem;
  box-sizing: border-box;
  background-color: $headerBgColor;
  color: $headerColor;
  border-bottom: 1px solid $borderColor;

  ol, ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }

  &-inner {
    display: flex;
    height: $headerHeight;
    align-items: center;
    justify-content: space-between;

    .title {
      font-size: 2rem;
      text-transform: uppercase;

      .home-link {
        display: flex;
        align-items: center;
        text-decoration: none;
        color: $headerColor;
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
          display: inline-block;
          font-size: 1.25rem;
          text-decoration: none;
          border-bottom: 2px solid $headerBgColor;

          &:hover, &:active {
            border-bottom: 2px solid $accentColor;
          }
        }
      }
    }

    .search-box {
      margin-left: 2rem;

      input {
        border-radius: 0.25rem;
        border: 1px solid $borderColor;

        &:hover, &:focus {
          border: 1px solid $accentColor;
          box-shadow: 0 0 0.25rem $accentColor;
        }
      }

      .suggestions {
        border: 1px solid $borderColor;
        top: 2.5rem;
        right: 0;
      }
    }
  }
}
</style>
