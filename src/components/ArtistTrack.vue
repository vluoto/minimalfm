<template lang="html">
  <div class="track">
    <img class="track-image" :src="image" :alt="alt">
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

export default {
  name: 'ArtistTrack',
  props: ['track'],

  computed: {
    alt () {
      return this.track.album ? this.track.album['#text'] : this.track.name
    },
    date () {
      const { date } = this.track

      if (date) {
        const timestamp = date['#text']
        const ISOtimestamp = new Date(timestamp).toISOString()

        return moment(ISOtimestamp).fromNow()
      }
    },
    image () {
      const [small] = this.track.image

      return small['#text']
    },
    isPlayingNow () {
      return !!(this.track['@attr'] && this.track['@attr'].nowplaying)
    },
    loved () {
      return this.track.loved === '1'
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

<style scoped lang="css">
.track {
  display: flex;
  align-items: center;
}

.track-image, .track-love {
  margin-right: 10px;
}

.track-love {
  color: #000;
}

.track-name {
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  max-width: 400px;
}

.track-date {
  margin-left: auto;
}
</style>
