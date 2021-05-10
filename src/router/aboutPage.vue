<template>
  <section class="aboutMePage">
    <article>
      <h2>About Me</h2>
      <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged. It was popularised in the 1960s with the release
        of Letraset sheets containing Lorem Ipsum passages, and more recently
        with desktop publishing software like Aldus PageMaker including versions
        of Lorem Ipsum.
      </p>
    </article>
    <div class="aboutMePage__iconWrapper">
      <svg
        width="256px"
        height="221px"
        viewBox="0 0 256 221"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        preserveAspectRatio="xMidYMid"
      >
        <g>
          <path
            d="M204.8,0 L256,0 L128,220.8 L0,0 L50.56,0 L97.92,0 L128,51.2 L157.44,0 L204.8,0 Z"
            fill="#41B883"
          ></path>
          <path
            d="M0,0 L128,220.8 L256,0 L204.8,0 L128,132.48 L50.56,0 L0,0 Z"
            fill="#41B883"
          ></path>
          <path
            d="M50.56,0 L128,133.12 L204.8,0 L157.44,0 L128,51.2 L97.92,0 L50.56,0 Z"
            fill="#35495E"
          ></path>
        </g>
      </svg>
    </div>
  </section>
</template>
<style lang='scss'>
.aboutMePage {
  @include flexRow;
  height: 100vh;
  padding: 2rem;
  color: White;
  width: 50%;
  article {
    @include flexColumn;
    height: 100%;
    justify-content: space-evenly;

    h2 {
      font-size: 9rem;
      font-weight: 900;
      text-align: center;
    }
  }
}
.aboutMePage__iconWrapper {
  width: 50%;
}
</style>