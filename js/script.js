const app = new Vue (
    {
        el : '#app',


        data : {
            message : ''
        },


        methods : {
            resetInput : function () {
                this.message = null;
            }
        }
    }
)