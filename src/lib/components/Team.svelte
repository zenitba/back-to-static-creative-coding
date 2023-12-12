<script>
  import { onMount } from "svelte"

  onMount(() => {
    let swiper =
      new Swiper(
        ".team-container",
        {
          effect:
            "coverflow",
          grabCursor: true,
          centeredSlides: true,
          slidesPerView:
            "auto",
          loop: true,
          spaceBetween: 32,
          coverflowEffect:
            {
              rotate: 0,
            },
        }
      )
  })

  export let data
  console.log(data)
</script>

<section
  class="team section"
>
  <h2
    class="team-title"
  >
    Team
  </h2>

  <div
    class="team-container swiper-container"
  >
    <div
      class="swiper-wrapper"
    >
      <!--==================== MEES ====================-->
      <div
        class="team-card swiper-slide"
      >
        <img
          src="assets/mees1.png"
          alt="foto Mees"
          class="team-img"
        />
        <!-- <img src="assets/mees_water.png" class="hover_img"> -->
        <div
          class="team-text"
        >
          <h2
            class="team-name"
          >
            Mees
          </h2>
          <h3
            class="team-mail"
          >
            m.vmilligen@spatwater.nl
          </h3>
        </div>
      </div>

      <!--==================== JESSE ====================-->
      <div
        class="team-card swiper-slide"
      >
        <img
          src="assets/timo.png"
          alt="foto Mees"
          class="team-img"
        />
        <div
          class="team-text"
        >
          <h2
            class="team-name"
          >
            Timo
          </h2>
          <h3
            class="team-mail"
          >
            t.vdberg@spatwater.nl
          </h3>
        </div>
      </div>

      <!--==================== TIMO ====================-->
      <div
        class="team-card swiper-slide"
      >
        <img
          src="assets/jesse.png"
          alt="foto Mees"
          class="team-img"
        />
        <div
          class="team-text"
        >
          <h2
            class="team-name"
          >
            Jesse
          </h2>
          <h3
            class="team-mail"
          >
            j.schoenmakers@spatwater.nl
          </h3>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- === TEAM ON BIGGER SCREEN === -->

<section
  class="team2 discover"
  id="team2"
>
  <h2
    class="team2-title"
  >
    Team
  </h2>

  <div
    class="team2-wrapper"
  >
    <div
      class="team2-mees"
    >
      <div
        class="personal-information"
      >
        <h3
          class="name"
        >
          Mees
        </h3>
        <h4
          class="mail"
        >
          m.vmilligen@spatwater.nl
        </h4>
      </div>
    </div>

    <div
      class="team2-timo"
    >
      <div
        class="personal-information"
      >
        <h3
          class="name"
        >
          Timo
        </h3>
        <h4
          class="mail"
        >
          t.vdberg@spatwater.nl
        </h4>
      </div>
    </div>

    <div
      class="team2-jesse"
    >
      <div
        class="personal-information"
      >
        <h3
          class="name"
        >
          Jesse
        </h3>
        <h4
          class="mail"
        >
          j.schoenmakers@spatwater.nl
        </h4>
      </div>
    </div>
  </div>
  <!-- De spider-animatie -->
  <div
    class="spider"
  >
    <!-- Het spinnenweb -->
    <div
      class="spiderweb"
    ></div>

    <!-- Het lichaam van de spin -->
    <div
      class="body"
    >
      <!-- De ogen van de spin -->
      <div
        class="eye left"
      ></div>
      <div
        class="eye right"
      ></div>
    </div>

    <!-- De poten van de spin -->
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
</section>

<style>
  section {
    height: 100vh;
    background: white;
  }

  .team2 {
    display: none;
  }

  .team-title {
    padding: 4rem
      2.5rem;
    color: var(
      --spat
    );
  }

  .team {
    position: relative;
    background-color: white;
    height: 100vh;
    padding-top: 6em;
    padding-bottom: 3em;
  }

  .team-container {
    padding: 2em 4em
      2em 4em;
    overflow: hidden;
  }

  .team-card {
    width: 300px;
    height: 240px;
    border-radius: 10px;
  }

  .team-text {
    position: absolute;
    bottom: 1rem;
    left: 1rem;
  }

  .team-name,
  .team-mail {
    color: white;
  }

  .team-mail {
    display: block;
    font-size: 0.75rem;
  }

  .team-img {
    transition: 0.3s;
    width: 100%;
  }

  .team-img:hover {
    transform: scale(
      1.1
    );
  }

  @media screen and (min-width: 720px) {
    .team {
      display: none;
    }

    h2 {
      font-size: 1rem;
      padding: 4rem
        2rem;
    }

    .team2 {
      position: relative;
      background-color: white;
      display: grid;
      padding: 0
        0.4em 4em
        0.4em;
    }

    .team2-title {
      font-size: 2rem;
      color: var(
        --spat
      );
      font-weight: 600;
      padding-top: 4em;
    }

    .team2-wrapper {
      display: grid;
      justify-content: center;
      gap: 2em;
      padding-bottom: 3em;
      margin: 0 auto;
      grid-template-columns: repeat(
        3,
        1fr
      );
    }

    .team2-mees {
      background-image: url("/assets/Mees1_fullscreen.png");
      background-size: 100%;
      background-repeat: no-repeat;
      border-radius: 10px;
      width: 250px;
      height: 300px;
    }

    .team2-timo {
      background-image: url("/assets/Timo1_fullscreen.png");
      background-size: 100%;
      background-repeat: no-repeat;
      border-radius: 10px;
      width: 250px;
      height: 300px;
    }

    .team2-jesse {
      background-image: url("/assets/Jesse1_fullscreen.png");
      background-size: 100%;
      background-repeat: no-repeat;
      border-radius: 10px;
      width: 250px;
      height: 300px;
    }

    .name {
      font-size: 1.5rem;
      display: block;
      color: white;
    }

    .mail {
      font-size: 0.8rem;
      display: block;
      color: white;
    }

    .personal-information {
      margin: 14.5em
        0em 0.3em
        1em;
    }

    .team2-mees:hover {
      background-image: url("/assets/Mees2_fullscreen.png");
      background-size: 100%;
      background-repeat: no-repeat;
      border-radius: 10px;
      width: 250px;
      height: 300px;
      transition: 0.2s
        ease-in;
    }

    .team2-timo:hover {
      background-image: url("/assets/Timo2_fullscreen.png");
      background-size: 100%;
      background-repeat: no-repeat;
      border-radius: 10px;
      width: 250px;
      height: 300px;
      transition: 0.2s
        ease-in;
    }

    .team2-jesse:hover {
      background-image: url("/assets/Jesse2_fullscreen.png");
      background-size: 100%;
      background-repeat: no-repeat;
      border-radius: 10px;
      width: 250px;
      height: 300px;
      transition: 0.2s
        ease-in;
    }

    .spider {
      /* Plaatsing en grootte van de spin */
      position: absolute;
      display: inline-block;
      top: 0;
      left: 30%;
      animation: swing
        2s infinite; /* Animatie van het wiegen */
      transform-origin: top;
      transition: 1s
        ease-in-out; /* Overgang voor bonus effecten */
    }

    /* Het spinnenweb van de spin */
    .spider
      .spiderweb {
      width: 3px;
      height: 200px;
      margin-left: 49px;
      background: rgba(
        207,
        207,
        207,
        0.61
      );
    }

    /* Het lichaam van de spin */
    .spider .body {
      width: 100px;
      height: 80px;
      background: #000;
      position: relative;
      border-radius: 50%;
    }

    /* De ogen van de spin */
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

    /* Het linker oog van de spin */
    .spider
      .body
      .eye.left {
      left: 15px;
    }

    /* Het rechter oog van de spin */
    .spider
      .body
      .eye.right {
      right: 15px;
    }

    /* Stijl van de ogen van de spin */
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
        8s infinite; /* Animatie voor het kijken van de ogen */
    }

    /* De poten van de spin */
    .spider
      .legs
      .leg {
      width: 80px;
      height: 40px;
      margin-top: -20px;
      border: 5px
        solid
        transparent;
      border-top-color: #000;
      border-radius: 40px
        40px 0 0;
    }

    /* Positie en animatie voor de poten van de spin */
    .spider .legs {
      position: absolute;
      bottom: -10%;
      z-index: -1;
    }

    /* Positie van linker poten van de spin */
    .spider
      .legs.left {
      left: -70%;
    }

    /* Positie van rechter poten van de spin */
    .spider
      .legs.right {
      right: -60%;
    }

    /* Stijl en animatie voor de linker poten van de spin */
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
      margin-left: -30px;
    }
    /* 1. Animatie */
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

    /* 2. Animatie */
    @keyframes swing {
      0%,
      100% {
        transform: translateY(
          0
        );
      }

      50% {
        transform: translateY(
          -20px
        );
      }
    }
  }
</style>
