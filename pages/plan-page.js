import Layout from "../styles/components/organisms_atomic/Layout";
import PlanCard from "../styles/components/molecules_atomic/page-elements/PlanCard";

export default function PlanPage() {
  return (
    <Layout
      title="Plan Page"
      heading="Plan for Goal"
      pageEx1="本ページでは、目標の達成に向けて取り組む内容についてまとめてあります。"
      pageEx2="以下の各トレーニングは基本的なメニューであり、継続的に内容に組み込むことでメニューの根管とします。"
      pageEx3="様々な刺激を取り入れるため、単一的でない重量・レップ数・スピードでのトレーニングをすることが重要です。"
    >
      <div class="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6 xl:gap-8">
        {/* article - start */}
        <PlanCard
          menuName="Bench Press"
          set="8reps * 3sets + α"
          main="大胸筋"
          sub="上腕三頭筋、三角筋"
          explain="Big3種目の高重量を扱った上半身トレーニング。目標重量を設定している種目でもあり、上半身を総合的に鍛えるためトレーニングの主軸種目とする。"
          danger="肩周りへの負荷が大きくフォームの向上が必要"
          picPath="https://training-rest.herokuapp.com/media/images/bench_press.jpg"
          ideal="80Kg * 8reps"
        />{" "}
        <PlanCard
          menuName="Incline Bench Press"
          set="8reps * 2sets + α"
          main="大胸筋(上部)"
          sub="上腕三頭筋、三角筋"
          explain="スミスマシンを使うことで、1人のトレーニングでも高重量で追い込むことが可能。スミスマシンとインクラインベンチの特徴を活かしストレッチ性を高めての追い込み種目とする。"
          danger="ストレッチ性があるため肩の痛みに注意"
          picPath="https://training-rest.herokuapp.com/media/images/incline_bench_press.jpg"
          ideal="60Kg * 8reps"
        />{" "}
        <PlanCard
          menuName="Decline Bench Press"
          set="10reps * 2sets + α"
          main="大胸筋(下部)"
          sub="上腕三頭筋"
          explain="スミスマシンを使うことで、1人のトレーニングでも高重量で追い込むことが可能。下方向への力を意識し、大胸筋下部への刺激に集中をする。肩関節がしっかりとデクラインしているように高く足を組む。"
          picPath="https://training-rest.herokuapp.com/media/images/decline_bench_press.jpg"
          ideal="60Kg * 10reps"
        />{" "}
        <PlanCard
          menuName="Dumbbell Press"
          set="10reps * 2sets + α"
          main="大胸筋（下部、内側）"
          sub="上腕三頭筋、三角筋"
          explain="ベンチプレス系では大胸筋の手幅の都合上、大胸筋の収縮が十分に行うことが困難であるため、ダンベル種目では特に収縮を意識する。フォームはフレキシブルに対応するが、ダンベルでは下部・内側への刺激を主とする。"
          picPath="https://training-rest.herokuapp.com/media/images/dumbbell_press.jpg"
          ideal="25Kg * 8reps"
        />{" "}
        <PlanCard
          menuName="Shoulder Press"
          set="8reps * 2sets + α"
          main="三角筋（中部）"
          sub="三角筋（前部）、僧帽筋、上腕三頭筋"
          explain="水平プレス系では三角筋前部に刺激が集中しているため、立位又は鉛直座位でのプレスをする三角筋中部を狙った種目とする。立位の方が優位だが、肩への刺激を考えて座位でのプレスでも構わない。"
          danger="三角筋前部が痛む場合は、ボトム位置に注意"
          picPath="https://training-rest.herokuapp.com/media/images/shoulder_press.jpg"
          ideal="30Kg * 8reps"
        />{" "}
        <PlanCard
          menuName="Lat Pull Down"
          set="10reps * 3sets + α"
          main="広背筋、僧帽筋、大円筋"
          sub="上腕二頭筋、上腕三頭筋"
          explain="プッシュ系種目では上半身前面ばかりに集中するため、それらに伴った背部の筋発達が必要である。チンニングが十分にできるまでは本種目で背部のトレーニングを賄う。座る深さによって角度が変わる為、日々調整することが望ましい。"
          danger="バーを背部に持ってくるのは肩への負担から望ましくない"
          picPath="https://training-rest.herokuapp.com/media/images/lat_pull_down.jpg"
          ideal="70Kg * 10reps"
        />{" "}
        <PlanCard
          menuName="Arm Curl"
          set="10reps * 2sets + α"
          main="上腕二頭筋"
          sub="腕橈骨筋"
          explain="プレス系においても上腕二頭筋への刺激はあるが、三頭筋優位のため単間接種目での二頭筋を狙った種目である。インクラインにすることでボトム付近での負荷を逃がさないようにする。遅筋優位説もあるため重量よりレップ数を重視する。"
          picPath="https://training-rest.herokuapp.com/media/images/arm_curl.jpg"
          ideal="15Kg * 12reps"
        />
        <PlanCard
          menuName="Tri-Sepse Extension"
          set="8reps * 2sets + α"
          main="上腕三頭筋（長頭）"
          sub="腕橈骨筋"
          explain="プレス系では上腕三頭筋短頭への刺激が集中しており、上腕の太さに最重要である三頭筋長頭が非活性である。上腕三頭筋長頭へのトレーニングではストレッチと肩関節の進展（回転）が重要であるため、それを狙った種目である。"
          danger="肩・肘への負荷がダイレクトなためフォームが重要"
          picPath="https://training-rest.herokuapp.com/media/images/over_head_press.jpg"
          ideal="20Kg * 8reps"
        />
        <PlanCard
          menuName="Chinning"
          set="5reps(negative) * 2sets + α"
          main="広背筋"
          sub="上腕二頭筋、僧帽筋、腕橈骨筋"
          explain="背筋群全体を狙った種目で、現状満足に出来ていないためネガティブ負荷でのトレーニングとする。上腕二頭筋などに負荷が集中しないように骨盤前傾・胸を張り鉛直30°方向を目指して懸垂を行う。"
          danger="ネガティブ中心のため筋肉痛がすごい"
          picPath="https://training-rest.herokuapp.com/media/images/chinning.jpg"
          ideal="6reps"
        />
        <PlanCard
          menuName="Dips"
          set="8reps * 2sets + α"
          main="大胸筋"
          sub="三角筋、上腕三頭筋"
          explain="ウェイト器具ではなく、上半身を総合的に鍛える種目。ベンチプレスの差別化としては大胸筋の収縮が強く、またストレッチ性も高いため進展筋群に友好的である。重量目標を達成したら積極的に取り入れたい。"
          danger="稼働域が大きいのでフォームと動きに注意"
          picPath="https://training-rest.herokuapp.com/media/images/dips.jpg"
          ideal="6reps"
        />
        <PlanCard
          menuName="Side Rise"
          set="10reps * 2sets + α"
          main="三角筋（中部）"
          sub="三角筋（前部）、僧帽筋"
          explain="肩の単間接種目として、特に三角筋中部を狙った種目である。出来る限り僧帽筋の関与を与えないために、肩峰の位置を変えないようにして稼働筋に集中をする。そのため低重量で構わない。"
          danger="肩単間接種目なので、重量とフォームには注意。小指側を挙げないこと"
          picPath="https://training-rest.herokuapp.com/media/images/side_rise.jpg"
          ideal="10Kg * 10reps"
        />
        {/* article - end */}
      </div>
    </Layout>
  );
}
