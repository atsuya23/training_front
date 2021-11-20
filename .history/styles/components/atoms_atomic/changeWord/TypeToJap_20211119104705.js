export default function TypeToJap({ type }) {
  return (
    <>
      {type == "bench_press" && "ベンチプレス"}
      {type == "incline_bench_press" && "インクラインベンチプレス"}
      {type == "decline_bench_press" && "デクラインベンチプレス"}
      {type == "dumbbell_press" && "ダンベルプレス"}
      {type == "shoulder_press" && "ショルダープレス"}
      {type == "chinning" && "チンニング"}
      {type == "push-up" && "腕立て伏せ"}
      {type == "over_head_press" && "トライセプスエクステンション"}
      {type == "side_rise" && "サイドレイズ"}
      {type == "arm_curl" && "アームカール"}
      {type == "kick_back" && "キックバック"}
      {type == "lat_pull_down" && "ラットプルダウン"}
      {type == "dips" && "ディップス"}
      {type == "arm_variations" && "上腕総合"}
      {type == "something_new" && "新種目"}
    </>
  );
}
