<script>
</script>

<main>
  <h1 class="title">
    SPATWATER
  </h1>

  <img
    src="assets/eng.jpg"
    alt="scary-image"
    class="hero-image"
  />
  <div
    class="hero-text"
  >
    <!-- Hero Text -->
    <p>
      OVER SPATWATER
      OVER SPATWATER
      OVER
    </p>
  </div>
  <!-- Spider -->
  <div
    class="spider"
  >
    <!-- Spider Web -->
    <div
      class="spiderweb"
    ></div>

    <!-- Spider Body -->
    <div
      class="body"
    >
      <!-- Spider Eyes -->
      <div
        class="eye left"
      ></div>
      <div
        class="eye right"
      ></div>
    </div>

    <!-- Spider Legs -->
    <div
      class="legs left"
    >
      <div
        class="leg"
      ></div>
      <div
        class="leg"
      ></div>
      <div
        class="leg"
      ></div>
    </div>
    <div
      class="legs right"
    >
      <div
        class="leg"
      ></div>
      <div
        class="leg"
      ></div>
      <div
        class="leg"
      ></div>
    </div>
  </div>
  <!-- Marquee -->
  <!-- svelte-ignore a11y-distracting-elements -->
  <marquee
    width="100%"
    direction="left"
  >
    <span
      >EEN NIEUWE
      GENERATIE
      HYDROLGEN</span
    >
    <span
      >CONCREET OP
      WATER EN BODEM</span
    >
    <span
      >WIJ ZIJN
      SPATWATER</span
    >
  </marquee>
</main>

<style>
  /* Title */
  h1 {
    font-size: 9rem;
    color: white;
    text-align: center;
    font-family: fantasy
      Papyrusb;
    font-weight: 700;
  }

  /* Hero Image */
  .hero-image {
    background-image: linear-gradient(
        rgba(
          0,
          0,
          0,
          0.5
        ),
        rgba(
          0,
          0,
          0,
          0.5
        )
      ),
      url("assets/eng.jpg");
    height: 500px;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    position: relative;
    filter: grayscale(
      0.5
    );
    width: 100%;
    z-index: -1;
  }

  /* Hero Text */
  .hero-text p {
    position: absolute;
    top: 20%;
    left: 50%;
    width: 1300px;
    color: white;
    font-weight: 600;
    font-size: 3.5rem;
    font-family: Papyrus;
    display: inline-block;
    text-align: center;
    transform: rotate(
      -90deg
    );
  }

  /* Spider */
  .spider {
    position: absolute;
    display: inline-block;
    top: 0;
    left: 10%;
    animation: swing
      2s infinite;
    transform-origin: top;
    transition: 1s
      ease-in-out;
    z-index: 200px;
  }

  .spider
    .spiderweb {
    width: 3px;
    height: 290px;
    margin-left: 49px;
    background: rgba(
      207,
      207,
      207,
      0.61
    );
  }

  .spider .body {
    width: 100px;
    height: 80px;
    background: #000;
    position: relative;
    border-radius: 50%;
  }

  .spider
    .body
    .eye {
    width: 33px;
    height: 33px;
    position: absolute;
    bottom: 20px;
    background: #fff;
    border-radius: 50%;
  }

  .spider
    .body
    .eye.left {
    left: 15px;
  }

  .spider
    .body
    .eye.right {
    right: 15px;
  }

  .spider
    .body
    .eye:after {
    background: #000;
    width: 7px;
    height: 7px;
    content: "";
    display: block;
    margin: 55%;
    border-radius: 50%;
    animation: look
      8s infinite;
  }

  .spider
    .legs
    .leg {
    width: 80px;
    height: 40px;
    margin-top: -15px;
    border: 5px
      solid
      transparent;
    border-top-color: #000;
    border-radius: 40px
      40px 0 0;
  }

  .spider .legs {
    position: absolute;
    bottom: -10%;
    z-index: -1;
  }

  .spider
    .legs.left {
    left: -70%;
  }

  .spider
    .legs.right {
    right: -60%;
  }

  .legs.left
    .leg:nth-child(
      1
    ) {
    transform: rotate(
      10deg
    );
    margin-left: 10px;
  }

  .legs.right
    .leg:nth-child(
      1
    ) {
    transform: rotate(
      -10deg
    );
    margin-left: -10px;
  }

  .legs.left
    .leg:nth-child(
      2
    ) {
    transform: rotate(
      -20deg
    );
    margin-left: 20px;
  }

  .legs.right
    .leg:nth-child(
      2
    ) {
    transform: rotate(
      20deg
    );
    margin-left: -20px;
  }

  .legs.left
    .leg:nth-child(
      3
    ) {
    transform: rotate(
      -50deg
    );
    margin-left: 30px;
  }

  .legs.right
    .leg:nth-child(
      3
    ) {
    transform: rotate(
      50deg
    );
    margin-left: -40px;
  }

  @keyframes look {
    0%,
    40%,
    100% {
      transform: translateX(
        0
      );
    }

    45%,
    95% {
      transform: translateX(
        -110%
      );
    }
  }

  @keyframes swing {
    0%,
    100% {
      transform: translateY(
        0px
      );
    }
    33% {
      transform: translateY(
        -200px
      );
    }
    66% {
      transform: translateY(
        -600px
      );
    }
  }

  /* Spider Animation */
  /* ... */

  /* Marquee */
  marquee {
    font-size: 3rem;
    font-weight: 700;
    background-color: #ffffff;
    color: #000000;
    padding: 6px 0;
    width: 100vw;
    flex-shrink: 0;
  }

  /* Media Queries */

  /* Tablets */
  @media screen and (max-width: 1023px) and (min-width: 768px) {
    h1 {
      font-size: 10rem;
    }

    .hero-image {
      height: 50%;
    }

    .hero-text p {
      display: none;
    }

    .spider {
      display: none; /* Hide spider on tablets */
    }

    marquee {
      font-size: 2rem;
    }
  }

  /* Mobile */
  @media screen and (max-width: 767px) {
    main {
      margin: 5px; /* Adjust body margin for mobile */
    }

    h1 {
      font-size: 2rem;
    }

    .hero-image {
      height: 85%;
    }

    .hero-text p {
      display: none;
    }

    .spider {
      display: none; /* Hide spider on mobile */
    }

    marquee {
      font-size: 1.5rem;
    }
  }
</style>
