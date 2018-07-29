<template lang="html">
  <div class="track">
    <div class="track-image">
      <span class="track-rank" v-if="hasRank">{{ rank }}.</span>
      <img :src="image" :alt="alt">
    </div>
    <div v-if="!!track.loved">
      <a class="track-love" v-if="loved" @click.prevent @click="unlove(track)" href="#"><icon name="heart"></icon></a>
      <a class="track-love" v-else @click.prevent @click="love(track)" href="#"><icon name="heart-o"></icon></a>
    </div>
    <span class="track-name">{{ track.artist.name }} –– {{ track.name }}</span>
    <span class="track-date" v-if="!!date">{{ date }}</span>
    <span class="track-date" v-if="isPlayingNow">Now playing</span>
  </div>
</template>

<script>
import 'vue-awesome/icons/heart'
import 'vue-awesome/icons/heart-o'
import Icon from 'vue-awesome/components/Icon'
import moment from 'moment'
import { mapActions } from 'vuex'

const DEFAULT_IMAGE = 'https://lastfm-img2.akamaized.net/i/u/64s/c6f59c1e5e7240a4c0d427abd71f3dbb'

export default {
  name: 'ArtistTrack',
  props: {
    track: Object
  },

  computed: {
    alt () {
      return this.track.album ? this.track.album['#text'] : this.track.name
    },
    date () {
      const { date } = this.track

      if (date) {
        const timestamp = new Date(1000 * date.uts)

        return moment(timestamp).fromNow()
      }
    },
    hasRank () {
      return !!this.rank
    },
    image () {
      const [small] = this.track.image

      return small['#text'] || DEFAULT_IMAGE
    },
    isPlayingNow () {
      return !!(this.track['@attr'] && this.track['@attr'].nowplaying)
    },
    loved () {
      return this.track.loved === '1'
    },
    rank () {
      return this.track['@attr'] && this.track['@attr'].rank
    }
  },
  methods: {
    ...mapActions({
      love: 'loveTrack',
      unlove: 'unloveTrack'
    })
  },
  components: {
    Icon
  }
}
</script>

<style scoped lang="scss">
.track {
  display: flex;
  align-items: center;

  .track-image, .track-love {
    margin-right: 10px;
  }

  .track-image {
    position: relative;
    height: auto;
    width: auto;
    text-align: center;
    font-size: 0;

    img {
      width: 34px;
      height: 34px;
    }
  }

  .track-rank {
    display: flex;
    position: absolute;
    height: 100%;
    width: 100%;
    justify-content: center;
    align-items: center;
    color: #fff;
    font-size: initial;
    font-weight: 600;
  }

  .track-love {
    display: flex;
    color: #000;
  }

  .track-name {
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
    padding-right: 10px;
  }

  .track-date {
    margin-left: auto;
    white-space: nowrap;
  }
}
</style>
