<template>
  <section class="contactPage">
    <h2>CONTACT</h2>
    <form>
      <div class="contactPage__formControl">
        <label for="email"> Email</label>
        <input type="email" id="email" name="email" placeholder="Email" />
      </div>
      <div class="contactPage__formControl">
        <label for="contactTypeName"> Name:</label>
        <input
          type="text"
          id="contactTypeName"
          name="name"
          placeholder="Name"
        />
      </div>
      <div class="contactPage__formControl">
        <label for="contactPagetextarea"> Write message:</label>
        <textarea
          id="contactPagetextarea"
          rows="10"
          cols="55"
          placeholder="Write Your message..."
        ></textarea>
      </div>
      <base-button>Send message</base-button>
    </form>
  </section>
</template>
<script>
import BaseButton from "../components/common/BaseButton.vue";
export default {
  components: {
    BaseButton,
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
  }
  .contactPage__formControl {
    @include flexColumn;
    margin: 1rem;
    label {
      margin: 1rem;
      font-size: 2rem;
    }
    input {
      width: 30rem;
      height: 4rem;
      border: 1px solid $main-color;
      border-radius: 20px;
      background: none;
      font-size: 2rem;
      text-align: center;
      color: White;
      outline: none;
      &:focus {
        border: 3px solid $main-color;
      }
    }
    textarea {
      padding: 1rem 2rem;
      border: 1px solid $main-color;
      border-radius: 20px;
      background: none;
      font-size: 1.5rem;
      font-family: inherit;
      color: White;
      outline: none;
      &:focus {
        border: 3px solid $main-color;
      }
    }
  }
  button {
    font-size: 2.5rem;
    color: white;
    &:hover {
      color: black;
    }
    p {
      z-index: 1000;
    }
  }
}
</style>