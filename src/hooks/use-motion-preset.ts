"use client";

import { useEffect, useState } from "react";
import { motionPreset, type MotionPreset } from "@/lib/motion";

const MOBILE_QUERY = "(max-width: 767px)";

export function useMotionPreset(): MotionPreset {
  const [preset, setPreset] = useState<MotionPreset>(motionPreset.desktop);

  useEffect(() => {
    const mq = window.matchMedia(MOBILE_QUERY);
    const update = () => {
      setPreset(mq.matches ? motionPreset.mobile : motionPreset.desktop);
    };
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  return preset;
}

export function useIsMobile(): boolean {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia(MOBILE_QUERY);
    const update = () => setIsMobile(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  return isMobile;
}
