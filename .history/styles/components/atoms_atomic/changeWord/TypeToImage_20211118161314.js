export function TypeToImage({ type }) {
    
  return (
    <>
      {type == "bench_press" && <img
          src=""
          loading="lazy"
          alt="Photo by Minh Pham"
          class="w-full h-full object-cover object-center absolute inset-0 transform transition duration-200 group-hover:scale-110"
        />}
      {type == "incline_bench_press" && "Incline Bench Press"}
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
