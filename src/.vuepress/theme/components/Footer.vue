<template>
  <footer class="footer">
    <div class="footer-left">
      <ul v-if="contact" class="contact">
        <li
          v-for="item in contact"
          :key="item.iconComponent"
          class="contact-item"
        >
          <NavLink :link="item.link">
            <component :is="item.iconComponent"></component>
            {{ item.text }}
          </NavLink>
        </li>
      </ul>
    </div>

    <div class="footer-right">
      <ul v-if="copyright" class="copyright">
        <li v-for="item in copyright" :key="item.text" class="copyright-item">
          <NavLink :link="item.link">{{ item.text }}</NavLink>
        </li>
      </ul>
    </div>
  </footer>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
// @ts-ignore no types
import { GithubIcon, TwitterIcon } from 'vue-feather-icons';
import NavLink from './NavLink.vue';

@Component({
  components: {
    NavLink,
    GithubIcon,
    TwitterIcon
  }
})
export default class Footer extends Vue {
  getIconComponentName(contactType: string) {
    switch (contactType) {
      case 'twitter':
        return 'TwitterIcon';
      case 'github':
        return 'GithubIcon';
      default:
        return '';
    }
  }

  get contact() {
    return (
      (this.$themeConfig.footer && this.$themeConfig.footer.contact) ||
      []
    )
      .map(({ type, link }: { type: string; link: string }) => {
        return {
          iconComponent: this.getIconComponentName(type),
          link
        };
      })
      .filter(({ iconComponent }: { iconComponent: string }) => iconComponent);
  }

  get copyright() {
    return (
      (this.$themeConfig.footer && this.$themeConfig.footer.copyright) || []
    );
  }
}
</script>
<style lang="stylus">
@import '~@app/style/config';

.footer {
  position: absolute;
  background-color: $footerBgColor;
  width: 100%;
  bottom: 0;
  display: flex;
  height: $footerHeight;
  align-items: center;
  justify-content: space-between;
  padding: 0 1.5rem;
  border-top: 1px solid $borderColor;

  .contact {
    display: flex;

    &-item {
      margin: 0 0.5rem;

      .nav-link {
        color: $footerColor;

        &:hover {
          color: $footerHoverColor;
        }
      }
    }
  }

  .copyright {
    .nav-link {
      color: $footerColor;
      text-decoration: none;

      &:hover {
        color: $footerHoverColor;
      }
    }
  }
}
</style>
