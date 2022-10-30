import { useQuery } from "@apollo/client";
import { CSSProperties } from "react";

import { GQL } from "../../gql/gql";
const [RECIPE] = GQL;

const x: CSSProperties = {
  display: "flex",
};
const imageStyle: CSSProperties = {
  width:"26vw"
};

export function DisplayExercise() {
  const { loading, error, data } = useQuery(RECIPE);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;
  const { exercise } = data;
  console.log(exercise)
  if (exercise)
    return exercise.map((v: any, i: number) => {
      const { id, name, image } = v;
      return (
        <div key={id} style={x}>
          <img src={image} style={imageStyle} alt={name} />
          <p>{name}</p>
          <button>open</button>
        </div>
      );
    });
}
