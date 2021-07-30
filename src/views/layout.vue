<template>
  <section class="layout">
    <navbar/>
    <section class="container">
      <sidebar/>
      <main class="content">
        <transition name="content">
          <router-view class="inner"/>
        </transition>
      </main>
    </section>
  </section>
</template>

<script>
import Navbar from '../components/navbar.vue'
import Sidebar from '../components/sidebar.vue'

export default {
  name: 'layout',
  components: { Navbar, Sidebar }
}
</script>

<style lang="scss">
@import '../theme';

.container {
  display: flex;
  flex: 1;
  overflow: hidden;
}

.content {
  position: relative;
  flex: 1;
  margin: 0 $content-margin 0 0;
  overflow: auto;
  border-radius: $content-margin;
  background-color: $content-background;
  color: $content-color;
  font-size: .875rem;
  // box-shadow: inset 0 0 .25rem $content-color;

  > .inner {
    margin: 1.25rem 1rem;
    // overflow: hidden;

    > .heading {
      width: 100%;
      display: flex;
      align-items: center;
      margin-bottom: .875rem; // .625rem;
      padding-bottom: .25rem;
      // border-bottom: .0625rem solid darken($content-background, 5%);

      > .title {
        margin: 0 auto 0 0;
        font-size: 1.375rem;
        font-weight: 300;
        line-height: 1;
      }

      > .action {
        display: flex;
        list-style: none;
        margin: 0 0 0 1rem;
        padding: 0;
        overflow: hidden;
        font-size: 1rem;

        > li {
          margin-left: .375rem;

          > a {
            color: $content-color;
            opacity: .5;
            transition: opacity .2s;

            &:hover {
              opacity: 1;
            }
          }
        }
      }

      > .search {
        flex: 1;
        margin: 0 1.25rem;
        border-left: .0625rem solid lighten($content-color, 50%);

        &::before {
          display: inline-block;
          padding: .375rem .625rem;
          color: $content-color;
          opacity: .6;
        }

        input {
          width: 30%;
          padding: .25rem .3rem;
          background: transparent;
          border: 0;
          border-bottom: .0625rem solid transparent;
          border-radius: 0;
          color: lighten($content-color, 20%);
          font-size: .875rem;
          transition: border-bottom .2s ease, width .3s ease;

          &:focus {
            width: 90%;
            border-bottom-color: lighten($content-color, 40%);
            outline: 0;
          }
        }
      }
    }
  }
}

.content-enter-active,
.content-leave-active {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  transition: opacity .5s ease;
}

.content-enter,
.content-leave-active {
  opacity: 0
}

</style>
