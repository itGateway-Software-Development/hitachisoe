<template>
  <div class="kv11">
    <h2>
      <span class="fw-bold"
        >(33/11)kV, (33/6.6)kV ON LOAD TAP CHANGER POWER TRANSFORMER</span
      >
      <button @click="showSpec" class="border-0">
        <i
          class="fa-solid"
          :class="{ 'fa-plus': !isShow, 'fa-minus': isShow }"
        ></i>
      </button>
    </h2>
    <div class="spec" :class="{ show: isShow }">
      <div class="row text-white fw-bold px-3 mb-4">
        <div class="col-12 col-md-8 bg-info py-3 ps-3">
          <div class="row">
            <div class="col-12 col-lg-7">
              <div class="row mb-3">
                <div class="col-7">Rated primary voltage</div>
                <div class="col-5">:&nbsp; 33000 V</div>
              </div>
              <div class="row mb-3 mb-lg-0">
                <div class="col-7">Rated Secondary voltage</div>
                <div class="col-5">:&nbsp; 11000 V - 6600 V</div>
              </div>
            </div>
            <div class="col-12 col-lg-5">
              <div class="row mb-3">
                <div class="col-7">Frequency</div>
                <div class="col-5">:&nbsp; 50 Hz</div>
              </div>
              <div class="row mb-3 mb-lg-0">
                <div class="col-7">Phase</div>
                <div class="col-5">:&nbsp; 3 Phases</div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-12 col-md-4 d-flex align-items-center main-bg-color">
          <p class="mt-3 mt-lg-0 px-2 px-lg-0">
            Open Type With Conservator (On Load Tap Changer) Silicon
            <span class="text-warning">Steel</span> Core Transformer
          </p>
        </div>
      </div>
      <div class="table-responsive">
        <table class="table table-striped table-bordered table-responsive">
          <thead>
            <tr class="text-center">
              <th>No</th>
              <th>Capacity</th>
              <th>No load losses</th>
              <th rowspan="2">Load losses at 75&deg;C PK (W)</th>
              <th rowspan="2">Total losses at 75&deg;C (W)</th>
              <th rowspan="2">Imped-ance at 75&deg;C lz%</th>
              <th rowspan="2">No load Current lo%</th>
              <th colspan="2">
                Efficiency <br />
                P.F = 1
              </th>
              <th rowspan="2">
                Voltage Regulation <br />
                P.F = 1
              </th>
              <th colspan="3">Outline Dimension Approx.(mm)</th>
              <th rowspan="2">Oil Quantity (litres)</th>
              <th rowspan="2">Total Weight (kgs)</th>
            </tr>
            <tr>
              <th>Sr</th>
              <th>kVA</th>
              <th>Po(W)</th>
              <th>1/2 load %</th>
              <th>Full load %</th>
              <th>L</th>
              <th>W</th>
              <th>H</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>4000</td>
              <td>4500</td>
              <td>32000</td>
              <td>36500</td>
              <td>7</td>
              <td>0.3</td>
              <td>99.38</td>
              <td>99.10</td>
              <td>1.04</td>
              <td>4200</td>
              <td>3050</td>
              <td>3000</td>
              <td>5000</td>
              <td>14000</td>
            </tr>
            <tr>
              <td>2</td>
              <td>5000</td>
              <td>4700</td>
              <td>38000</td>
              <td>42700</td>
              <td>7.5</td>
              <td>0.3</td>
              <td>99.44</td>
              <td>99.15</td>
              <td>1.04</td>
              <td>4500</td>
              <td>3200</td>
              <td>3200</td>
              <td>5800</td>
              <td>16000</td>
            </tr>
            <tr>
              <td>3</td>
              <td>7500</td>
              <td>6500</td>
              <td>55000</td>
              <td>61500</td>
              <td>8</td>
              <td>0.3</td>
              <td>99.46</td>
              <td>99.19</td>
              <td>1.05</td>
              <td>4610</td>
              <td>3250</td>
              <td>3230</td>
              <td>6550</td>
              <td>19800</td>
            </tr>
            <tr>
              <td>4</td>
              <td>8000</td>
              <td>7000</td>
              <td>62000</td>
              <td>69000</td>
              <td>8</td>
              <td>0.3</td>
              <td>99.44</td>
              <td>99.14</td>
              <td>1.09</td>
              <td>4560</td>
              <td>3310</td>
              <td>3250</td>
              <td>5850</td>
              <td>18700</td>
            </tr>
            <tr>
              <td>5</td>
              <td>10000</td>
              <td>8000</td>
              <td>65000</td>
              <td>73000</td>
              <td>8</td>
              <td>0.3</td>
              <td>99.52</td>
              <td>99.28</td>
              <td>0.97</td>
              <td>5050</td>
              <td>3400</td>
              <td>3320</td>
              <td>7000</td>
              <td>23600</td>
            </tr>
            <tr>
              <td>6</td>
              <td>15000</td>
              <td>10000</td>
              <td>95000</td>
              <td>105000</td>
              <td>9</td>
              <td>0.3</td>
              <td>99.55</td>
              <td>99.30</td>
              <td>1.04</td>
              <td>5250</td>
              <td>4050</td>
              <td>4000</td>
              <td>10600</td>
              <td>33200</td>
            </tr>
            <tr>
              <td>7</td>
              <td>20000</td>
              <td>13000</td>
              <td>125000</td>
              <td>138000</td>
              <td>9</td>
              <td>0.3</td>
              <td>99.56</td>
              <td>99.31</td>
              <td>1.03</td>
              <td>5650</td>
              <td>4520</td>
              <td>4000</td>
              <td>10700</td>
              <td>37000</td>
            </tr>
            <tr>
              <td>8</td>
              <td>30000</td>
              <td>18500</td>
              <td>145000</td>
              <td>163500</td>
              <td>10</td>
              <td>0.2</td>
              <td>99.64</td>
              <td>99.46</td>
              <td>0.98</td>
              <td>5750</td>
              <td>4500</td>
              <td>4100</td>
              <td>12700</td>
              <td>50900</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
export default {
  setup() {
    let isShow = ref(false);

    let showSpec = () => {
      isShow.value = !isShow.value;
    };

    return { showSpec, isShow };
  },
};
</script>

<style>
.kv11 {
  margin-bottom: 20px;
}
.kv11 h2 {
  background: #f2f2f2;
  padding: 15px 20px;
  border-radius: 5px 5px 0 0;
  margin-bottom: 0 !important;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.kv11 h2 span {
  font-size: 15px;
  font-weight: 500;
}

.kv11 button i {
  font-size: 18px;
  transition: 0.5s ease;
}

.kv11 button {
  background: transparent;
}

.kv11 button:hover {
  background: transparent;
}

.kv11 table th {
  font-size: 16px;
  padding: 15px !important;
}

.kv11 table td {
  font-size: 16px;
  padding: 15px;
}

.kv11 .spec {
  background: #f2f2f2;
  border-top: 1px solid #ccc;
  padding: 20px 20px;
  border-radius: 0 0 5px 5px;
  height: 0;
  opacity: 0;
  visibility: hidden;
  transition: 0.3s ease-in-out;
  margin-top: -30px;
}

.kv11 .spec.show {
  height: auto;
  opacity: 1;
  visibility: visible;
  margin-top: 0;
}

@media (max-width: 990px) {
  .kv11 h2 {
    background: #f2f2f2;
    padding: 15px 20px;
    border-radius: 5px 5px 0 0;
    margin-bottom: 0 !important;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .kv11 .spec {
    background: #f2f2f2;
    border-top: 1px solid #ccc;
    padding: 20px 0px;
    border-radius: 0 0 5px 5px;
    height: 0;
    opacity: 0;
    visibility: hidden;
    transition: 0.3s ease-in-out;
    margin-top: -30px;
  }
}

@media (max-width: 450px) {
  .kv11 h2 {
    background: #f2f2f2;
    padding: 15px 20px;
    border-radius: 5px 5px 0 0;
    margin-bottom: 0 !important;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .kv11 h2 span {
    font-size: 12px;
    font-weight: 500;
    line-height: 17px;
  }

  .kv11 button i {
    font-size: 15px;
    transition: 0.5s ease;
  }

  .kv11 table th {
    font-size: 12px;
    padding: 15px !important;
  }

  .kv11 table td {
    font-size: 15px;
    padding: 12px;
  }
}
</style>
