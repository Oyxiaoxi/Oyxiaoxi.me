<template>
  <div v-for="(item, index) in 14" :key="index" class="firefly" />
</template>

<style scoped>
.firefly {
  position: fixed;
  left: 50%;
  top: 50%;
  width: 0.4vw;
  height: 0.4vw;
  margin: -0.2vw 0 0 9.8vw;
  animation: ease 200s alternate infinite;
  pointer-events: none;
}
.firefly::before, .firefly::after {
  content: "";
  position: absolute;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  transform-origin: -10vw;
}
.firefly::before {
  background: black;
  opacity: 0.4;
  animation: drift ease alternate infinite;
}
.firefly::after {
  background: white;
  opacity: 0;
  box-shadow: 0 0 0vw 0vw yellow;
  animation: drift ease alternate infinite, flash ease infinite;
}

.firefly:nth-child(1) {
  animation-name: move1;
}
.firefly:nth-child(1)::before {
  animation-duration: 12s;
}
.firefly:nth-child(1)::after {
  animation-duration: 12s, 5114ms;
  animation-delay: 0ms, 3520ms;
}

@keyframes move1 {
  0% {
    transform: translateX(11vw) translateY(-32vh) scale(0.43);
  }
  4.347826087% {
    transform: translateX(41vw) translateY(0vh) scale(0.27);
  }
  8.6956521739% {
    transform: translateX(29vw) translateY(1vh) scale(0.61);
  }
  13.0434782609% {
    transform: translateX(-20vw) translateY(11vh) scale(0.97);
  }
  17.3913043478% {
    transform: translateX(38vw) translateY(19vh) scale(0.58);
  }
  21.7391304348% {
    transform: translateX(4vw) translateY(26vh) scale(0.87);
  }
  26.0869565217% {
    transform: translateX(22vw) translateY(50vh) scale(0.56);
  }
  30.4347826087% {
    transform: translateX(30vw) translateY(12vh) scale(0.74);
  }
  34.7826086957% {
    transform: translateX(-21vw) translateY(32vh) scale(0.93);
  }
  39.1304347826% {
    transform: translateX(-12vw) translateY(-4vh) scale(0.76);
  }
  43.4782608696% {
    transform: translateX(2vw) translateY(0vh) scale(0.32);
  }
  47.8260869565% {
    transform: translateX(21vw) translateY(-41vh) scale(0.32);
  }
  52.1739130435% {
    transform: translateX(-21vw) translateY(26vh) scale(0.76);
  }
  56.5217391304% {
    transform: translateX(34vw) translateY(-27vh) scale(0.51);
  }
  60.8695652174% {
    transform: translateX(30vw) translateY(-24vh) scale(0.29);
  }
  65.2173913043% {
    transform: translateX(23vw) translateY(22vh) scale(0.66);
  }
  69.5652173913% {
    transform: translateX(-3vw) translateY(5vh) scale(0.58);
  }
  73.9130434783% {
    transform: translateX(49vw) translateY(23vh) scale(0.97);
  }
  78.2608695652% {
    transform: translateX(-36vw) translateY(44vh) scale(0.32);
  }
  82.6086956522% {
    transform: translateX(-41vw) translateY(-47vh) scale(0.66);
  }
  86.9565217391% {
    transform: translateX(13vw) translateY(-8vh) scale(0.61);
  }
  91.3043478261% {
    transform: translateX(-1vw) translateY(50vh) scale(0.41);
  }
  95.652173913% {
    transform: translateX(13vw) translateY(6vh) scale(0.32);
  }
  100% {
    transform: translateX(44vw) translateY(49vh) scale(0.27);
  }
}
.firefly:nth-child(2) {
  animation-name: move2;
}
.firefly:nth-child(2)::before {
  animation-duration: 10s;
}
.firefly:nth-child(2)::after {
  animation-duration: 10s, 5376ms;
  animation-delay: 0ms, 4847ms;
}

@keyframes move2 {
  0% {
    transform: translateX(14vw) translateY(-3vh) scale(0.46);
  }
  5.2631578947% {
    transform: translateX(8vw) translateY(3vh) scale(0.63);
  }
  10.5263157895% {
    transform: translateX(26vw) translateY(-40vh) scale(0.82);
  }
  15.7894736842% {
    transform: translateX(37vw) translateY(35vh) scale(0.77);
  }
  21.0526315789% {
    transform: translateX(-41vw) translateY(-24vh) scale(0.78);
  }
  26.3157894737% {
    transform: translateX(-44vw) translateY(-9vh) scale(0.56);
  }
  31.5789473684% {
    transform: translateX(-17vw) translateY(3vh) scale(0.99);
  }
  36.8421052632% {
    transform: translateX(40vw) translateY(-34vh) scale(0.74);
  }
  42.1052631579% {
    transform: translateX(36vw) translateY(0vh) scale(0.86);
  }
  47.3684210526% {
    transform: translateX(-48vw) translateY(-14vh) scale(0.73);
  }
  52.6315789474% {
    transform: translateX(8vw) translateY(-8vh) scale(0.52);
  }
  57.8947368421% {
    transform: translateX(-16vw) translateY(33vh) scale(0.89);
  }
  63.1578947368% {
    transform: translateX(-36vw) translateY(48vh) scale(0.27);
  }
  68.4210526316% {
    transform: translateX(26vw) translateY(-25vh) scale(0.77);
  }
  73.6842105263% {
    transform: translateX(19vw) translateY(41vh) scale(0.69);
  }
  78.9473684211% {
    transform: translateX(-27vw) translateY(-28vh) scale(0.74);
  }
  84.2105263158% {
    transform: translateX(31vw) translateY(-11vh) scale(0.65);
  }
  89.4736842105% {
    transform: translateX(-41vw) translateY(12vh) scale(0.92);
  }
  94.7368421053% {
    transform: translateX(-45vw) translateY(-38vh) scale(0.96);
  }
  100% {
    transform: translateX(-12vw) translateY(27vh) scale(0.66);
  }
}
.firefly:nth-child(3) {
  animation-name: move3;
}
.firefly:nth-child(3)::before {
  animation-duration: 12s;
}
.firefly:nth-child(3)::after {
  animation-duration: 12s, 8688ms;
  animation-delay: 0ms, 5569ms;
}

@keyframes move3 {
  0% {
    transform: translateX(-4vw) translateY(-8vh) scale(0.47);
  }
  4.1666666667% {
    transform: translateX(-28vw) translateY(21vh) scale(0.63);
  }
  8.3333333333% {
    transform: translateX(-6vw) translateY(-5vh) scale(0.88);
  }
  12.5% {
    transform: translateX(1vw) translateY(-42vh) scale(0.66);
  }
  16.6666666667% {
    transform: translateX(-39vw) translateY(-16vh) scale(0.61);
  }
  20.8333333333% {
    transform: translateX(15vw) translateY(-33vh) scale(0.64);
  }
  25% {
    transform: translateX(-14vw) translateY(22vh) scale(0.89);
  }
  29.1666666667% {
    transform: translateX(21vw) translateY(-8vh) scale(0.54);
  }
  33.3333333333% {
    transform: translateX(15vw) translateY(42vh) scale(0.46);
  }
  37.5% {
    transform: translateX(4vw) translateY(28vh) scale(0.44);
  }
  41.6666666667% {
    transform: translateX(29vw) translateY(-26vh) scale(0.31);
  }
  45.8333333333% {
    transform: translateX(17vw) translateY(33vh) scale(0.27);
  }
  50% {
    transform: translateX(46vw) translateY(19vh) scale(0.72);
  }
  54.1666666667% {
    transform: translateX(-27vw) translateY(16vh) scale(0.39);
  }
  58.3333333333% {
    transform: translateX(-31vw) translateY(2vh) scale(0.36);
  }
  62.5% {
    transform: translateX(-11vw) translateY(-7vh) scale(0.47);
  }
  66.6666666667% {
    transform: translateX(48vw) translateY(35vh) scale(0.64);
  }
  70.8333333333% {
    transform: translateX(9vw) translateY(23vh) scale(0.65);
  }
  75% {
    transform: translateX(-44vw) translateY(-39vh) scale(0.26);
  }
  79.1666666667% {
    transform: translateX(-30vw) translateY(27vh) scale(0.71);
  }
  83.3333333333% {
    transform: translateX(-1vw) translateY(-22vh) scale(0.88);
  }
  87.5% {
    transform: translateX(-37vw) translateY(45vh) scale(0.74);
  }
  91.6666666667% {
    transform: translateX(47vw) translateY(-42vh) scale(0.82);
  }
  95.8333333333% {
    transform: translateX(-46vw) translateY(-33vh) scale(0.7);
  }
  100% {
    transform: translateX(-41vw) translateY(28vh) scale(0.48);
  }
}
.firefly:nth-child(4) {
  animation-name: move4;
}
.firefly:nth-child(4)::before {
  animation-duration: 16s;
}
.firefly:nth-child(4)::after {
  animation-duration: 16s, 10400ms;
  animation-delay: 0ms, 5890ms;
}

@keyframes move4 {
  0% {
    transform: translateX(4vw) translateY(25vh) scale(0.54);
  }
  3.5714285714% {
    transform: translateX(23vw) translateY(7vh) scale(0.98);
  }
  7.1428571429% {
    transform: translateX(-22vw) translateY(6vh) scale(0.73);
  }
  10.7142857143% {
    transform: translateX(42vw) translateY(0vh) scale(0.63);
  }
  14.2857142857% {
    transform: translateX(-8vw) translateY(-20vh) scale(0.29);
  }
  17.8571428571% {
    transform: translateX(-4vw) translateY(20vh) scale(0.95);
  }
  21.4285714286% {
    transform: translateX(37vw) translateY(-12vh) scale(0.35);
  }
  25% {
    transform: translateX(-10vw) translateY(29vh) scale(0.72);
  }
  28.5714285714% {
    transform: translateX(-31vw) translateY(-15vh) scale(0.75);
  }
  32.1428571429% {
    transform: translateX(-41vw) translateY(-16vh) scale(0.57);
  }
  35.7142857143% {
    transform: translateX(-20vw) translateY(28vh) scale(0.38);
  }
  39.2857142857% {
    transform: translateX(37vw) translateY(33vh) scale(0.4);
  }
  42.8571428571% {
    transform: translateX(9vw) translateY(49vh) scale(0.55);
  }
  46.4285714286% {
    transform: translateX(-19vw) translateY(-34vh) scale(0.76);
  }
  50% {
    transform: translateX(49vw) translateY(-24vh) scale(0.77);
  }
  53.5714285714% {
    transform: translateX(9vw) translateY(43vh) scale(0.97);
  }
  57.1428571429% {
    transform: translateX(-9vw) translateY(31vh) scale(0.3);
  }
  60.7142857143% {
    transform: translateX(48vw) translateY(10vh) scale(0.34);
  }
  64.2857142857% {
    transform: translateX(32vw) translateY(-15vh) scale(0.28);
  }
  67.8571428571% {
    transform: translateX(-30vw) translateY(-12vh) scale(0.7);
  }
  71.4285714286% {
    transform: translateX(28vw) translateY(21vh) scale(0.43);
  }
  75% {
    transform: translateX(41vw) translateY(-12vh) scale(0.42);
  }
  78.5714285714% {
    transform: translateX(4vw) translateY(-49vh) scale(0.57);
  }
  82.1428571429% {
    transform: translateX(-10vw) translateY(-47vh) scale(0.35);
  }
  85.7142857143% {
    transform: translateX(50vw) translateY(-35vh) scale(1);
  }
  89.2857142857% {
    transform: translateX(39vw) translateY(-7vh) scale(0.56);
  }
  92.8571428571% {
    transform: translateX(-18vw) translateY(-49vh) scale(0.45);
  }
  96.4285714286% {
    transform: translateX(-20vw) translateY(36vh) scale(0.59);
  }
  100% {
    transform: translateX(-25vw) translateY(-25vh) scale(0.6);
  }
}
.firefly:nth-child(5) {
  animation-name: move5;
}
.firefly:nth-child(5)::before {
  animation-duration: 13s;
}
.firefly:nth-child(5)::after {
  animation-duration: 13s, 6556ms;
  animation-delay: 0ms, 5392ms;
}

@keyframes move5 {
  0% {
    transform: translateX(-8vw) translateY(-12vh) scale(0.93);
  }
  5.8823529412% {
    transform: translateX(44vw) translateY(-32vh) scale(0.27);
  }
  11.7647058824% {
    transform: translateX(-25vw) translateY(-48vh) scale(0.45);
  }
  17.6470588235% {
    transform: translateX(-11vw) translateY(38vh) scale(0.42);
  }
  23.5294117647% {
    transform: translateX(28vw) translateY(-34vh) scale(0.35);
  }
  29.4117647059% {
    transform: translateX(-23vw) translateY(36vh) scale(0.65);
  }
  35.2941176471% {
    transform: translateX(-46vw) translateY(-43vh) scale(0.52);
  }
  41.1764705882% {
    transform: translateX(-22vw) translateY(-47vh) scale(0.89);
  }
  47.0588235294% {
    transform: translateX(-15vw) translateY(-16vh) scale(0.28);
  }
  52.9411764706% {
    transform: translateX(27vw) translateY(-8vh) scale(0.29);
  }
  58.8235294118% {
    transform: translateX(-16vw) translateY(49vh) scale(0.74);
  }
  64.7058823529% {
    transform: translateX(-19vw) translateY(5vh) scale(0.5);
  }
  70.5882352941% {
    transform: translateX(36vw) translateY(-13vh) scale(0.69);
  }
  76.4705882353% {
    transform: translateX(17vw) translateY(48vh) scale(0.3);
  }
  82.3529411765% {
    transform: translateX(8vw) translateY(1vh) scale(0.46);
  }
  88.2352941176% {
    transform: translateX(43vw) translateY(37vh) scale(0.71);
  }
  94.1176470588% {
    transform: translateX(-2vw) translateY(-47vh) scale(0.81);
  }
  100% {
    transform: translateX(-32vw) translateY(49vh) scale(0.91);
  }
}
.firefly:nth-child(6) {
  animation-name: move6;
}
.firefly:nth-child(6)::before {
  animation-duration: 9s;
}
.firefly:nth-child(6)::after {
  animation-duration: 9s, 7644ms;
  animation-delay: 0ms, 5071ms;
}

@keyframes move6 {
  0% {
    transform: translateX(40vw) translateY(-38vh) scale(0.66);
  }
  3.7037037037% {
    transform: translateX(19vw) translateY(-11vh) scale(0.36);
  }
  7.4074074074% {
    transform: translateX(44vw) translateY(43vh) scale(0.38);
  }
  11.1111111111% {
    transform: translateX(26vw) translateY(40vh) scale(0.68);
  }
  14.8148148148% {
    transform: translateX(6vw) translateY(-30vh) scale(0.38);
  }
  18.5185185185% {
    transform: translateX(-21vw) translateY(-8vh) scale(0.97);
  }
  22.2222222222% {
    transform: translateX(39vw) translateY(-25vh) scale(0.44);
  }
  25.9259259259% {
    transform: translateX(0vw) translateY(-27vh) scale(0.75);
  }
  29.6296296296% {
    transform: translateX(48vw) translateY(10vh) scale(0.49);
  }
  33.3333333333% {
    transform: translateX(-16vw) translateY(46vh) scale(0.57);
  }
  37.037037037% {
    transform: translateX(-36vw) translateY(50vh) scale(0.85);
  }
  40.7407407407% {
    transform: translateX(0vw) translateY(-43vh) scale(0.38);
  }
  44.4444444444% {
    transform: translateX(4vw) translateY(-23vh) scale(0.36);
  }
  48.1481481481% {
    transform: translateX(42vw) translateY(5vh) scale(0.84);
  }
  51.8518518519% {
    transform: translateX(33vw) translateY(-1vh) scale(0.43);
  }
  55.5555555556% {
    transform: translateX(23vw) translateY(-19vh) scale(0.61);
  }
  59.2592592593% {
    transform: translateX(3vw) translateY(6vh) scale(0.71);
  }
  62.962962963% {
    transform: translateX(28vw) translateY(-31vh) scale(0.85);
  }
  66.6666666667% {
    transform: translateX(36vw) translateY(-7vh) scale(0.55);
  }
  70.3703703704% {
    transform: translateX(21vw) translateY(1vh) scale(0.72);
  }
  74.0740740741% {
    transform: translateX(47vw) translateY(-48vh) scale(0.91);
  }
  77.7777777778% {
    transform: translateX(-45vw) translateY(16vh) scale(0.47);
  }
  81.4814814815% {
    transform: translateX(42vw) translateY(-8vh) scale(0.72);
  }
  85.1851851852% {
    transform: translateX(-40vw) translateY(-21vh) scale(0.28);
  }
  88.8888888889% {
    transform: translateX(-48vw) translateY(-2vh) scale(1);
  }
  92.5925925926% {
    transform: translateX(-21vw) translateY(5vh) scale(0.34);
  }
  96.2962962963% {
    transform: translateX(5vw) translateY(2vh) scale(0.85);
  }
  100% {
    transform: translateX(38vw) translateY(-9vh) scale(0.72);
  }
}
.firefly:nth-child(7) {
  animation-name: move7;
}
.firefly:nth-child(7)::before {
  animation-duration: 15s;
}
.firefly:nth-child(7)::after {
  animation-duration: 15s, 6284ms;
  animation-delay: 0ms, 3890ms;
}

@keyframes move7 {
  0% {
    transform: translateX(26vw) translateY(28vh) scale(0.26);
  }
  5.2631578947% {
    transform: translateX(20vw) translateY(39vh) scale(0.87);
  }
  10.5263157895% {
    transform: translateX(11vw) translateY(32vh) scale(0.27);
  }
  15.7894736842% {
    transform: translateX(-2vw) translateY(21vh) scale(0.84);
  }
  21.0526315789% {
    transform: translateX(-32vw) translateY(7vh) scale(0.84);
  }
  26.3157894737% {
    transform: translateX(-35vw) translateY(-45vh) scale(0.92);
  }
  31.5789473684% {
    transform: translateX(18vw) translateY(24vh) scale(0.34);
  }
  36.8421052632% {
    transform: translateX(-29vw) translateY(-44vh) scale(0.46);
  }
  42.1052631579% {
    transform: translateX(-48vw) translateY(50vh) scale(1);
  }
  47.3684210526% {
    transform: translateX(15vw) translateY(-30vh) scale(0.9);
  }
  52.6315789474% {
    transform: translateX(-41vw) translateY(-24vh) scale(0.26);
  }
  57.8947368421% {
    transform: translateX(35vw) translateY(2vh) scale(0.78);
  }
  63.1578947368% {
    transform: translateX(27vw) translateY(-29vh) scale(0.3);
  }
  68.4210526316% {
    transform: translateX(11vw) translateY(-4vh) scale(0.3);
  }
  73.6842105263% {
    transform: translateX(-25vw) translateY(-23vh) scale(0.63);
  }
  78.9473684211% {
    transform: translateX(12vw) translateY(10vh) scale(0.88);
  }
  84.2105263158% {
    transform: translateX(-15vw) translateY(17vh) scale(0.83);
  }
  89.4736842105% {
    transform: translateX(4vw) translateY(-37vh) scale(0.79);
  }
  94.7368421053% {
    transform: translateX(24vw) translateY(3vh) scale(0.65);
  }
  100% {
    transform: translateX(27vw) translateY(48vh) scale(0.88);
  }
}
.firefly:nth-child(8) {
  animation-name: move8;
}
.firefly:nth-child(8)::before {
  animation-duration: 11s;
}
.firefly:nth-child(8)::after {
  animation-duration: 11s, 5640ms;
  animation-delay: 0ms, 4992ms;
}

@keyframes move8 {
  0% {
    transform: translateX(-44vw) translateY(-42vh) scale(0.87);
  }
  5.2631578947% {
    transform: translateX(46vw) translateY(43vh) scale(0.4);
  }
  10.5263157895% {
    transform: translateX(34vw) translateY(24vh) scale(0.83);
  }
  15.7894736842% {
    transform: translateX(8vw) translateY(36vh) scale(0.87);
  }
  21.0526315789% {
    transform: translateX(-34vw) translateY(15vh) scale(0.42);
  }
  26.3157894737% {
    transform: translateX(-35vw) translateY(11vh) scale(0.76);
  }
  31.5789473684% {
    transform: translateX(36vw) translateY(12vh) scale(0.74);
  }
  36.8421052632% {
    transform: translateX(-32vw) translateY(31vh) scale(0.8);
  }
  42.1052631579% {
    transform: translateX(-33vw) translateY(24vh) scale(0.37);
  }
  47.3684210526% {
    transform: translateX(-17vw) translateY(-42vh) scale(0.48);
  }
  52.6315789474% {
    transform: translateX(-21vw) translateY(9vh) scale(0.28);
  }
  57.8947368421% {
    transform: translateX(-27vw) translateY(39vh) scale(0.49);
  }
  63.1578947368% {
    transform: translateX(-42vw) translateY(6vh) scale(0.8);
  }
  68.4210526316% {
    transform: translateX(-36vw) translateY(-14vh) scale(0.92);
  }
  73.6842105263% {
    transform: translateX(-49vw) translateY(28vh) scale(0.73);
  }
  78.9473684211% {
    transform: translateX(34vw) translateY(5vh) scale(0.99);
  }
  84.2105263158% {
    transform: translateX(9vw) translateY(39vh) scale(0.54);
  }
  89.4736842105% {
    transform: translateX(-11vw) translateY(-44vh) scale(0.93);
  }
  94.7368421053% {
    transform: translateX(-4vw) translateY(-17vh) scale(0.93);
  }
  100% {
    transform: translateX(-27vw) translateY(22vh) scale(0.29);
  }
}
.firefly:nth-child(9) {
  animation-name: move9;
}
.firefly:nth-child(9)::before {
  animation-duration: 12s;
}
.firefly:nth-child(9)::after {
  animation-duration: 12s, 7547ms;
  animation-delay: 0ms, 4920ms;
}

@keyframes move9 {
  0% {
    transform: translateX(17vw) translateY(13vh) scale(0.88);
  }
  5.2631578947% {
    transform: translateX(31vw) translateY(-14vh) scale(0.27);
  }
  10.5263157895% {
    transform: translateX(29vw) translateY(-20vh) scale(0.71);
  }
  15.7894736842% {
    transform: translateX(12vw) translateY(-16vh) scale(0.52);
  }
  21.0526315789% {
    transform: translateX(18vw) translateY(-2vh) scale(0.71);
  }
  26.3157894737% {
    transform: translateX(-37vw) translateY(2vh) scale(0.75);
  }
  31.5789473684% {
    transform: translateX(-28vw) translateY(17vh) scale(0.47);
  }
  36.8421052632% {
    transform: translateX(-40vw) translateY(-12vh) scale(0.28);
  }
  42.1052631579% {
    transform: translateX(-24vw) translateY(-17vh) scale(0.38);
  }
  47.3684210526% {
    transform: translateX(16vw) translateY(15vh) scale(0.35);
  }
  52.6315789474% {
    transform: translateX(26vw) translateY(-28vh) scale(0.44);
  }
  57.8947368421% {
    transform: translateX(48vw) translateY(21vh) scale(0.53);
  }
  63.1578947368% {
    transform: translateX(-19vw) translateY(50vh) scale(0.7);
  }
  68.4210526316% {
    transform: translateX(39vw) translateY(-49vh) scale(0.32);
  }
  73.6842105263% {
    transform: translateX(-41vw) translateY(40vh) scale(0.31);
  }
  78.9473684211% {
    transform: translateX(-25vw) translateY(1vh) scale(0.28);
  }
  84.2105263158% {
    transform: translateX(-22vw) translateY(-32vh) scale(0.97);
  }
  89.4736842105% {
    transform: translateX(-4vw) translateY(-39vh) scale(0.41);
  }
  94.7368421053% {
    transform: translateX(-22vw) translateY(24vh) scale(0.29);
  }
  100% {
    transform: translateX(-19vw) translateY(11vh) scale(0.35);
  }
}
.firefly:nth-child(10) {
  animation-name: move10;
}
.firefly:nth-child(10)::before {
  animation-duration: 14s;
}
.firefly:nth-child(10)::after {
  animation-duration: 14s, 7447ms;
  animation-delay: 0ms, 2861ms;
}

@keyframes move10 {
  0% {
    transform: translateX(9vw) translateY(-14vh) scale(0.98);
  }
  4.5454545455% {
    transform: translateX(-1vw) translateY(46vh) scale(0.6);
  }
  9.0909090909% {
    transform: translateX(36vw) translateY(-35vh) scale(0.82);
  }
  13.6363636364% {
    transform: translateX(-26vw) translateY(-15vh) scale(0.92);
  }
  18.1818181818% {
    transform: translateX(7vw) translateY(19vh) scale(0.77);
  }
  22.7272727273% {
    transform: translateX(43vw) translateY(27vh) scale(0.54);
  }
  27.2727272727% {
    transform: translateX(-49vw) translateY(24vh) scale(0.44);
  }
  31.8181818182% {
    transform: translateX(-1vw) translateY(-13vh) scale(0.96);
  }
  36.3636363636% {
    transform: translateX(32vw) translateY(42vh) scale(0.63);
  }
  40.9090909091% {
    transform: translateX(26vw) translateY(-20vh) scale(0.93);
  }
  45.4545454545% {
    transform: translateX(2vw) translateY(-13vh) scale(0.5);
  }
  50% {
    transform: translateX(17vw) translateY(19vh) scale(0.65);
  }
  54.5454545455% {
    transform: translateX(44vw) translateY(-37vh) scale(0.72);
  }
  59.0909090909% {
    transform: translateX(-43vw) translateY(38vh) scale(1);
  }
  63.6363636364% {
    transform: translateX(-1vw) translateY(25vh) scale(0.84);
  }
  68.1818181818% {
    transform: translateX(-44vw) translateY(-7vh) scale(0.91);
  }
  72.7272727273% {
    transform: translateX(5vw) translateY(36vh) scale(0.62);
  }
  77.2727272727% {
    transform: translateX(-24vw) translateY(18vh) scale(0.89);
  }
  81.8181818182% {
    transform: translateX(-8vw) translateY(28vh) scale(0.46);
  }
  86.3636363636% {
    transform: translateX(-18vw) translateY(5vh) scale(0.59);
  }
  90.9090909091% {
    transform: translateX(7vw) translateY(-21vh) scale(0.86);
  }
  95.4545454545% {
    transform: translateX(43vw) translateY(18vh) scale(0.27);
  }
  100% {
    transform: translateX(-14vw) translateY(-8vh) scale(0.41);
  }
}
.firefly:nth-child(11) {
  animation-name: move11;
}
.firefly:nth-child(11)::before {
  animation-duration: 11s;
}
.firefly:nth-child(11)::after {
  animation-duration: 11s, 7418ms;
  animation-delay: 0ms, 5419ms;
}

@keyframes move11 {
  0% {
    transform: translateX(38vw) translateY(-25vh) scale(0.29);
  }
  4.347826087% {
    transform: translateX(-49vw) translateY(16vh) scale(0.45);
  }
  8.6956521739% {
    transform: translateX(1vw) translateY(44vh) scale(0.44);
  }
  13.0434782609% {
    transform: translateX(24vw) translateY(-33vh) scale(0.53);
  }
  17.3913043478% {
    transform: translateX(2vw) translateY(-48vh) scale(0.29);
  }
  21.7391304348% {
    transform: translateX(-48vw) translateY(-38vh) scale(0.83);
  }
  26.0869565217% {
    transform: translateX(35vw) translateY(-42vh) scale(0.62);
  }
  30.4347826087% {
    transform: translateX(37vw) translateY(-6vh) scale(0.54);
  }
  34.7826086957% {
    transform: translateX(37vw) translateY(-47vh) scale(0.85);
  }
  39.1304347826% {
    transform: translateX(-24vw) translateY(37vh) scale(0.56);
  }
  43.4782608696% {
    transform: translateX(-13vw) translateY(-47vh) scale(0.75);
  }
  47.8260869565% {
    transform: translateX(16vw) translateY(30vh) scale(0.34);
  }
  52.1739130435% {
    transform: translateX(-14vw) translateY(46vh) scale(0.7);
  }
  56.5217391304% {
    transform: translateX(-35vw) translateY(-47vh) scale(0.39);
  }
  60.8695652174% {
    transform: translateX(20vw) translateY(-32vh) scale(0.87);
  }
  65.2173913043% {
    transform: translateX(42vw) translateY(28vh) scale(0.96);
  }
  69.5652173913% {
    transform: translateX(-17vw) translateY(-35vh) scale(0.96);
  }
  73.9130434783% {
    transform: translateX(-14vw) translateY(-27vh) scale(0.69);
  }
  78.2608695652% {
    transform: translateX(3vw) translateY(47vh) scale(0.78);
  }
  82.6086956522% {
    transform: translateX(3vw) translateY(-24vh) scale(0.8);
  }
  86.9565217391% {
    transform: translateX(13vw) translateY(46vh) scale(0.96);
  }
  91.3043478261% {
    transform: translateX(17vw) translateY(-18vh) scale(0.55);
  }
  95.652173913% {
    transform: translateX(-31vw) translateY(4vh) scale(0.69);
  }
  100% {
    transform: translateX(24vw) translateY(-11vh) scale(0.65);
  }
}
.firefly:nth-child(12) {
  animation-name: move12;
}
.firefly:nth-child(12)::before {
  animation-duration: 10s;
}
.firefly:nth-child(12)::after {
  animation-duration: 10s, 5423ms;
  animation-delay: 0ms, 5037ms;
}

@keyframes move12 {
  0% {
    transform: translateX(47vw) translateY(24vh) scale(0.29);
  }
  5.8823529412% {
    transform: translateX(0vw) translateY(-49vh) scale(0.95);
  }
  11.7647058824% {
    transform: translateX(-1vw) translateY(33vh) scale(0.44);
  }
  17.6470588235% {
    transform: translateX(37vw) translateY(-49vh) scale(0.39);
  }
  23.5294117647% {
    transform: translateX(-33vw) translateY(-19vh) scale(0.93);
  }
  29.4117647059% {
    transform: translateX(-48vw) translateY(-37vh) scale(0.82);
  }
  35.2941176471% {
    transform: translateX(1vw) translateY(26vh) scale(0.52);
  }
  41.1764705882% {
    transform: translateX(44vw) translateY(22vh) scale(0.76);
  }
  47.0588235294% {
    transform: translateX(4vw) translateY(24vh) scale(0.73);
  }
  52.9411764706% {
    transform: translateX(3vw) translateY(-49vh) scale(0.82);
  }
  58.8235294118% {
    transform: translateX(-38vw) translateY(-20vh) scale(0.54);
  }
  64.7058823529% {
    transform: translateX(-27vw) translateY(-44vh) scale(0.87);
  }
  70.5882352941% {
    transform: translateX(10vw) translateY(46vh) scale(0.46);
  }
  76.4705882353% {
    transform: translateX(-15vw) translateY(38vh) scale(0.86);
  }
  82.3529411765% {
    transform: translateX(20vw) translateY(-29vh) scale(0.95);
  }
  88.2352941176% {
    transform: translateX(-45vw) translateY(5vh) scale(0.47);
  }
  94.1176470588% {
    transform: translateX(-46vw) translateY(-13vh) scale(0.62);
  }
  100% {
    transform: translateX(18vw) translateY(49vh) scale(0.28);
  }
}
.firefly:nth-child(13) {
  animation-name: move13;
}
.firefly:nth-child(13)::before {
  animation-duration: 11s;
}
.firefly:nth-child(13)::after {
  animation-duration: 11s, 10804ms;
  animation-delay: 0ms, 2477ms;
}

@keyframes move13 {
  0% {
    transform: translateX(32vw) translateY(41vh) scale(0.61);
  }
  4% {
    transform: translateX(13vw) translateY(33vh) scale(0.77);
  }
  8% {
    transform: translateX(0vw) translateY(12vh) scale(0.59);
  }
  12% {
    transform: translateX(40vw) translateY(36vh) scale(0.81);
  }
  16% {
    transform: translateX(6vw) translateY(26vh) scale(0.89);
  }
  20% {
    transform: translateX(-14vw) translateY(-44vh) scale(0.74);
  }
  24% {
    transform: translateX(-23vw) translateY(37vh) scale(0.84);
  }
  28% {
    transform: translateX(16vw) translateY(-30vh) scale(0.74);
  }
  32% {
    transform: translateX(-40vw) translateY(15vh) scale(0.37);
  }
  36% {
    transform: translateX(-35vw) translateY(18vh) scale(0.6);
  }
  40% {
    transform: translateX(24vw) translateY(-16vh) scale(0.28);
  }
  44% {
    transform: translateX(-4vw) translateY(36vh) scale(0.86);
  }
  48% {
    transform: translateX(-41vw) translateY(-43vh) scale(0.6);
  }
  52% {
    transform: translateX(2vw) translateY(41vh) scale(0.29);
  }
  56% {
    transform: translateX(-7vw) translateY(-38vh) scale(0.9);
  }
  60% {
    transform: translateX(11vw) translateY(43vh) scale(0.65);
  }
  64% {
    transform: translateX(26vw) translateY(-18vh) scale(0.59);
  }
  68% {
    transform: translateX(20vw) translateY(18vh) scale(0.43);
  }
  72% {
    transform: translateX(-16vw) translateY(1vh) scale(0.37);
  }
  76% {
    transform: translateX(-24vw) translateY(27vh) scale(0.36);
  }
  80% {
    transform: translateX(42vw) translateY(-32vh) scale(0.53);
  }
  84% {
    transform: translateX(-2vw) translateY(16vh) scale(0.64);
  }
  88% {
    transform: translateX(-49vw) translateY(48vh) scale(0.72);
  }
  92% {
    transform: translateX(34vw) translateY(-23vh) scale(0.99);
  }
  96% {
    transform: translateX(7vw) translateY(2vh) scale(0.47);
  }
  100% {
    transform: translateX(-45vw) translateY(-6vh) scale(0.95);
  }
}
.firefly:nth-child(14) {
  animation-name: move14;
}
.firefly:nth-child(14)::before {
  animation-duration: 9s;
}
.firefly:nth-child(14)::after {
  animation-duration: 9s, 8165ms;
  animation-delay: 0ms, 1862ms;
}

@keyframes move14 {
  0% {
    transform: translateX(41vw) translateY(-39vh) scale(0.36);
  }
  5% {
    transform: translateX(4vw) translateY(4vh) scale(0.61);
  }
  10% {
    transform: translateX(-48vw) translateY(16vh) scale(0.55);
  }
  15% {
    transform: translateX(4vw) translateY(14vh) scale(0.39);
  }
  20% {
    transform: translateX(49vw) translateY(33vh) scale(0.88);
  }
  25% {
    transform: translateX(-11vw) translateY(-28vh) scale(0.8);
  }
  30% {
    transform: translateX(2vw) translateY(-29vh) scale(0.79);
  }
  35% {
    transform: translateX(28vw) translateY(16vh) scale(0.59);
  }
  40% {
    transform: translateX(33vw) translateY(15vh) scale(0.37);
  }
  45% {
    transform: translateX(-38vw) translateY(-15vh) scale(0.39);
  }
  50% {
    transform: translateX(47vw) translateY(36vh) scale(0.75);
  }
  55% {
    transform: translateX(42vw) translateY(25vh) scale(1);
  }
  60% {
    transform: translateX(2vw) translateY(13vh) scale(0.46);
  }
  65% {
    transform: translateX(44vw) translateY(45vh) scale(0.79);
  }
  70% {
    transform: translateX(-1vw) translateY(-30vh) scale(0.67);
  }
  75% {
    transform: translateX(-1vw) translateY(-31vh) scale(0.5);
  }
  80% {
    transform: translateX(-48vw) translateY(13vh) scale(0.43);
  }
  85% {
    transform: translateX(48vw) translateY(45vh) scale(0.81);
  }
  90% {
    transform: translateX(41vw) translateY(-22vh) scale(0.28);
  }
  95% {
    transform: translateX(0vw) translateY(-8vh) scale(0.87);
  }
  100% {
    transform: translateX(34vw) translateY(-8vh) scale(0.38);
  }
}
.firefly:nth-child(15) {
  animation-name: move15;
}
.firefly:nth-child(15)::before {
  animation-duration: 18s;
}
.firefly:nth-child(15)::after {
  animation-duration: 18s, 5061ms;
  animation-delay: 0ms, 1907ms;
}

@keyframes move15 {
  0% {
    transform: translateX(-30vw) translateY(5vh) scale(0.49);
  }
  3.8461538462% {
    transform: translateX(47vw) translateY(31vh) scale(0.57);
  }
  7.6923076923% {
    transform: translateX(-29vw) translateY(43vh) scale(0.43);
  }
  11.5384615385% {
    transform: translateX(-36vw) translateY(-40vh) scale(0.65);
  }
  15.3846153846% {
    transform: translateX(-1vw) translateY(32vh) scale(0.81);
  }
  19.2307692308% {
    transform: translateX(-43vw) translateY(37vh) scale(0.86);
  }
  23.0769230769% {
    transform: translateX(-34vw) translateY(29vh) scale(0.31);
  }
  26.9230769231% {
    transform: translateX(-1vw) translateY(-7vh) scale(0.99);
  }
  30.7692307692% {
    transform: translateX(-7vw) translateY(2vh) scale(0.97);
  }
  34.6153846154% {
    transform: translateX(-46vw) translateY(-42vh) scale(0.53);
  }
  38.4615384615% {
    transform: translateX(-10vw) translateY(20vh) scale(0.99);
  }
  42.3076923077% {
    transform: translateX(37vw) translateY(1vh) scale(0.67);
  }
  46.1538461538% {
    transform: translateX(-17vw) translateY(-12vh) scale(0.99);
  }
  50% {
    transform: translateX(-12vw) translateY(12vh) scale(0.91);
  }
  53.8461538462% {
    transform: translateX(14vw) translateY(1vh) scale(0.56);
  }
  57.6923076923% {
    transform: translateX(-8vw) translateY(-4vh) scale(0.68);
  }
  61.5384615385% {
    transform: translateX(28vw) translateY(48vh) scale(0.64);
  }
  65.3846153846% {
    transform: translateX(-35vw) translateY(-41vh) scale(0.35);
  }
  69.2307692308% {
    transform: translateX(2vw) translateY(-12vh) scale(0.37);
  }
  73.0769230769% {
    transform: translateX(-11vw) translateY(-7vh) scale(0.35);
  }
  76.9230769231% {
    transform: translateX(35vw) translateY(-15vh) scale(0.64);
  }
  80.7692307692% {
    transform: translateX(-23vw) translateY(-35vh) scale(0.92);
  }
  84.6153846154% {
    transform: translateX(-46vw) translateY(-18vh) scale(0.47);
  }
  88.4615384615% {
    transform: translateX(42vw) translateY(48vh) scale(0.68);
  }
  92.3076923077% {
    transform: translateX(-27vw) translateY(-28vh) scale(0.8);
  }
  96.1538461538% {
    transform: translateX(30vw) translateY(11vh) scale(0.31);
  }
  100% {
    transform: translateX(15vw) translateY(23vh) scale(0.37);
  }
}
@keyframes drift {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
@keyframes flash {
  0%, 30%, 100% {
    opacity: 0;
    box-shadow: 0 0 0vw 0vw yellow;
  }
  5% {
    opacity: 1;
    box-shadow: 0 0 2vw 0.4vw yellow;
  }
}
</style>
