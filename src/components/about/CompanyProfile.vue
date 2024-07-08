<template>
  <div class="profile">
    <h2>Company Profile</h2>
    <img data-aos="zoom-in" src="@/assets/images/carousel2.jpg" alt="" />
  </div>

  <div class="chairman-md">
    <h2>Chairman & Director</h2>

    <div class="img">
      <div class="img-card" data-aos="fade-right">
        <img src="@/assets/images/chairmann.png" alt="" />
        <div class="position">
          <h2>Chairman</h2>
          <h3>Dr. Kyaw Min Htun</h3>
        </div>
      </div>
      <div class="img-card" data-aos="fade-left">
        <img src="@/assets/images/director.png" alt="" />
        <div class="position">
          <h2>Managing Director</h2>
          <h3>Mr. Makoto Shinohara</h3>
        </div>
      </div>
    </div>
  </div>

  <div class="overview">
    <h2>Overview</h2>

    <table class="table table-bordered table-responsive">
      <tr data-aos="flip-up">
        <td class="th" colspan="2">Company Name</td>
        <td>Hitachi Soe Electric & Machinery Co., Ltd. (HISEM)</td>
      </tr>
      <tr data-aos="flip-up">
        <td class="th" colspan="2">Paid Up Capital</td>
        <td>USD 45 Millions (HIES 51%, SEM 49%)</td>
      </tr>
      <tr data-aos="flip-up">
        <td class="th" colspan="2">Chairman</td>
        <td>U Kyaw Min Htun</td>
      </tr>
      <tr data-aos="flip-up">
        <td class="th" colspan="2">Managing Director</td>
        <td>Mr. Makoto Shinohara</td>
      </tr>
      <tr data-aos="flip-up">
        <td class="th" colspan="2">Work Force</td>
        <td>Over 500 Staffs</td>
      </tr>
      <tr data-aos="flip-up">
        <td class="th" colspan="2">Plant Area</td>
        <td>Plant Area Site…40,000m2</td>
      </tr>
      <tr data-aos="flip-up">
        <td class="th" colspan="2">Bank Reference</td>
        <td>SMBC Bank, MUFG Bank, KBZ Bank, CB Bank</td>
      </tr>
      <tr data-aos="flip-up">
        <td rowspan="2" colspan="2" class="th">Production Capacity </td>
        <td>Distribution Transformer over 8000 Unit per year</td>
      </tr>
      <tr data-aos="flip-up">
        <td>Power Transformer…800,000 kVA/per year</td>
      </tr>
      <tr data-aos="flip-up">
        <td class="th" rowspan="2">Production Range</td>
        <td class="th text-danger">Capacity</td>
        <td>5kVA - 30,000kVA</td>
      </tr>
      <tr data-aos="flip-up">
        <td class="th text-danger">Voltage</td>
        <td>3.3, 6.6, 11, 33, 66 kV</td>
      </tr>
      <tr data-aos="flip-up">
        <td class="th" colspan="2">Maintenance & Repair Service</td>
        <td>
          Repair & maintenance of electrical transformers 50-100,000 kVA with
          different system voltages Mobile Unit and service teams headed by
          know-how experienced staffs around the clock.
        </td>
      </tr>
      <tr data-aos="flip-up">
        <td class="th" colspan="2">Outline of Business</td>
        <td>
          Manufacturing, Installation, Leasing, Maintenance, Repair & Sales of
          Electrical Transformers, switchgear and transformer related
          accessories.
        </td>
      </tr>
      <tr data-aos="flip-up">
        <td class="th" colspan="2">Mainly Supply to</td>
        <td>
          Government Tender Project, System Improvement Project, Industrial
          Zone, Construction
        </td>
      </tr>
    </table>
  </div>
</template>

<script>
import { onMounted } from "vue";
export default {
  setup() {
    onMounted(() => {
      window.scrollTo(0, 0);
    });
  },
};
</script>

<style scoped>
.profile {
  padding: 0px 15.5%;
}

.profile h2 {
  font-weight: bold;
  text-align: center;
  margin: 30px auto;
}

.profile img {
  width: 100%;
  height: 500px;
  object-fit: cover;
}

.chairman-md {
  margin: 80px auto 60px;
  background: #f1f3f4;
  padding: 30px 15.5%;
}

.chairman-md h2 {
  font-weight: bold;
  margin: 30px auto;
  text-align: center;
}

.chairman-md .img {
  display: flex;
  justify-content: center;
  margin: 50px auto 20px;
  gap: 60px;
}

.chairman-md .img-card {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.chairman-md img {
  width: 350px;
  height: 450px;
  object-fit: cover;
  padding: 10px 10px 0 10px;
  border-radius: 4px;
  background: linear-gradient(to right, rgb(214, 218, 169), rgb(247, 248, 233));
  border: 1px solid goldenrod;
}

.chairman-md .position h2 {
  text-align: center;
  font-size: 20px;
}

.chairman-md .position h3 {
  text-align: center;
  font-weight: bold;
  margin-top: -10px;
}

.overview {
  padding: 0 25%;
}

.overview h2 {
  font-weight: bold;
}

.overview table {
  margin: 30px auto;
}

.overview .th {
  background: #f2f2f2;
  padding: 15px 30px;
}

@media (max-width: 1500px) {
  .profile {
    padding: 0px 13%;
  }

  .overview {
    padding: 0 20%;
  }
}

@media (max-width: 1260px) {
  .profile {
    padding: 0px 3%;
  }

  .overview {
    padding: 0 10%;
  }
}

@media (max-width: 900px) {
  .profile img {
    height: 450px;
  }

  .overview h2 {
    margin-left: 10px;
  }
}

@media (max-width: 800px) {
  .chairman-md .img {
    gap: 30px;
  }

  .chairman-md img {
    width: 300px;
    height: 400px;
  }

  .chairman-md .position h2 {
    font-size: 17px;
  }

  .chairman-md .position h3 {
    font-size: 20px;
  }

  .overview {
    padding: 0 4%;
  }
}

@media (max-width: 700px) {
  .profile img {
    height: 400px;
  }
  .chairman-md .img {
    gap: 30px;
  }

  .chairman-md img {
    width: 250px;
    height: 350px;
  }

  .overview table td {
    font-size: 13px;
  }
  .overview .th {
    padding: 10px 20px;
  }
}

@media (max-width: 570px) {
  .profile img {
    height: 350px;
  }

  .chairman-md .img {
    flex-direction: column;
    gap: 60px;
  }

  .chairman-md img {
    width: 100%;
    height: auto;
  }

  .overview {
    padding: 0 2%;
  }

  .overview table td {
    font-size: 12px;
  }
  .overview .th {
    padding: 5px 10px;
  }
}
</style>
