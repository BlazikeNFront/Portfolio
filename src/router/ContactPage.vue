<template>
  <section class="contactPage" @click="clearFormErrors">
    <h2>CONTACT</h2>
    <form @submit.prevent="sendEmail">
      <div class="contactPage__formControl">
        <label for="email"> Email</label>
        <input
          type="email"
          id="email"
          name="user_email"
          placeholder="Email"
          v-model="emailInput.value"
          data-cursor="pointer"
        />
        <p class="contactPage__errorMsg" v-if="emailInput.error">
          {{ emailInput.error }}
        </p>
      </div>
      <div class="contactPage__formControl">
        <label for="contactTypeName"> Name:</label>
        <input
          type="text"
          id="contactTypeName"
          name="from_name"
          placeholder="Name"
          v-model="nameInput.value"
          data-cursor="pointer"
        />
        <p
          class="contactPage__errorMsg contactPage__errorMsg--name"
          v-if="nameInput.error"
        >
          {{ nameInput.error }}
        </p>
      </div>
      <div class="contactPage__formControl">
        <label for="contactPagetextarea"> Write message:</label>
        <textarea
          id="contactPagetextarea"
          name="message"
          rows="10"
          cols="55"
          placeholder="Write Your message..."
          v-model="textareaInput.value"
          data-cursor="pointer"
        ></textarea>
        <p
          class="contactPage__errorMsg contactPage__errorMsg--textarea"
          v-if="textareaInput.error"
        >
          {{ textareaInput.error }}
        </p>
      </div>
      <base-button><span data-cursor="pointer">Send message</span></base-button>
      <div class="contactPage__loader" v-if="loader">
        <contact-loader></contact-loader>
      </div>
    </form>
    <transition name="contactResult">
      <div class="contactPage__requestResult" v-if="requestResult">
        <p v-if="requestResult === 1">
          Message sent ! I'll try to respond as quick as possible
          <font-awesome-icon
            :icon="['fas', 'smile-beam']"
            class="contactPage__resultIcon"
          ></font-awesome-icon>
          Have a good day !
        </p>
        <p v-else>'Error occuered. Try again later'</p>
      </div></transition
    >
  </section>
</template>
<script>
import { ref, reactive } from "vue";
import BaseButton from "../components/common/BaseButton.vue";
import ContactLoader from "../components/ContactPage/ContactLoader.vue";
import emailjs from "emailjs-com";
export default {
  components: {
    BaseButton,
    ContactLoader,
  },
  setup() {
    const emailInput = reactive({ value: "", error: null });
    const nameInput = reactive({ value: "", error: null });
    const textareaInput = reactive({ value: "", error: null });
    const loader = ref(false);
    const requestResult = ref(null);
    function validateForm() {
      const emailRegex =
        /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
      const onlyLettersRegex = /^[a-zA-Z\s]*$/;

      if (!emailRegex.test(emailInput.value)) {
        emailInput.error = "Invalid email address";

        return false;
      }
      if (
        nameInput.value.length < 2 ||
        !onlyLettersRegex.test(nameInput.value)
      ) {
        nameInput.error = "Name should contain at least 2 letters";
        return false;
      }
      if (textareaInput.value.length < 10) {
        textareaInput.error = "Message is too short";
        return false;
      }

      return true;
    }
    function clearFormErrors() {
      emailInput.error = null;
      nameInput.error = null;
      textareaInput.error = null;
      requestResult.value = null;
    }
    async function sendEmail(e) {
      try {
        loader.value = true;
        if (validateForm() === false) {
          loader.value = false;
          return;
        }

        const result = await emailjs.sendForm(
          "service_mpswptc",
          "template_wpt8ey8",
          e.target,
          "user_gO3TPrj1wOp647TgneuXg"
        );

        if (result) {
          loader.value = false;
          requestResult.value = 1;
        }
        emailInput.value = "";
        nameInput.value = "";
        textareaInput.value = "";
      } catch (err) {
        loader.value = false;
        requestResult.value = 0;
      }
    }
    return {
      emailInput,
      nameInput,
      textareaInput,
      validateForm,
      sendEmail,
      clearFormErrors,
      loader,
      requestResult,
    };
  },
};
</script>
<style lang="scss">
.contactPage {
  @include flexColumn;
  margin: 6rem 0 2rem 0;
  width: 100%;
  color: White;

  form {
    @include flexColumn;
    position: relative;
    margin: 2rem 0;
    padding: 2rem 0 8rem 0;
    width: 30rem;
    height: 70rem;
    border: 1px solid #63d471;
    border-radius: 20px;
    justify-content: space-evenly;
  }
  .baseButton {
    height: 5rem;
  }
  button {
    font-size: 2rem;
    color: white;

    &:hover {
      color: black;
    }
    span {
      z-index: 1000;
      font-weight: 600;
    }
    &:focus {
      outline: none;
      border: 3px solid $neon-green;
    }
  }
}
.contactPage__formControl {
  @include flexColumn;
  position: relative;
  margin: 1rem;
  label {
    margin: 1rem;
    font-size: 2rem;
  }
  input {
    width: 27rem;
    height: 4rem;
    border: 1px solid $neon-green;
    border-radius: 20px;
    background: transparent;
    font-size: 2rem;
    text-align: center;
    color: White;
    outline: none;
    &:focus {
      border: 3px solid $neon-green;
    }
    &:hover {
      cursor: none;
    }
  }
  textarea {
    margin-bottom: 3rem;
    width: 25rem;
    padding: 1rem 2rem;
    border: 1px solid $neon-green;
    border-radius: 20px;
    background: none;
    font-size: 1.5rem;
    font-family: inherit;
    color: White;
    outline: none;
    resize: none;
    &:focus {
      border: 3px solid $neon-green;
    }
    &:hover {
      cursor: none;
    }
  }
}
.contactPage__errorMsg {
  position: absolute;
  width: 100%;
  bottom: -2.5rem;
  color: #de1e00;
  text-align: center;
}
.contactPage__errorMsg--name {
  bottom: -2.5rem;
  text-align: center;
  font-size: 1.5rem;
}
.contactPage__errorMsg--textarea {
  bottom: 0;
}
.contactPage__loader {
  position: absolute;
  bottom: -0.5rem;
  left: 50%;
  transform: translate(-50%);
}
.contactPage__requestResult {
  @include flexColumn;
  position: fixed;
  bottom: 0rem;
  width: 100%;
  height: 7rem;
  border-radius: 15px 15px 0 0;
  background-color: $neon-green;
  justify-content: space-evenly;
  z-index: 2000;

  p {
    margin: 0 auto;
    width: 90%;
    color: black;
    font-size: 2.1rem;
    text-align: center;
  }
}
.contactPage__resultIcon {
  width: 2rem;
}
@media (min-width: 350px) {
  .contactPage {
    form {
      width: 30rem;
    }
  }
  .contactPage__formControl {
    input {
      width: 30rem;
    }
  }
  .contactPage__formControl {
    textarea {
      width: 90%;
    }
  }
}
@media (min-width: 425px) {
  .contactPage {
    form {
      width: 40rem;
    }
  }
}
@media (min-width: 768px) {
  .contactPage {
    margin-top: 4rem;
    form {
      padding: 2rem 0 1rem 0;
      width: 55rem;
      height: 65rem;
    }
    button {
      width: 30rem;
      padding: 1rem;
    }
  }
  .contactPage__loader {
    position: absolute;
    bottom: 0;
    left: auto;
    right: 2rem;
    transform: translate(0);
  }
  .contactPage__requestResult {
    bottom: 0rem;
    width: 55rem;
    height: 6rem;
    border-radius: 50px 50px 0 0;
    background-color: $neon-green;
    z-index: 2000;
    p {
      color: black;
      font-size: 2.5rem;
    }
  }
}
@media (min-width: 1024px) {
  .contactPage__requestResult {
    width: 70rem;
  }
}
@media (min-width: 1440px) {
  .contactPage {
    @include flexColumn;
    justify-content: space-evenly;
    margin: 2rem 1rem;
    width: 100%;
    height: 100%;

    form {
      width: 90rem;
      height: 75rem;
    }
  }
  .contactPage__formControl {
    label {
      font-size: 3rem;
    }
    input {
      width: 40rem;
      height: 5rem;
      font-size: 2.5rem;
    }
    textarea {
      margin-bottom: 2rem;
      width: 60rem;
      height: 25rem;
      font-size: 2rem;
    }
  }
  .contactPage__errorMsg--textarea {
    bottom: -1rem;
  }
  .contactPage__loader {
    position: absolute;
    bottom: 0.5rem;
    right: 18rem;
  }
}

.contactResult-enter-active {
  transition: all 0.5s ease-out;
}
.contactResult-leave-active {
  transition: all 0.5s ease-in;
}
.contactResult-enter-from,
.contactResult-leave-to {
  transform: translateY(100%);
}
.contactResult-leave-from,
.contactResult-enter-to {
  transform: translateY(0%);
}
</style>