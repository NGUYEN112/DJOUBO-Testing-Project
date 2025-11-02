import Logo from "@/assets/logo/logo.svg";

import ArrowRightLight from "@/assets/icons/arr_r_l.svg";
import Globe from "@/assets/icons/globe.svg";
import AppStoreIcon from "@/assets/icons/app-store.svg";
import GooglePlayIcon from "@/assets/icons/google-play.svg";
import FacebookIcon from "@/assets/icons/facebook.svg";
import InstagramIcon from "@/assets/icons/insta.svg";
import LinkedInIcon from "@/assets/icons/linkedin.svg";
import MilesStoneIcon from "@/assets/icons/milestone.svg";
import MilesStoneActiveIcon from "@/assets/icons/milestone-active.svg";
import CurrentLocationIcon from "@/assets/icons/current-location.svg";
import MapPinIcon from "@/assets/icons/map-pin.svg";
import CalendarIcon from "@/assets/icons/calendar.svg";
import ClockIcon from "@/assets/icons/time-fill.svg";
import FlightIcon from "@/assets/icons/flight.svg";
import CarIcon from "@/assets/icons/car.svg";
import CalendarRoundIcon from "@/assets/icons/calendar-round.svg";


import IPMockup from "@/assets/images/ip-mockup.svg";
import HIWImg01 from "@/assets/images/h-i-w-01.svg";
import HIWImg02 from "@/assets/images/h-i-w-02.svg";
import HIWImg03 from "@/assets/images/h-i-w-03.svg";
import FeatureImg01 from "@/assets/images/feature-01.svg";
import FeatureImg02 from "@/assets/images/feature-02.svg";
import FeatureImg03 from "@/assets/images/feature-03.svg";
import DLetterImg from "@/assets/images/d-letter.svg"

import HIWImgSup01 from "@/assets/images/h-i-w-sup-01.svg";
import HIWImgSup02 from "@/assets/images/h-i-w-sup-02.svg";
import HIWImgSup03 from "@/assets/images/h-i-w-sup-03.svg";

export const IMAGES = {
  Logo,
  ArrowRightLight,
  Globe,
  AppStoreIcon,
  GooglePlayIcon,
  FacebookIcon,
  InstagramIcon,
  LinkedInIcon,

  MilesStoneIcon,
  MilesStoneActiveIcon,
  CurrentLocationIcon,
  MapPinIcon,
  CalendarIcon,
  ClockIcon,
  FlightIcon,
  CarIcon,
  CalendarRoundIcon,

  IPMockup,
  HIWImg01,
  HIWImg02,
  HIWImg03,
  FeatureImg01,
  FeatureImg02,
  FeatureImg03,
  DLetterImg,

  HIWImgSup01,
  HIWImgSup02,
  HIWImgSup03
} as const;

export type ImageKey = keyof typeof IMAGES;