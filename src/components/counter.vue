 <template>
    <div>
        <v-container fluid>
            <section id="hero">  
                <v-parallax dark src="@/assets/img/xx.png" height="380">
                 <vue-particles color="#dedede"></vue-particles>
                    <div class="centered-text">
                        Hello
                    </div>
                </v-parallax>
            </section>
        </v-container>
            

  

        </div>
    </template>
    
    <script>
    export default {
        setup () {
            
    
            return {}
        }
    }
    </script>
    

<style lang="scss">

.particles-js {
  height: 1vh;
}

.centered-text {
  color: #ffffff;
  position: absolute;
  text-align: center;
  top: 10%;
  width: 100%;
}
.circle {
  stroke: white;
  stroke-dasharray: 650;
  stroke-dashoffset: 650;
  -webkit-transition: all 0.5s ease-in-out;
  opacity: 0.3;
}

.playBut {
  /*  border: 1px solid red;*/
  display: inline-block;
  -webkit-transition: all 0.5s ease;

  .triangle {
    -webkit-transition: all 0.7s ease-in-out;
    stroke-dasharray: 240;
    stroke-dashoffset: 480;
    stroke: white;
    transform: translateY(0);
  }

  &:hover {
    .triangle {
      stroke-dashoffset: 0;
      opacity: 1;
      stroke: white;
      animation: nudge 0.7s ease-in-out;

      @keyframes nudge {
        0% {
          transform: translateX(0);
        }
        30% {
          transform: translateX(-5px);
        }
        50% {
          transform: translateX(5px);
        }
        70% {
          transform: translateX(-2px);
        }
        100% {
          transform: translateX(0);
        }
      }
    }

    .circle {
      stroke-dashoffset: 0;
      opacity: 1;
    }
  }
}
</style>