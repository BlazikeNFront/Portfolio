<template>
  <section class="contactPage">
    <h2>CONTACT</h2>
    <form @submit.prevent="sendEmail">
      <div class="contactPage__formControl" @click="clearFormErrors">
        <label for="email"> Email</label>
        <input
          type="email"
          id="email"
          name="user_email"
          placeholder="Email"
          v-model="emailInput.value"
        />
        <p class="contactPage__errorMsg" v-if="emailInput.error">
          {{ emailInput.error }}
        </p>
      </div>
      <div class="contactPage__formControl" @click="clearFormErrors">
        <label for="contactTypeName"> Name:</label>
        <input
          type="text"
          id="contactTypeName"
          name="from_name"
          placeholder="Name"
          v-model="nameInput.value"
        />
        <p class="contactPage__errorMsg" v-if="nameInput.error">
          {{ nameInput.error }}
        </p>
      </div>
      <div class="contactPage__formControl" @click="clearFormErrors">
        <label for="contactPagetextarea"> Write message:</label>
        <textarea
          id="contactPagetextarea"
          name="message"
          rows="10"
          cols="55"
          placeholder="Write Your message..."
          v-model="textareaInput.value"
        ></textarea>
        <p
          class="contactPage__errorMsg contactPage__errorMsg--textarea"
          v-if="textareaInput.error"
        >
          {{ textareaInput.error }}
        </p>
      </div>
      <base-button><p>Send message</p></base-button>
      <div class="contactPage__loader">
        <loader v-if="loader"></loader>
      </div>
    </form>
  </section>
</template>
<script>
import { ref, reactive } from "vue";
import BaseButton from "../components/common/BaseButton.vue";
import Loader from "../components/common/Loader.vue";
import emailjs from "emailjs-com";
export default {
  components: {
    BaseButton,
    Loader,
  },
  setup() {
    const emailInput = reactive({ value: "", error: null });
    const nameInput = reactive({ value: "", error: null });
    const textareaInput = reactive({ value: "", error: null });
    const loader = ref(false);

    function validateForm() {
      const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
      const onlyLettersRegex = /^[A-Z]+$/i;

      if (!emailRegex.test(emailInput.value)) {
        emailInput.error = "Invalid email address";

        return false;
      }
      if (
        nameInput.value.length < 2 ||
        !onlyLettersRegex.test(nameInput.value)
      ) {
        nameInput.error = "Name sholud contain at least 2 letters";
        return false;
      }
      if (textareaInput.value.length < 10) {
        textareaInput.error = "Message is to short";
        return false;
      }

      return true;
    }
    function clearFormErrors() {
      emailInput.error = null;
      nameInput.error = null;
      textareaInput.error = null;
    }
    async function sendEmail(e) {
      try {
        loader.value = true;
        if (validateForm() === false) {
          return;
        }
        console.log("through");
        const result = await emailjs.sendForm(
          "service_mpswptc",
          "template_wpt8ey8",
          e.target,
          "user_gO3TPrj1wOp647TgneuXg"
        );

        if (result) {
          loader.value = false;
        }
      } catch (err) {
        loader.value = false;
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
    };
  },
};
</script>
<style lang="scss">
.contactPage {
  @include flexColumn;
  width: 100%;
  height: 100vh;
  color: White;
  form {
    @include flexColumn;
    position: relative;
    border: 1px solid #63d471;
    border-radius: 20px;
  }

  button {
    font-size: 2.5rem;
    color: white;
    cursor: pointer;
    &:hover {
      color: black;
    }
    p {
      z-index: 1000;
      font-weight: 600;
    }
  }
}
.contactPage__formControl {
  @include flexColumn;
  position: relative;
  margin: 1.5rem;
  label {
    margin: 1rem;
    font-size: 2rem;
  }
  input {
    width: 30rem;
    height: 4rem;
    border: 1px solid $main-color;
    border-radius: 20px;
    background: transparent;
    font-size: 2rem;
    text-align: center;
    color: White;
    outline: none;
    &:focus {
      border: 3px solid $main-color;
    }
  }
  textarea {
    margin-bottom: 3rem;
    padding: 1rem 2rem;
    border: 1px solid $main-color;
    border-radius: 20px;
    background: none;
    font-size: 1.5rem;
    font-family: inherit;
    color: White;
    outline: none;
    resize: none;
    &:focus {
      border: 3px solid $main-color;
    }
  }
}
.contactPage__errorMsg {
  position: absolute;
  bottom: -2.5rem;
  color: #de1e00;
  font-size: 1.7rem;
}
.contactPage__errorMsg--textarea {
  bottom: 0;
}
.contactPage__loader {
  position: absolute;
  bottom: 2rem;
  right: 4rem;
}
</style>