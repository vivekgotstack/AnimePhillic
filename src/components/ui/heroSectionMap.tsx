import { DottedMap } from "./dotted-map"

const markers = [
    {
        lat: 40.7128,
        lng: -74.006,
        size: 0.3,
    },
    {
        lat: 34.0522,
        lng: -118.2437,
        size: 0.3,
    },
    {
        lat: 51.5074,
        lng: -0.1278,
        size: 0.3,
    },
    {
        lat: -33.8688,
        lng: 151.2093,
        size: 0.3,
    },
    {
        lat: 48.8566,
        lng: 2.3522,
        size: 0.3,
    },
    {
        lat: 35.6762,
        lng: 139.6503,
        size: 0.3,
    },
    {
        lat: 55.7558,
        lng: 37.6176,
        size: 0.3,
    },
    {
        lat: 39.9042,
        lng: 116.4074,
        size: 0.3,
    },
    {
        lat: 28.6139,
        lng: 77.209,
        size: 0.3,
    },
    {
        lat: -23.5505,
        lng: -46.6333,
        size: 0.3,
    },
    {
        lat: 1.3521,
        lng: 103.8198,
        size: 0.3,
    },
    {
        lat: 25.2048,
        lng: 55.2708,
        size: 0.3,
    },
    {
        lat: 52.52,
        lng: 13.405,
        size: 0.3,
    },
    {
        lat: 19.4326,
        lng: -99.1332,
        size: 0.3,
    },
    {
        lat: -26.2041,
        lng: 28.0473,
        size: 0.3,
    },
]

export function HeroSectionMap() {
    return (
        <div className="relative h-[500px] w-full overflow-hidden rounded-lg border">
            <div className="to-background absolute inset-0 bg-radial from-transparent to-70%" />
            <DottedMap markers={markers} />
        </div>
    )
}
