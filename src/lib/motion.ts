export const MOTION_EASE = [0.22, 1, 0.36, 1] as const;

export const motionPreset = {
  mobile: {
    distance: 14,
    distanceX: 12,
    duration: 0.52,
    stagger: 0.07,
    delayChildren: 0.04,
    viewportMargin: "-48px 0px -48px 0px",
    heroStagger: 0.09,
  },
  desktop: {
    distance: 26,
    distanceX: 20,
    duration: 0.68,
    stagger: 0.1,
    delayChildren: 0.06,
    viewportMargin: "-96px 0px -96px 0px",
    heroStagger: 0.11,
  },
} as const;

export type MotionPreset = (typeof motionPreset)[keyof typeof motionPreset];

export type RevealDirection = "up" | "down" | "left" | "right" | "none";

export function getRevealOffset(
  direction: RevealDirection,
  preset: MotionPreset,
): { x?: number; y?: number } {
  switch (direction) {
    case "up":
      return { y: preset.distance };
    case "down":
      return { y: -preset.distance };
    case "left":
      return { x: preset.distanceX };
    case "right":
      return { x: -preset.distanceX };
    default:
      return {};
  }
}
