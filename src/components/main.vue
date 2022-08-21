<template>
  <div>
    <div class="banner"></div>
    <div class="section bg-gray" v-for="(item, index) in wineData" :key="index">
      <div class="container production-area" :class="{'section-first' : index === 0}">
        <div class="row align-items-center">
          <div class="col-12 col-md-6" :class="{'order-2' : !isMobile && (index + 1) % 2 === 0}">
            <img :src="item.img" class="wine-img img-fluid" :class="{'mb-24' : isMobile}" alt="白葡萄酒">
          </div>
          <div class="col-12 col-md-6" :class="{'order-1' : !isMobile && (index + 1) % 2 === 0}">
            <div class="title">{{item.title}}</div>
            <div class="info mb-30">
              <p class="text mb-8">{{item.info01}}</p>
              <p class="text mb-18">{{item.info02}}</p>
              <p class="text mb-8">{{item.info03}}</p>
              <p class="text mb-8">{{item.info04}}</p>
              <p class="text">{{item.info05}}</p>
            </div>
            <div class="info-btn btn-hover" @click="scroll">立即訂購</div>
          </div>
        </div>
      </div>
    </div>
    <div class="section" id="form">
      <div class="container">
        <div class="row">
          <div class="col-12 col-md-8 offset-md-2">
            <div class="form">
              <div class="form-title">聯絡表單</div>
              <div class="row align-items-center mb-20">
                <label for="user-name" class="col-md-3 col-form-label label-title">訂購姓名</label>
                <div class="col-md-9">
                  <input type="text" class="form-control label-input" id="user-name" v-model="formInfo.userName">
                </div>
              </div>
              <div class="row align-items-center mb-20">
                <label for="user-email" class="col-md-3 col-form-label label-title">電子信箱</label>
                <div class="col-md-9">
                  <input type="email" class="form-control label-input" id="user-email" v-model="formInfo.email">
                </div>
              </div>
              <div class="row align-items-center mb-20">
                <label for="user-phone" class="col-md-3 col-form-label label-title">連絡電話</label>
                <div class="col-md-9">
                  <input type="tel" class="form-control label-input" id="user-phone" v-model="formInfo.userPhone">
                </div>
              </div>
              <div class="row align-items-center mb-60">
                <label for="contact" class="col-md-3 col-form-label label-title">留言</label>
                <div class="col-md-9">
                  <textarea class="form-control label-input" id="contact" rows="3" style="resize:none; height:200px" v-model="formInfo.contact"></textarea>
                </div>
              </div>
              <div class="form-btn-group">
                <button type="button" class="form-btn clear text-hover" @click="clearInfo">清空</button>
                <button type="button" class="form-btn send btn-hover" data-bs-toggle="modal" data-bs-target="#myDialog">送出</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="footer">Copyright © 2020</div>

    <!-- Modal -->
    <div class="modal fade" id="myDialog" tabindex="-1" aria-labelledby="myDialogModalLabel" aria-hidden="true" data-bs-backdrop="static" data-bs-keyboard="false">
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
          <div class="modal-header">
            <img src="../assets/logo.png" class="img-fluid dialog-img" alt="">
          </div>
          <div class="modal-body">
            <div class="dialog-info mb-24">感謝您的訂購，十夯提醒您:
            </div>
            <div class="dialog-info mb-16">父母，監護人，或是其他照顧者，不得提供酒類未滿18歲的未成年人，否則將被處以 $10,000 到 $15,000 新台幣的罰款。</div>
            <div class="dialog-info">任何人均不得提供酒類給未滿18歲的人。</div>
          </div>
          <button type="button" class="btn btn-warning check-btn" data-bs-dismiss="modal">我知道了</button>
        </div>
      </div>
    </div>
    <!---->

  </div>
</template>

<script>
import wine1 from "../assets/img01.jpg";
import wine2 from "../assets/img02.jpg";
import wine3 from "../assets/img03.jpg";
import wine4 from "../assets/img04.jpg";

export default {
  data(){
    return {
      vw: window.innerWidth,
      mobileSize: 768,
      wineData: [
        {
          img: wine1,
          title: 'AGOSTÓN 白野豬',
          info01: '清新爽口，酸度適中，帶著輕甜柑橘香氣與豐沛的花香，中間有著大自然礦物氣息，白酒政該如此經典。',
          info02: '清爽的酒香正該搭配清爽的美食，也可以與鹹酥雞作搭配，讓彼此更加分。',
          info03: '容量：750ml',
          info04: '酒精濃度：13%',
          info05: '未滿 18 歲禁止飲酒，也請勿購買！！',
        },
        {
          img: wine2,
          title: 'AGOSTÓN 粉紅豬',
          info01: '輕輕的果香，是野生的蘋果，淡淡的玫瑰中和了源自發酵的丹寧口感，雀躍之中帶著成熟的氣息。',
          info02: '在中餐，不可或缺的粉紅酒，中西合併迸出新滋味。',
          info03: '容量：750ml',
          info04: '酒精濃度：13%',
          info05: '未滿 18 歲禁止飲酒，也請勿購買！！',
        },
        {
          img: wine3,
          title: 'AGOSTÓN 紅野豬',
          info01: '莓果與黑李子的搭配，泛著巧克力甘苦的風味，尾韻飄散著香草的氣息。',
          info02: '相當適合與燒烤一起搭配，冰鎮一下風味更佳。',
          info03: '容量：750ml',
          info04: '酒精濃度：14%',
          info05: '未滿 18 歲禁止飲酒，也請勿購買！！',
        },
        {
          img: wine4,
          title: 'AGOSTÓN 黃野豬',
          info01: '多汁葡萄的口感豐富整個口腔，有著黑櫻桃、黑莓等獨特濃郁水果香，宛如徜徉在森林之境中，舒適輕鬆。',
          info02: '相當適合與口味比較重的餐點一起搭配，冰鎮一下風味更佳。',
          info03: '容量：750ml',
          info04: '酒精濃度：14%',
          info05: '未滿 18 歲禁止飲酒，也請勿購買！！',
        },
      ],
      formInfo: {
        userName: '',
        email: '',
        userPhone: '',
        contact: ''
      }
    }
  },
  metaInfo: {
    title: 'AGOSTÓN 西班牙野豬葡萄酒',
    lang: 'zh-Hant'
  },
  mounted() {
    window.addEventListener('resize', () => {
      this.vw = window.innerWidth
    });
  },
  computed:{
    isMobile(){
      if (this.vw > this.mobileSize) {
        return false
      } else {
        return true
      }
    }
  },
  methods: {
    scroll(){
      document.querySelector("#form").scrollIntoView(true);
    },
    clearInfo () {
      this.formInfo.userName = '';
      this.formInfo.email = '';
      this.formInfo.userPhone = '';
      this.formInfo.contact = '';
    }
  }
}
</script>

<style lang="scss">
@import '../assets/scss/main.scss';

.banner {
  width: 100%;
  height: 0px;
  padding-top: 30%;
  background-image: url('../assets/banner.jpg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}
@media screen and (max-width: 768px) {
  .banner {
    padding-top: 133%;
    background-image: url('../assets/banner_mo.jpg');
  }
}
.section {
  padding: 80px 0;
  position: relative;
}
@media screen and (max-width: 768px) {
  .section {
    padding: 30px 0;
  }
}
.production-area::before {
  display: block;
  content: '';
  width: 50%;
  height: 1px;
  background-color: $ag-gray-dark;
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%)
}
@media screen and (max-width: 768px) {
  .production-area::before {
    width: 80%;
}
}
.section-first::before {
  display: none;
}
.bg-gray {
  background-color: $ag-gray;
}
.title {
  margin-bottom: 24px;
  font-weight: 600;
  font-size: 32px;
  line-height: 150%;
  color: black;
}
@media screen and (max-width: 768px) {
  .title {
    margin-bottom: 16px;
    font-size: 28px;
  }
}
.text {
  font-weight: 400;
  font-size: 18px;
  line-height: 150%;
  color: black;
}
.info-btn {
  display: inline-block;
  padding: 8px 50px;
  background-color: $ag-danger-red;
  color: white;
  cursor: pointer;
  font-weight: 700;
  font-size: 20px;
  line-height: 150%;
}
.form-title {
  font-weight: 700;
  font-size: 32px;
  line-height: 150%;
  color: black;
  margin-bottom: 50px;
  text-align: center;
}
@media screen and (max-width: 768px) {
  .form-title {
    margin-bottom: 26px;
  }
}
.label-title {
  font-weight: 500;
  font-size: 24px;
  line-height: 150%;
  color: black;
  text-align: left;
}
@media screen and (max-width: 768px) {
  .label-title {
    font-size: 20px;
  }
}
.label-input {
  font-weight: 500;
  font-size: 18px;
  line-height: 150%;
  padding: 10px;
  border-radius: 8px;
  border: 1px solid $ag-input-border-color;
}
@media screen and (max-width: 768px) {
  .label-input {
    font-size: 18px;
  }
}
.form-btn-group {
  display: flex;
  justify-content: center;
}
@media screen and (max-width: 768px) {
  .form-btn-group {
    flex-direction: column-reverse;
  }
}
.form-btn{
  padding: 12px 115px;
  border: none;
  font-weight: 400;
  font-size: 24px;
  line-height: 150%;
  &.clear {
    color: #E51818;
    background-color: transparent;
    margin-right: 30px;
  }
  &.send {
  color: white;
  background-color: #E51818;
  }
}
@media screen and (max-width: 768px) {
  .form-btn{
    &.clear {
      margin-right: 0;
    }
    &.send {
      margin-bottom: 20px;
    }
  }
}
.footer {
  font-weight: 500;
  font-size: 12px;
  line-height: 150%;
  background-color: black;
  padding: 20px 0;
  text-align: center;
  color: white;
}
.btn-hover:hover {
  background-color: $ag-danger-hover-red;
}
.text-hover:hover {
  color: $ag-danger-hover-red;
}
.check-btn {
  display: inline-block;
}
.modal-dialog {
  max-width: 620px;
  .modal-header {
    border-bottom: none;
    padding-top: 40px;
    padding-bottom: 20px;
    .dialog-img {
      width: 300px;
      height: 300px;
      display: block;
      margin: 0 auto;
    }
  }
  .modal-body {
    padding: 20px 120px 40px 120px;
  }
  .dialog-info {
    font-weight: 400;
    font-size: 18px;
    line-height: 150%;
    color: black;
    text-align: left;
  }
  .check-btn {
    padding: 10px 40px;
    margin: 0 auto;
    margin-bottom: 40px;
    font-weight: 400;
    font-size: 18px;
    line-height: 150%;
    color: white;
  }
}
@media screen and (max-width: 768px) {
  .modal-dialog {
    max-width: 100%;
    .modal-header {
      padding-bottom: 10px;
      .dialog-img {
        width: 200px;
        height: 200px;
      }
    }
    .modal-body {
      padding: 10px 20px 40px 20px;
    }
    .dialog-info {
      font-size: 16px;
    }
    .check-btn {
      padding: 10px 20px;
      margin: 0 auto;
      margin-bottom: 40px;
    }
  }
}
</style>