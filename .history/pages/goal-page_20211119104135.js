import Layout from "../styles/components/organisms_atomic/Layout";

export default function GoalPage() {
  return (
    <Layout
      title="About Goal"
      heading="About My Goal"
      pageEx1="本ページでは、目標設定についてが記されています。"
      pageEx2="目標に関する自分自身の当初の考え等を明記しており、"
      pageEx3=" 取り組むうえでの初心の振り返りとしても有意義なものとなると考えています。"
    >
      {/* --- Secation 1 start --- */}
      <div class="grid md:grid-cols-2 gap-8 lg:gap-12">
        <div class="md:pt-2">
          <p class="text-indigo-500 font-bold text-center md:text-left">
            What is my goal?
          </p>

          <h1 class="text-gray-800 text-2xl sm:text-3xl font-bold text-center md:text-left mb-4 md:mb-6">
            Bench press <a class="font-extrabold">100Kg</a>
          </h1>

          <p class="text-gray-500 sm:text-lg mb-6 md:mb-8">
            <div class="mb-1 animate-pulse text-xl font-semibold">
              定量的な目標の必要性
            </div>
            <div class="mb-1">
              トレーニングを行う際して、最大の目標が自身の目指すフィットネスの獲得やトレーニングそのものの楽しさを享受することは明らかである。
            </div>
            <div class="mb-1">
              {" "}
              一方で、その実現やモチベーションのためにも比較的短期間での定量的な目標値の設定が重要な役割を担うものと考えている。
            </div>
            そこで、上半身に力を入れて取り組むうえで最大のボリュームを占めるであろうベンチプレスにおいて3桁挙上(
            <a class="text-red-400">100Kg挙上</a>
            )という傍目に評価できる目標値とした。
          </p>
        </div>
        <div>
          <div class="h-64 md:h-auto bg-gray-100 overflow-hidden rounded-3xl shadow-lg">
            <img
              src="https://training-rest.herokuapp.com/media/images/goal_100Kg.png"
              loading="lazy"
              alt="Photo by Martin Sanchez"
              class="w-full h-96 object-cover object-center shadow-xl"
            />
          </div>
        </div>
      </div>
      {/* --- Section 1 end --- */}

      {/* --- Section 2 start --- */}
      <div class="grid md:grid-cols-2 gap-8 lg:gap-12 mt-10 sm:mt-14 lg:mt-20">
        <div class="grid-cols-2 inline-grid gap-2 h-64 md:h-auto bg-gray-100 overflow-hidden pt-8">
          <div class="pl-7">
            <img
              src="https://training-rest.herokuapp.com/media/images/rise_explain.jpg"
              loading="lazy"
              alt="Photo by Martin Sanchez"
              class="md:w-64 md:h-64 w-52 h-52 rounded-full object-cover object-center shadow-xl"
            />
          </div>
          <div>
            <img
              src="https://training-rest.herokuapp.com/media/images/rise_right.jpg"
              loading="lazy"
              alt="Photo by Martin Sanchez"
              class="md:w-64 md:h-64 w-52 h-52 rounded-full object-cover object-center shadow-xl"
            />
          </div>
        </div>

        <div>
          <p class="text-gray-500 sm:text-lg mb-6 md:mb-8">
            <div class="mb-1 animate-pulse text-xl font-semibold">
              目標について
            </div>
            <div class="mb-1">
              ウェイトトレーニングを始めたのは、2021年10月21からであり、目標達成期間は2021年度であるため
              <a class="text-red-400">約5か月間</a>での挑戦となる。
            </div>
            <div class="mb-1">
              {" "}
              基本的には、月・木の週2回のウェイトトレーニングを想定しており、トレーニング回数に換算すると50回に届かない。以上を踏まえても本目標値の達成難度の高さは明らかであるが、
              <a class="text-yellow-300">卒業を賭け</a>
              何としても達成をしなければならない。
            </div>
            <div class="mb-1">
              考えるに、精神論信者ではないがモノゴト本気で取り組んで成せないことなど少数であり、実際は目標に向けた
              <a class="text-red-400">
                取り組みへの姿勢と計画こそが本質的な達成要因
              </a>
              であり、
              <a class="font-bold">その維持こそが最大の課題なのである</a>
              。そういった価値観を持つ者として、自身の目標達成とは自己実現の基盤であり、その不達成は自身の価値観への否定とも成り得る。
            </div>
            <div>
              以上からとりわけ私自身にとって、本目標達成は極めて重要な意味をもち達成以外はあってはならないと考える。
            </div>
          </p>
        </div>
      </div>
      {/* --- Section 2 end --- */}
    </Layout>
  );
}
