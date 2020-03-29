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
      }

      .profile {
        width: 2.25rem;
        margin-right: 1rem;
      }
    }

    a {
      text-decoration: none;
      color: $headerColor;

      &:hover {
        color: $headerColor;
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

// border-bottom 5px solid lighten(#3eaf7c, 50%)
// .header-inner {
// display: flex;
// line-height: 40px;
// height: 40px;

// .title {
// /* flex 0 0 200px */
// font-size: 30px;
// margin: 0;
// letter-spacing: 2px;
// display: block;
// text-transform: uppercase;

// a {
// color: $darkTextColor;
// font-weight: bold;
// font-family: PT Serif, Serif;
// text-decoration: none;
// }
// }

// .header-right-wrap {
// flex: 1;
// display: flex;
// justify-content: flex-end;
// align-items: center;

// .nav {
// flex: 0 0 auto;
// display: flex;
// margin: 0;

// .nav-item {
// margin-left: 20px;

// a {
// font-family: PT Serif, Serif;
// font-size: 20px;
// // color lighten(#3eaf7c, 30%)
// text-decoration: none;
// transition: color 0.3s;
// }
// }
// }

// .search-box {
// font-family: PT Serif, Serif;
// margin-left: 20px;

// input {
// border-radius: 5px;
// transition: all 0.5s;
// border: 1px solid #cecece;

// &:hover {
// border: 1px solid $accentColor;
// box-shadow: 0 0 5px $accentColor;
// }
// }

// .suggestions {
// border: 1px solid $darkBorderColor;
// top: 40px;
// right: 0;

// a {
// color: $darkTextColor;
// text-decoration: none;

// &.focused {
// color: $accentColor;
// }
// }
// }
// }
// }
// }
@media (max-width: $MQMobile) {
  #header {
    display: none;
  }

  .header-wrapper {
    flex-direction: column;

    .header-right-wrap {
      display: none;
    }
  }
}
</style>
