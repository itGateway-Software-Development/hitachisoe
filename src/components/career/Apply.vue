<template>
    <div class="apply">
        <div class="img">
            <img class="w-100 object-fit-cover " src="@/assets/images/career/hiring.jpg" alt="">
        </div>
        <div id='jobnet' style='border:1px solid silver;width:100%;padding-left:1px;padding-right:1px;'> 

            <object data='https://www.jobnet.com.mm/embed/SqS0vNch_d_UymWMSGHJOg%3d%3d' frameborder ='0' width='100%' height ='750' scrolling ='yes' seamless='seamless' title='loading'> 
        
                <embed data='https://www.jobnet.com.mm/embed/SqS0vNch_d_UymWMSGHJOg%3d%3d' frameborder ='0' width='100%' height ='750' scrolling ='yes' seamless='seamless' title='loading' />
        
            </object> 
        
                <center style='border-top: 1px #ddd solid;margin-top:-2px;'> 
        
                    <a href='https://www.jobnet.com.mm/' target='_blank'> 
        
                        <span style='display: table-footer-group;'> </span>
        
                        <span style='float: left;padding-right: 5px;font-size: 12px;line-height: 2.3;'>Powered by</span> 
        
                        <img src='https://www.jobnet.com.mm/img/small-logo.png'/> 
        
                    </a> 
        
                </center> 
        
            </div> 
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>
    .apply {
        padding: 20px 15.6%;
    }

    .apply .img {
        display: flex;
        justify-content: center;
        height: 600px;
        margin-bottom: 30px;
    }

    @media (max-width: 1500px) {
        .apply {
          padding: 20px 9%;
        }

        .apply .img {
            height: 500px;
        }
    }

    @media (max-width: 1260px) {
        .apply {
          padding: 20px 3%;
        }
    }

    @media (max-width: 900px) {
        .apply {
          padding: 20px 1%;
        }

        .apply .img {
            height: 400px;
        }
    }
</style>
