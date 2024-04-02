<template>
    <div class="repair-service">
      <h2 data-aos="fade-right" class="text-center fw-bold my-5 service-title">
        Repairing Service
      </h2>
      <div class="repair-service-carousel swiper">
        <div class="swiper-wrapper">
          <div class="swiper-slide">
            <img style="filter: brightness(1); border: 2px solid #f2f2f2;" src="@/assets/images/services/Repair/banner.png" alt="" />
          </div>
        </div>
      </div>
  
      <div class="my-5">
        <h2 class="mt-5 mb-4 fw-bold">Repair & Service Transformer  </h2>
        <p class="text-justify">
            Transformers should be repaired for various reasons, and the decision to repair a transformer is often based on cost-benefit, transformer age and its overall condition. At HISEM, we specialize in transformer repair services design to ensure the best ability and lifespan of your transformer. 
        </p>
        <p class="text-justify">
            While the transformer is being repaired, we will replace it with a suitable transformer for the convenience of the customer’s business.  
        </p>
        <p class="text-justify fw-bold">
            Transformer Repairing 5kVA to 47.5MVA transformers can be repaired up to 6.6kV, 11kV, 33kV, 66kV, 132kV and 230kV voltage level.  
        </p>
        <p class="text-justify">
            Transformer repair and testing is performed according to IEC standards. For the long-term quality of the repair transformer, the inspection is carried out by HISEM After Sales Service team with expert engineers. 
        </p>
        <h6 class="fw-bold">HISEM can provide the following process </h6>
        <p class="ps-4 mb-1">(1) Coil rewinding </p>
        <p class="ps-4 mb-1">(2) Insulation oil purification or new oil replacement (factory or on site)</p>
        <p class="ps-4 mb-1">(3) Insulation materials improvement</p>
        <p class="ps-4 mb-1">(4) Coil rewindingModification from off load to onload tap changer transformer </p>
      </div>
  
      <h4
        class="mt-5 fw-bold"
        style="border-bottom: 2px solid rgb(211, 62, 62)"
        data-aos="fade-left"
      >
        Our Experiences
      </h4>
      <div class="row my-5 experience">
        <div class="col-12 col-sm-6 col-lg-4 mb-3">
          <img
            :src="require('@/assets/images/services/Repair/RP1.jpg')"
            alt=""
            class="w-100 h-100"
            data-aos="fade-down-right"
          />
        </div>
        <div class="col-12 col-sm-6 col-lg-4 mb-3">
          <img
            :src="require('@/assets/images/services/Repair/RP2.jpg')"
            alt=""
            class="w-100 h-100"
            data-aos="flip-left"
          />
        </div>
        <div class="col-12 col-sm-6 col-lg-4 mb-3">
          <img
            :src="require('@/assets/images/services/Repair/RP3.jpg')"
            alt=""
            class="w-100 h-100"
            data-aos="fade-down-left"
          />
        </div>
        <div class="col-12 col-sm-6 col-lg-4 mb-3">
          <img
            :src="require('@/assets/images/services/Repair/RP4.png')"
            alt=""
            class="w-100 h-100"
            data-aos="flip-left"
          />
        </div>
        <div class="col-12 col-sm-6 col-lg-4 mb-3">
          <img
            :src="require('@/assets/images/services/Repair/RP5.jpg')"
            alt=""
            class="w-100 h-100"
            data-aos="flip-right"
          />
        </div>
      </div>
      <hr />
    </div>
  </template>
  
  <script>
  import { onMounted, ref } from "vue";
  export default {
    setup() {
      const swiper = ref();
  
      onMounted(() => {
        window.scrollTo(0, 0);
      });
  
      return { swiper };
    },
  };
  </script>
  
  <style scoped>
  .repair-service {
    padding: 0px 15.6%;
  }
  
  .service-title {
    position: relative;
  }
  .service-title::before {
    content: "";
    position: absolute;
    width: 150px;
    height: 3px;
    background-color: var(--btn-color);
    left: 50%;
    transform: translate(-50%, -50%);
    bottom: -10px;
  }
  
  .repair-service .swiper {
    height: 500px;
  }
  
  .repair-service ol li,
  .repair-service ul li {
    font-size: 22px;
    font-weight: bold;
    margin-bottom: 18px;
  }

  .repair-service p{
    font-size: 18px;
  }
  
  .experience img {
    transition: 0.3s ease;
  }
  
  .experience img:hover {
    transform: translateY(-15px) translateX(10px) !important;
  }
  
  @media (max-width: 1500px) {
    .repair-service {
      padding: 0px 13%;
    }
  
    .repair-service .swiper {
      height: 400px;
    }
  
    .repair-service h2 {
      font-size: 24px;
    }
  
    .repair-service ul li {
      font-size: 19px;
    }
  }
  
  @media (max-width: 1260px) {
    .repair-service {
      padding: 0px 1%;
    }
    .repair-service .swiper {
        height: 500px;
      }
  }
  
  @media (max-width: 990px) {
    .repair-service h2 {
      font-size: 25px;
    }
    .repair-service ol li,
    .repair-service ul li {
      font-size: 18px;
    }
  
    .repair-service .row div {
      font-size: 17px !important;
    }

    .repair-service .swiper {
        height: 300px;
      }
  }
  
  @media (max-width: 580px) {
    .repair-service .swiper {
      height: 400px;
    }

    .repair-service .swiper {
        height: 250px;
      }

    .repair-service .swiper img {
        object-fit: fill;
    }
  }
  
  @media (max-width: 490px) {
    .repair-service .swiper {
      height: 350px;
    }
  }
  </style>
  