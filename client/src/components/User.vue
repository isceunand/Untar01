<template>
    <ul id="example-2">

        {{listUser}}
        <li v-for="(item, index) in listUser">
            {{item.email}}
        </li>
    </ul>
</template>

<script>
    
    export default {
        data() {
            return {
                listUser: []
            }
        },
        mounted: function() {
            var pusher = new Pusher('448b3467356a673a5866', {
                cluster: 'ap1',
                forceTLS: true
            });

            let self = this;
            var channel = pusher.subscribe('my-channel');
            channel.bind('my-event', function(data) {
                alert(JSON.stringify(data));
                console.log(data.data[0].email)
                self.listUser = data;
            });
        }
    }
</script>
