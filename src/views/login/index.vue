<script setup>
import CryptoJS from 'crypto-js'
import { ref, reactive, computed } from 'vue'
import { useRouter } from 'vue-router';
import { UseDarkState } from '@/store/darkState.js'
import { UseLoginState } from '@/store/loginState.js'
import { UseTitleState } from '@/store/webTitle.js'
import { UseProgressState } from '@/store/progressState.js'
import { login } from '@/api/permission'
import mode from '@/components/mode'




const darkStore = UseDarkState()
const titleStore = UseTitleState()
const loginStore = UseLoginState()
const progressStore = UseProgressState()

let formData = reactive({
  username: "",
  password: "",
})
const router = useRouter()
let remember = ref(false);
let loadingState = ref(false)
let passwordDisplay = ref(true)
let errorTip = ref(false)
let progressFixed = computed(() => {
  return progressStore.progress / 100
})
async function handleLogin() {
  const { username, password } = formData
  if (username !== '' && password != '') {
    loadingState.value = true
    progressStore.status = true
    const loginInfo = Object.assign({}, formData)
    loginInfo.password = CryptoJS.SHA224(loginInfo.password).toString()
    try {
      const data = await login(loginInfo)
      progressStore.status = false
      loginStore.localToken(data.token)
      setTimeout(() => {
        router.push('/')
      }, 500)
    } catch (error) {
      loadingState.value = false
      errorTip.value = true
      setTimeout(() => {
        errorTip.value = false
      }, 2500)
    }
  }
}//登录接口
</script>
<template>
  <div class="fullscreen row justify-center items-center gt-sm  acrylic ">

    <div class="q-ma-xl loginWindow" >
      <q-responsive :ratio="5/3">
        <div class="row login">
          <div class="row col-6 bg-grey-6 full-height justify-center">
            <q-img class="full-height" :style="{ 'filter': darkStore.dark ? 'blur(0px) grayscale(20%)' : '' }"
              fit="cover" position="0 0"
              :src="darkStore.dark ? 'src/assets/pic/login_dark.jpg' : 'src/assets/pic/login.jpg'" loading="eager">
            </q-img>
          </div>
          <div class="col-6 relative-position full-height form">
            <mode class="float-right q-ma-lg" />
            <q-form class="absolute-center q-pb-xl" style="width: 65%;" @submit="handleLogin">
              <div>
                <div class="q-pb-lg full-width text-center text-h4 text-weight-medium  text-capitalize"
                  style="letter-spacing: 4px;">
                  <q-skeleton square v-if="!titleStore.webTitle" animation="fade" />
                  {{ titleStore.webTitle }}
                </div>
              </div>

              <q-input v-model="formData.username" class="q-pb-lg full-width" label="username" lazy-rules
                :rules="[val => !!val || '用户名不能为空']">
                <template v-slot:prepend>
                  <q-icon :name="passwordDisplay ? 'sentiment_very_dissatisfied' : 'sentiment_very_satisfied'"
                    @click="passwordDisplay = !passwordDisplay" />
                </template>
                <template v-slot:append>
                  <q-icon v-if="formData.username != ''" name="close" @click="formData.username = ''"
                    class="cursor-pointer" />
                </template>
              </q-input>
              <q-input v-model="formData.password" bottom-slots class="q-pb-md full-width" label="password"
                :type="passwordDisplay ? 'password' : 'text'" :rules="[val => !!val || '密码不能为空']" lazy-rules>
                <template v-slot:prepend>
                  <q-icon name="vpn_key" />
                </template>
                <template v-slot:append>
                  <q-icon v-if="formData.password != ''" name="close" @click="formData.password = ''"
                    class="cursor-pointer" />
                </template>
              </q-input>
              <div class="row items-center q-mb-md">
                <q-toggle label="保持登录" v-model="remember" class="q-pb-md no-margin no-padding" />
                <q-space></q-space>
                <span class="text-red-13 cursor-pointer">忘记密码</span>
              </div>
              <TransitionGroup name="login" tag="div" style="position: relative;">
                <div class="row absolute items-center full-height full-width" v-if="!errorTip">
                  <q-btn :loading="loadingState" outline color="red-13" class="col-12" unelevated size="md"
                    type="submit" style="overflow: hidden;">
                    登录
                    <template v-slot:loading>
                      <q-linear-progress stripe animation-speed="300" rounded
                        style="height: 90%; margin: 0 2px -1px 2px;" :value="progressFixed" color="red" />
                    </template>
                  </q-btn>
                </div>
                <q-banner class="absolute full-height" style="background-color: transparent; margin-top: -10px;"
                  v-if="errorTip">
                  <template v-slot:avatar>
                    <q-icon name="sentiment_very_dissatisfied" color="primary" />
                  </template>
                  您的账户或者密码有误,请重新登录
                </q-banner>
              </TransitionGroup>
            </q-form>
          </div>
        </div>
      </q-responsive>

    </div>
  </div>




</template>

<style lang='scss' scoped>
.login {
  height: 100%;
}

.slanted {
  height: 100%;
  width: 100%;
  transform: rotate(45deg);
  z-index: 0;
}

.loginWindow {
  overflow: hidden;
  min-width: 1050px;
  width: 40%;
  border-radius: 8px;
  box-shadow: 9px 9px 9px rgba(0, 0, 0, 0.4);
}

.acrylic {
  background-color: rgba(235, 235, 235, 0.4);
  background-image: url('/src/assets/utils/dark.svg');
  background-size: cover;
  background-repeat: no-repeat;
}

.form {
  background-image: url(@/assets/utils/skulls.png);
}

.login-enter-active,
.login-leave-active {
  transition: all 0.5s ease;
}

.login-enter-from,
.login-leave-to {
  transform: translateX(300px);
  opacity: 0;

}
</style>