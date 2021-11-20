export default function TypeToEng({ type }) {
  return (
    <>
      {type == "bench_press" && "Bench Press"}
      {type == "incline_bench_press" && "Incline Bench Press"}
      {type == "decline_bench_press" && "Decline Bench Press"}
      {type == "dumbbell_press" && "Dumbbell Press"}
      {type == "shoulder_press" && "Shoulder Press"}
      {type == "chinning" && "Chinning"}
      {type == "push-up" && "Push Up"}
      {type == "over_head_press" && "Tri-seps Extension"}
      {type == "side_rise" && "Side rise"}
      {type == "arm_curl" && "Arm Curl"}
      {type == "kick_back" && "Kick Back"}
      {type == "lat_pull_down" && "Lat Pull Down"}
      {type == "dips" && "Dips"}
    </>
  );
}
