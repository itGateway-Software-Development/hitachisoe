<template>
  <div class="amorphous">
    <div class="img d-flex justify-content-center my-4">
      <!-- <img src="@/assets/images/amorphous/amorphous.png" alt="" /> -->
      <vue-image-zoomer regular="/amorphous.png" />
    </div>
    <br />
    <br />
    <h3 class="fw-bold">Amorphous Metal Transformer (AMT)</h3>
    <p>
      An amorphous metal transformer (AMT) is a type of energy efficient transformer, and the magnetic core of this transformer is made with a ferromagnetic amorphous metal. The typical material is an alloy of iron with boron, silicon, and phosphorus in the form of thin foil. These materials have high magnetic sustainability, very low coercivity and high electrical resistance. The high resistance and thin foil lead to low losses by eddy currents when subjected to alternating magnetic fields.  
    </p>
    <p>
      In a transformer there are two types of losses which are generated during operation: No load loss and Load loss. The Amorphous material has great advantage in reducing No load loss and the amorphous metal transformer can reduce 70 to 80% No load Loss lower than the conventional type of transformer. The main application of amorphous metal Transformer is the grid distribution transformers, and the No-Load loss of these transformers makes up a significant part of the loss of the whole distribution network. 
    </p>
    <p>
      HISEM produces in a range of 50kVA to 2500kVA, up to 33kV voltage level, three phase, natural cooled (ONAN) with no load tap changer or automatic on load tap changer transformer. Oil Immersed Type Distribution Amorphous Metal Transformers are designed and manufactured in accordance with the national and international standards (IEC, IEEE, etc.). 
    </p>
    <br />
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.amorphous {
  padding: 10px 15%;
}
.amorphous .img img {
  width: 50%;
}

.amorphous p {
  font-size: 19px;
  text-indent: 50px;
  text-align: justify;
  line-height: 30px;
}

@media (max-width: 1600px) {
  .amorphous {
    padding: 10px 9%;
  }
}

@media (max-width: 1250px) {
  .amorphous {
    padding: 10px 5%;
  }

  .amorphous .img img {
    width: 70%;
  }
}

@media (max-width: 700px) {
  .amorphous .img img {
    width: 85%;
  }
}

@media (max-width: 550px) {
  .amorphous .img img {
    width: 100%;
  }
}
</style>
