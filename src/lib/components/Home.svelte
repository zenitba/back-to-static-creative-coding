<script>
</script>

<div
  class="wave"
></div>
<div id="wrapper">
  <!-- <div id="container">
  
          <h1>SPATWATER</h1>
       
      </div>
  </div> -->
  <div
    class="flex-center"
  >
    <div>
      <div
        class="flex"
      >
        <span
          >S</span
        >
        <span
          >P</span
        >
        <span
          >A</span
        >
        <span
          >T</span
        >
        <span
          >W</span
        >
        <span
          >A</span
        >
        <span
          >T</span
        >
        <span
          >E</span
        >
        <span
          >R</span
        >
      </div>
    </div>
  </div>
</div>

<style>
  .wave,
  .wave::before,
  .wave::after {
    content: "";
    position: absolute;
    top: 70%;
    left: 50%;
    width: 250vw;
    height: 250vw;
    margin-left: -125vw;
    transform-origin: 50%
      50%;
    background-color: transparent;
    border-radius: 38%
      42%;
    box-shadow: inset
      0 0 10vw
      rgba(
        255,
        0,
        247,
        0.8
      );
    animation: spin
      16s infinite
      linear;
    mix-blend-mode: multiply;
  }

  .wave::before {
    width: 105%;
    height: 95%;
    margin-top: -155vw;
    transform-origin: 49%
      51%;
    border-radius: 40%
      38%;
    box-shadow: inset
      0 0 10vw
      rgba(
        225,
        255,
        0,
        0.8
      );
    animation: spin
      13s infinite
      linear;
  }

  .wave::after {
    width: 102%;
    height: 98%;
    margin-top: -155vw;
    transform-origin: 51%
      49%;
    border-radius: 48%
      42%;
    box-shadow: inset
      0 0 10vw
      rgba(
        0,
        255,
        255,
        0.8
      );
    animation: spin
      10s infinite
      linear;
  }

  @keyframes spin {
    100% {
      transform: rotate(
        360deg
      );
    }
  }

  .flex-center {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: absolute;
  }
  .flex {
    display: flex;
  }
  span {
    display: block;
    text-shadow: 0 0
      10px #9f9f9f;
    animation-name: cross-fade-blur;
    animation-duration: 4s;
    animation-iteration-count: infinite;
    font-size: 5rem;
    color: rgb(
      255,
      255,
      255
    );
  }
  span:nth-child(
      1
    ) {
    animation-delay: 0.04s;
  }
  span:nth-child(
      2
    ) {
    animation-delay: 0.08s;
  }
  span:nth-child(
      3
    ) {
    animation-delay: 0.12s;
  }
  span:nth-child(
      4
    ) {
    animation-delay: 0.16s;
  }
  span:nth-child(
      5
    ) {
    animation-delay: 0.2s;
  }
  span:nth-child(
      6
    ) {
    animation-delay: 0.24s;
  }
  span:nth-child(
      7
    ) {
    animation-delay: 0.28s;
  }
  span:nth-child(
      8
    ) {
    animation-delay: 0.32s;
  }
  span:nth-child(
      9
    ) {
    animation-delay: 0.36s;
  }
  span:nth-child(
      10
    ) {
    animation-delay: 0.4s;
  }
  @keyframes cross-fade-blur {
    0% {
      opacity: 0;
      filter: blur(
        1rem
      );
      transform: translate3d(
          0,
          3rem,
          0
        )
        rotate3d(
          0.25,
          -1,
          0,
          66.6deg
        );
    }
    20%,
    60% {
      opacity: 1;
      filter: blur(
        0px
      );
      transform: translate3d(
        0,
        0,
        0
      );
    }
    80%,
    100% {
      opacity: 0;
      filter: blur(
        1rem
      );
      transform: translate3d(
          0,
          -3rem,
          0
        )
        rotate3d(
          -0.25,
          1,
          0,
          66.6deg
        );
    }
  }
</style>
