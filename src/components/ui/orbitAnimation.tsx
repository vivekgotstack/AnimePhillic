import { OrbitingCircles } from "./orbiting-circles"

export function OrbitingCirclesAnimation() {
  return (
    <>
      <OrbitingCircles iconSize={40}>
        <Icons.avatar />
        <Icons.pikachu />
        <Icons.avatar3 />
        <Icons.psyduck />
        <Icons.avatar4 />
      </OrbitingCircles>
      <OrbitingCircles iconSize={30} radius={100} reverse speed={2}>
        <Icons.avatar2 />
        <Icons.jigglypuff />
        <Icons.avatar1 />
        <Icons.eevee />
      </OrbitingCircles>
    </>
  )
}

const Icons = {
  pikachu: () => (
    <img
      src="/PokemonIcons/pikachu.png"
      width={100}
      height={100}
      className="rounded-md object-contain"
    />
  ),
  jigglypuff: () => (
    <img
      src="/PokemonIcons/jigglypuff.png"
      width={100}
      height={100}
      className="rounded-md object-contain"
    />
  ),
  psyduck: () => (
    <img
      src="/PokemonIcons/psyduck.png"
      width={100}
      height={100}
      className="rounded-md object-contain"
    />
  ),
  eevee: () => (
    <img
      src="/PokemonIcons/eevee.png"
      width={100}
      height={100}
      className="rounded-md object-contain"
    />
  ),
  avatar: () => (
    <img
      src="/PokemonIcons/avatar.png"
      width={100}
      height={100}
      className="rounded-md object-contain"
    />
  ),
  avatar1: () => (
    <img
      src="/PokemonIcons/avatar1.png"
      width={100}
      height={100}
      className="rounded-md object-contain"
    />
  ),
  avatar2: () => (
    <img
      src="/PokemonIcons/avatar2.png"
      width={100}
      height={100}
      className="rounded-md object-contain"
    />
  ),
  avatar3: () => (
    <img
      src="/PokemonIcons/avatar3.png"
      width={100}
      height={100}
      className="rounded-md object-contain"
    />
  ),
  avatar4: () => (
    <img
      src="/PokemonIcons/avatar4.png"
      width={100}
      height={100}
      className="rounded-md object-contain"
    />
  ),
}
