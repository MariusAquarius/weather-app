import { CardinalDirection } from "../../../../lib/api-types"

// returns a cardinal direction when a direction in degrees is provided
export function getDirection(angle: number): CardinalDirection {
  const directions: CardinalDirection[] = [
    "N",
    "NE",
    "E",
    "SE",
    "S",
    "SW",
    "W",
    "NW",
  ]
  const index = Math.round(((angle %= 360) < 0 ? angle + 360 : angle) / 45) % 8
  return directions[index]
}
