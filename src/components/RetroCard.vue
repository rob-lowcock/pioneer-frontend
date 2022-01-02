<script>
export default {
    props: {
        item: Object,
        focused: Boolean,
    },

    data() {
        return {
            voted: false,
        }
    },

    methods: {
        voteUp (evt) {
            if (this.voted) {
                return
            }
            fetch(import.meta.env.VITE_API_URL + '/retrocards/' + this.item.id + '/votes', {
                method: 'POST',
                headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
                }
            })

            this.voted = true
        },

        voteDown (evt) {
            if (!this.voted) {
                return
            }
            fetch(import.meta.env.VITE_API_URL + '/retrocards/' + this.item.id + '/votes', {
                method: 'DELETE',
                headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
                }
            })

            this.voted = false
        },

        vote (evt) {
            if (this.voted) {
                this.voteDown(evt)
            } else {
                this.voteUp(evt)
            }
        },

        doneClass() {
            if (this.focused) {
                return "fill-gray-400 group:hover:fill-gray-500"
            }

            if (this.item.done) {
                return "fill-green"
            }

            return "fill-transparent w-0 h-0"
        },

        markDone($event) {
            fetch(import.meta.env.VITE_API_URL + '/retrocards/' + this.item.id, {
                method: 'PUT',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    ...this.item,
                    done: true,
                })
            })
            this.$socket.client.emit('unfocus')
        },
    },
    computed: {
        voteCount() {
            return this.item.votes > 0 ? "+" + this.item.votes : ""
        },
    },
}
</script>

<template>
    <div class="card flex">
        <div class="flex-1">{{ item.title }}</div>
        <div class="flex-none">
            <button class="group" @click="markDone($event)">
                <svg class="w-4 h-4" v-bind:class="doneClass()" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <path d="m23.15 5.4-2.8-2.8a.5.5 0 0 0-.7 0L7.85 14.4a.5.5 0 0 1-.7 0l-2.8-2.8a.5.5 0 0 0-.7 0l-2.8 2.8a.5.5 0 0 0 0 .7l6.3 6.3a.5.5 0 0 0 .7 0l15.3-15.3a.5.5 0 0 0 0-.7Z"/>
                </svg>
            </button>
        </div>
    </div>
    <div class="card-details flex items-center">
        <div class="score flex-1 text-sm text-gray-500 font-bold">{{ voteCount }}</div>
        <div class="upvote flex-none">
            <button class="w-4 h-4 group" @click="vote($event)">
                <svg class="w-4 h-4 fill-current text-transparent group-hover:text-gray-500" v-bind:class="{ 'text-gray-400':voted }" xmlns="http://www.w3.org/2000/svg" stroke="#6B727A" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M3.5 14.5c.352.012.702.068 1.04.167 2.667.76 2.813.846 3.52.846h3.273a4 4 0 0 0 4-3.6l.2-3.4a2.993 2.993 0 0 0-2.266-3.06c-.72-.18-1.727-.18-1.727-1.186V2a1.5 1.5 0 1 0-3 0c0 .067.44 6.033-5 6.033L3.5 14.5ZM3.5 6.5h-3v9h3v-9Z"/>
                </svg>
            </button>
        </div>
    </div>
</template>