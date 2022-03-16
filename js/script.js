const app = new Vue (
    {
        el : '#app',


        data : {
            message : '',
            imgUrl : ''
        },


        methods : {
            resetInput : function () {
                this.message = null;
                this.imgUrl = null;
            }
        }
    }
)